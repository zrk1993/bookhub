import { app, BrowserWindow, Tray, Menu, globalShortcut } from 'electron'
import db from './utils/db'
import path from 'path'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow = null
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

const createWindow = () => {

  // 隐藏菜单栏
  Menu.setApplicationMenu(null)
  app.dock.hide();

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
  mainWindow = new BrowserWindow({
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
  mainWindow.loadURL(winURL);

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

let tray = null
const createTray = () => {
  tray = new Tray(__static + '/fz.png')
  const menuList = [{
    accelerator: 'CommandOrControl+Alt+X',
    label: '退出',
    click() {
      Exit();
    }
  }];
  tray.setContextMenu(Menu.buildFromTemplate(menuList))
}


let count = 0
setInterval(() => {
  count = count + 1
  if (count > 100) {
    count = 0
    if (mainWindow && mainWindow.isVisible()) {
      mainWindow.hide();
    }
  }
}, 1000);

const createKey = () => {
  globalShortcut.register('Option+w', () => {
    count = 0
  })
  globalShortcut.register('Option+`', () => {
    count = 0
    mainWindow.webContents.send('command', 'prev_page')
  })
  globalShortcut.register('Option+1', () => {
    count = 0
    mainWindow.webContents.send('command', 'next_page')
  })
  globalShortcut.register('Option+q', () => {
    count = 0
    mainWindow.webContents.send('command', 'boss')
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
    }
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  if (mainWindow === null) {
    createWindow()
    createKey()
  }
  if (tray == null) {
    createTray()
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
