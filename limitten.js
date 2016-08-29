#!/usr/bin/env node
'use strict';

const [,, ...args] = process.argv
const fs = require('fs');
var es = require('event-stream')
const { Transform } = require('stream')
let counter = 0;
let body;

module.exports = Transform ({
	transform(buffer, enc, cb) {
		if (buffer.toString().length > 0) counter++
   	if (counter < 11) {
     body = buffer.toString()
   	} else {
     body = ''
    }
		cb(null, `${body}`)
	}
})



