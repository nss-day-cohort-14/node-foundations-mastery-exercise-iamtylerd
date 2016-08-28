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

		// let matches = []
		// // console.log(typeof(line))
		// // line.splice(0, 10)
		// let wordString = line.toString();
		// let wordsArray = [];
  // 	wordsArray.push(wordString)
		// console.log(wordsArray)
		// wordsArray.forEach(word) => {
		// 		if (word.startsWith(args) {
		// 			matches.push(word)
		// 		})
		// 	}
		// 	process.stdout.write(matches.splice(0, 10))
		cb(null, `${body}`)
	}
})



