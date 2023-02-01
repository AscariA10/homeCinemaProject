const themeSwitchers = document.querySelectorAll('.change-theme');

/* Switcher result and save theme */
themeSwitchers.forEach(switcher => {
   switcher.addEventListener('click', function () {
      applyTheme(this.dataset.theme);
      localStorage.setItem('theme', this.dataset.theme);
   });
});

/* Switcher work */
function applyTheme() {
   document.body.classList.toggle('dark');
   document.body.classList.toggle('light');
}

/* Get theme */
let activeTheme = localStorage.getItem('theme');


/* Theme from localStorage */
if (activeTheme === null) {
   document.body.classList.remove('dark');
   document.body.classList.add('light');
} if (activeTheme === 'light') {
   document.body.classList.remove('dark');
   document.body.classList.add('light');
} if (activeTheme === 'dark') {
   document.body.classList.remove('light');
   document.body.classList.add('dark');
}
