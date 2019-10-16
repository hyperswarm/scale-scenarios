#!/usr/bin/env node
'use strict'
const { join } = require('path')
const { createReadStream } = require('fs')
const { finished } = require('stream')
const run = require('ubuntu-dev-ec2/cmd')
const launcher = require('.')

run(launcher, usage).catch((err) => {
  console.log(run.argv, err.stack)
  console.error(`\n ⛔ Command failed: ${err.message} ⛔`)
  usage(1)
})

function usage (code = 0) {
  const help = createReadStream(join(__dirname, 'usage.txt'))
  help.pipe(process.stdout)
  finished(help, (err) => {
    if (err) {
      console.error(err)
      code = 1
    }
    process.exit(1)
  })
}
