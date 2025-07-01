import fs from 'fs'
import { config } from './src/data/config.mjs'
import { BadgeTable } from './node_modules/badgetable/src/BadgeTable.mjs'
const btg = new BadgeTable()

let template = fs.readFileSync( './src/data/template.txt', 'utf-8' )

const strs = config
    .reduce( ( acc, { preset, projects, replace } ) => {
        const badgeTable = btg
            .getTable( { preset, projects } )
            .split( "\n" )
            .reverse()
            .reduce( ( acc, line, index ) => {
                if( line.startsWith( '|' ) && acc.removed < 2 ) {
                    acc.removed += 1
                } else {
                    acc.lines.push( line )
                }
        
                return acc
            }, { lines: [], removed: 0 } )
            .lines
            .reverse()

        acc = acc.replace( replace, badgeTable )
        return acc
    }, template )

fs.writeFileSync( './profile/README.md', strs, 'utf-8' )
console.log( 'README.md updated successfully.')
