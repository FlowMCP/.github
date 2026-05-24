import fs from 'node:fs'
import path from 'node:path'


const REFS_URL = 'https://raw.githubusercontent.com/FlowMCP/flowmcp-spec/main/generated/refs.resolved.json'
const MANIFEST_URL = 'https://raw.githubusercontent.com/FlowMCP/flowmcp-spec/main/generated/docs-payload/manifest.json'
const OUT_PATH = path.resolve( 'src/data/refs.json' )
const EXPECTED_SCHEMA = 'refs/1.0.0'
const STATS_NULL_BLOCK = {
    count_schemas: null,
    count_unique_datasources: null,
    count_tools: null,
    count_resources: null,
    count_skills: null,
    timestamp: null,
    schema_version: null,
    build_hash: null
}


const response = await fetch( REFS_URL )

if( response.status !== 200 ) {
    console.error( `[fetch-refs] HTTP ${ response.status } from ${ REFS_URL }` )
    process.exit( 1 )
}

const refs = await response.json()

if( refs.schemaVersion !== EXPECTED_SCHEMA ) {
    console.error( `[fetch-refs] schemaVersion mismatch — expected "${ EXPECTED_SCHEMA }", got "${ refs.schemaVersion }"` )
    process.exit( 1 )
}

if( refs.validation?.passed !== true ) {
    console.error( '[fetch-refs] validation.passed is not true — Spec-Repo refs.resolved.json is invalid' )
    process.exit( 1 )
}

// Fetch spec payload (manifest.json) to extract meta.stats — Single-Source-of-Truth
// per Memo 059 Phase 4. Failure must NOT abort the build — fall back to null block.
const fetchStats = async () => {
    try {
        const manifestResponse = await fetch( MANIFEST_URL )
        if( manifestResponse.status !== 200 ) {
            console.warn( `[fetch-refs] manifest HTTP ${ manifestResponse.status } — using null stats` )
            return STATS_NULL_BLOCK
        }
        const manifest = await manifestResponse.json()
        if( !manifest?.meta?.stats ) {
            console.warn( '[fetch-refs] manifest.meta.stats missing — using null stats' )
            return STATS_NULL_BLOCK
        }
        return manifest.meta.stats
    } catch( error ) {
        console.warn( `[fetch-refs] manifest fetch failed: ${ error.message } — using null stats` )
        return STATS_NULL_BLOCK
    }
}

refs.stats = await fetchStats()

fs.mkdirSync( path.dirname( OUT_PATH ), { recursive: true } )
fs.writeFileSync( OUT_PATH, JSON.stringify( refs, null, 4 ), 'utf-8' )

console.log( `[fetch-refs] OK — spec.currentVersion=${ refs.spec.currentVersion }, generated.at=${ refs.generated.at }` )
console.log( `[fetch-refs] stats — count_schemas=${ refs.stats.count_schemas }, count_tools=${ refs.stats.count_tools }, count_unique_datasources=${ refs.stats.count_unique_datasources }` )
