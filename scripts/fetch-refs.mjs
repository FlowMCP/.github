import fs from 'node:fs'
import path from 'node:path'


const REFS_URL = 'https://raw.githubusercontent.com/FlowMCP/flowmcp-spec/main/generated/refs.resolved.json'
const OUT_PATH = path.resolve( 'src/data/refs.json' )
const EXPECTED_SCHEMA = 'refs/1.0.0'


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

fs.mkdirSync( path.dirname( OUT_PATH ), { recursive: true } )
fs.writeFileSync( OUT_PATH, JSON.stringify( refs, null, 4 ), 'utf-8' )

console.log( `[fetch-refs] OK — spec.currentVersion=${ refs.spec.currentVersion }, generated.at=${ refs.generated.at }` )
