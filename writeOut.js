#!/usr/bin/env node
'use strict';

const [,, ...args] = process.argv
const fs = require('fs');
var es = require('event-stream')
const { Writable } = require('stream')

module.exports  = Writable({
	write (buffer, _, cb) {

		process.stdout.write(`${buffer}`), (err) => {
			if (err) throw err;
		}
		cb()
	}

})
