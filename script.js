//Dark mode
const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;
const switchButton = document.getElementById('switch');
const footer = document.getElementById('footer');

themeSwitch.addEventListener('change', function() {
    if(this.checked) {
        body.classList.add('dark');
        body.classList.remove('bg-white');
        body.classList.add('bg-gray-900');
        switchButton.classList.remove('bg-gray-600');
        switchButton.classList.add('dark:bg-gray-900');
        switchButton.classList.remove('dark:bg-gray-400');
        footer.classList.remove('text-blue-600');
        footer.classList.add('text-gray-300');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('bg-white');
        body.classList.remove('bg-gray-900');
        switchButton.classList.remove('dark:bg-gray-900');
        switchButton.classList.add('bg-gray-600');
        switchButton.classList.remove('bg-gray-400');
        footer.classList.remove('text-gray-300');
        footer.classList.add('text-blue-600');
        localStorage.setItem('theme', 'light');
    }
});


if(localStorage.getItem('theme') === 'dark') {
    themeSwitch.checked = true;
    body.classList.add('dark');
    body.classList.remove('bg-white');
    body.classList.add('bg-gray-900');
    switchButton.classList.remove('bg-gray-600');
    switchButton.classList.add('dark:bg-gray-900');
    footer.classList.remove('text-blue-600');
    footer.classList.add('text-gray-300');
} else {
    themeSwitch.checked = false;
    body.classList.remove('dark');
    body.classList.add('bg-white');
    body.classList.remove('bg-gray-900');
    switchButton.classList.remove('dark:bg-gray-900');
    switchButton.classList.add('bg-gray-600');
    footer.classList.remove('text-gray-300');
    footer.classList.add('text-blue-600');
}
//End of dark mode