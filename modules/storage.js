const { app, BrowserWindow, ipcMain } = require('electron')
const { writeFile, readFile } = require('fs');
const path = require('path');

const filePath = path.resolve('./data/mardown.txt');

const saveToFile = (event, text) => {
  writeFile(filePath, text, (err) => {
    if (err) throw err;
  });
}

const getMarkdown = (event) => {
  return new Promise( (resolve, reject) => {
    readFile(filePath, 'utf8', (err, text) => {
      if (err) { 
        reject(err);
      }
      resolve(text);
    })
  });
}

module.exports = {
  saveToFile,
  getMarkdown
}