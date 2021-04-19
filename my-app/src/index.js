const { app, BrowserWindow, Tray, Menu } = require('electron');
const path = require('path');
const db = require('./db')

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {

  var width = 856;
  var height = 47;
  var x = 356;
  var y = 429;

  var desktop_wh = db.get('desktop_wh') || '';
  var desktop_wz = db.get('desktop_wz') || '';

  var arr_wh = desktop_wh.split(",");
  var arr_wz = desktop_wz.split(",");

  if (arr_wh.length == 2) {
      width = parseInt(arr_wh[0]);
      height = parseInt(arr_wh[1]);
  }

  if (arr_wh.length == 2) {
      x = parseInt(arr_wz[1]);
      y = parseInt(arr_wz[0]);
  }

  // Create the browser window.
  let mainWindow = new BrowserWindow({
    width,
    height,
    useContentSize: true,
    resizable: true,
    frame: false,
    transparent: true,
    hasShadow: false,
    y,
    x,
    webPreferences: {
      webviewTag: true,
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  mainWindow.setSkipTaskbar(true);

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.on('resize', () => {
      var size = mainWindow.getSize();
      db.set("desktop_wh", size[0].toString() + "," + size[1].toString());
  })

  mainWindow.on('move', () => {
      var position = mainWindow.getPosition();
      db.set("desktop_wz", position[0].toString() + "," + position[1].toString());
  })

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

const Exit = () => {
  app.quit();
}

const createTray = () => {
  const tray = new Tray('./houzi.png')
  const menuList = [{
    accelerator: 'CommandOrControl+Alt+X',
    label: '退出',
    click() {
        Exit();
    }
  }];
  tray.setContextMenu(Menu.buildFromTemplate(menuList))
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  createWindow()
  createTray()
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
