const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('doConvertToHTML', (text) => ipcRenderer.invoke('convertToHTML', text));

contextBridge.exposeInMainWorld('saveToFile', (text) => ipcRenderer.invoke('saveToFile', text));
contextBridge.exposeInMainWorld('getMarkdown', () => ipcRenderer.invoke('getMarkdown'));