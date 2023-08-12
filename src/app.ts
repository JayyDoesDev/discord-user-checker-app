import { app, BrowserWindow } from "electron";
import { config } from "./config";
function createWindow(): void {
    const win: BrowserWindow = new BrowserWindow({
        width: config.width,
        height: config.height
    });
    win.loadFile(process.cwd() + "/public/index.html");
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        };
    });
});