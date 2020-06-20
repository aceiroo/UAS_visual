const electron = require('electron')

const {
    app,
    BrowserWindow,
    Menu,
    ipcMain
} = electron;

app.on("ready", () => {
    todayWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title: 'Temperature Converter'
    });

    todayWindow.loadURL(`file://${__dirname}/index.html`);
    todayWindow.on("closed", () => {

        app.quit();
        todayWindow = null;
    });

});