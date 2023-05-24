const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const { convertToHTML } = require('./modules/markdown');


const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'modules', 'preload.js'),
    },
  })

  win.loadFile(path.join(__dirname, 'src', 'index.html'));
}

ipcMain.handle('convertToHTML', convertToHTML);

app.whenReady().then(createWindow);

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});