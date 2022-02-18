const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);

//writes to the given JSON file
const writeToFile = (destination, content) => 
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nwritten to ${destination}`)
    );

//reads data from a given file and appends content
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
};

// add readAndDelete here

module.exports = { readFromFile, writeToFile, readAndAppend };