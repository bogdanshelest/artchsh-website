import { projects } from './projects.js'
import { darkMode, lightMode } from './schemeColor.js';
import canvas from './interact-pixel-drawing.js'
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode();
}

function changeMode() {
    let checkBox = document.getElementById("changeMode");
    if (checkBox.checked == true) {
        darkMode();
        canvas;
    } else {
        lightMode();
        canvas;
    }
}

document.getElementById("projectsButton").addEventListener("click", projects);
document.getElementById("changeMode").addEventListener("click", changeMode);

$(document).ready(function () {
    let isDarkMode = localStorage.getItem('isDarkMode');
    if (isDarkMode == 'true') {
        darkMode;
        document.getElementById("changeMode").checked = true;
    } else if (isDarkMode == 'false') {
        lightMode;
        document.getElementById("changeMode").checked = false;
    }
});
