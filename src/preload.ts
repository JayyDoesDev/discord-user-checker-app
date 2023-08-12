import { ipcRenderer } from "electron";

window.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.getElementById('tab-bar-close');
    const minimizeButton = document.getElementById('tab-bar-minimize');
    const maximizeButton = document.getElementById('tab-bar-maximize');

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