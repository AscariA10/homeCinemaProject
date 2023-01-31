const themeSwitchers = document.querySelectorAll('.change-theme');

themeSwitchers.forEach(switcher => {
    switcher.addEventListener('click', function () {
        applyTheme(this.dataset.theme);
        localStorage.setItem('theme', this.dataset.theme);
    });
});

function applyTheme() {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
}

/* Save theme */
let activeTheme = localStorage.getItem('theme');

if (activeTheme === null) {
    applyTheme('light');
} else {
    applyTheme(activeTheme);
}