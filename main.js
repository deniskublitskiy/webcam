const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1030,
        height: 1000,
        resizable: false
    });

    mainWindow.loadURL(`https://yasch-kub-webcam.herokuapp.com`);
    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});