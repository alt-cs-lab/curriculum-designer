const express = require('express')
const data = require('../data/cs2013.json')

// We unpack the data from the JSON file for cached & easier access
const units = data.areas.map(area => area.units).flat()
const topics = units.map(unit => unit.topics).flat()
const outcomes = units.map(unit => unit.outcomes).flat()

/**
 * An router that serves the ACM recommendations
 */ 
const router = new express();

/**
 * The topics route sends all topics in the curriculum 
 * recommendations
 */
router.get('/topics', (req, res) => res.json(topics))

/**
 * The outcomes route sends all topics in the curriculum 
 * recommendations
 */
router.get('/outcomes', (req, res) => res.json(outcomes))

/**
 * The recommendations router serves data from the ACM 
 * Computer Science curriculum standards as JSON files
 */
module.exports = router;