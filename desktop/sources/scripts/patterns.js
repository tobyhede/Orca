'use strict'

const patterns = {}

// Setters

patterns['vion'] = `
iV...oV...nV`

patterns['vionvl'] = `
iV......oV......nV......vV......lV.`

// Readers

patterns['kion'] = `
3Kion
.:...`

patterns['kionvl'] = `
5Kionvl
.:.....`

// Notes

patterns['oct'] = `
.7TCDEFGAB
..C.......`

patterns['oct#'] = `
.7Tcdefgab
..C.......`

patterns['range'] = `
.C4
A08`

patterns['dy'] = `
D8
.Y`

module.exports = patterns
