import { app, BrowserWindow, ipcMain, IpcMain } from "electron";
import { config } from "./config";
function createWindow(): void {
    const win: BrowserWindow = new BrowserWindow({
        width: config.width,
        height: config.height,
        minimizable: config.minimizable,
        frame: config.frame,
        webPreferences: {
            preload: config.webPreferences.preload
        }
    });
    win.loadFile(process.cwd() + "/public/index.html");

    ipcMain.on("close", () => {
        win.close();
    });

    ipcMain.on("minimize", () => {
        win.minimize();
    });

    ipcMain.on("maximize", () => {
        if (win.isMaximized()) {
            win.unmaximize();
        } else {
            win.maximize();
        };
    });
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        };
    });
});