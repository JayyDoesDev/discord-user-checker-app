import { ipcRenderer } from "electron";

window.addEventListener('DOMContentLoaded', () => {
    const closeButton: Element = document.getElementById('tab-bar-close');
    const minimizeButton: Element = document.getElementById('tab-bar-minimize');
    const maximizeButton: Element = document.getElementById('tab-bar-maximize');
    closeButton.addEventListener('click', () => {
        ipcRenderer.send('close');
    });

    minimizeButton.addEventListener('click', () => {
        ipcRenderer.send('minimize');
    });

    maximizeButton.addEventListener('click', () => {
        ipcRenderer.send('maximize');
    });
});
