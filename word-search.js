#!/usr/bin/env node
'use strict';

const [,, ...args] = process.argv
const fs = require('fs');
let matches = [];


const { Readable, Transform, Writable } = require('stream')

let dictRead = fs.createReadStream("/usr/share/dict/words", "utf8")

const JSONStringify = Transform()
JSONStringify._transform = (buffer, _, cb) => {
	let wordsString = `${buffer.toString()}`
	let wordsArray = wordsString.split('\n')
	wordsArray.forEach((word) => {
		if (word.startsWith(args)) {
			matches.push(word);
		}
	})
  cb(null, `${matches}`)
}

const ReduceMatches = Transform()
	ReduceMatches._transform = (buffer, _, cb) => {
		buffer.splice(0, 10)
	}


const dictWrite = Writable()
dictWrite._write = (buffer, _, cb) => {

	process.stdout.write(buffer), (err) => {
		if (err) throw err;
		// process.stdout(`${buffer} was appended`)
	}
	cb()
}

dictRead.pipe(JSONStringify).pipe(ReduceMatches).pipe(dictWrite)
