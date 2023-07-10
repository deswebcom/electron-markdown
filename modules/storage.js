const { app, BrowserWindow, ipcMain } = require('electron')
const { writeFile, readFile } = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../data/mardown.txt');
console.log(filePath);

const saveToFile = (event, text) => {
  writeFile(filePath, text, (err) => {
    //if (err) throw err;
    if(err) {
      console.log(filePath);
    }
  });
}

const getMarkdown = (event) => {
  return new Promise( (resolve, reject) => {
    readFile(filePath, 'utf8', (err, text) => {
      if (err) { 
        reject(filePath);
      }
      resolve(text);
    })
  });
}

module.exports = {
  saveToFile,
  getMarkdown
}