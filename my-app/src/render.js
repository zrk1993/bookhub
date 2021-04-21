var electron = require('electron')
electron.ipcRenderer.on('command', (event, message) => {
  var webview = document.getElementById('webview')
  webview.executeJavaScript(`window.__command('${message}')`)
});