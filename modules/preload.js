const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('doConvertToHTML', (text) => ipcRenderer.invoke('convertToHTML', text));
