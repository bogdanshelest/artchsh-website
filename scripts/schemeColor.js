const root = document.querySelector(':root');

export function darkMode() {
    root.style.setProperty('--background-color', 'black');
    root.style.setProperty('--primary-color', 'white');
    root.style.setProperty('--text-color', 'white');
    root.style.setProperty('--text-in-box', 'black');
    localStorage.setItem("isDarkMode", true);
}

export function lightMode() {
    root.style.setProperty('--background-color', 'white');
    root.style.setProperty('--primary-color', 'black');
    root.style.setProperty('--text-color', 'black');
    root.style.setProperty('--text-in-box', 'white');
    localStorage.setItem("isDarkMode", false);
}


