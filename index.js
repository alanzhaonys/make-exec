#!/usr/bin/env node

// Grab args
const [,, ...args] = process.argv;

// Error
if (args.length !== 1) {
  console.error('Usage: make-exec file.js');
  return false;
}

var fs = require('fs');

// Get args
var file = args[0];

// Check file existence
if (!fs.existsSync(file)) {
  console.error('File does not exsit.');
  return false;
}

// Write back to the file
fs.chmod(file, 0777, function(err) {
  if (err) {
    return err;
  }

  console.info('Success!');
});
