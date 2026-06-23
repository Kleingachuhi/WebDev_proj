(function initDarkMode() {
    const toggleBtn = document.getElementById('darkModeToggle');
    if (!toggleBtn) return;

    const stored = localStorage.getItem('technova-theme');
    if (stored === 'dark') {
        document.body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️';
    } else if (stored === 'light') {
        document.body.classList.remove('dark-mode');
        toggleBtn.textContent = '🌙';
    } else {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add('dark-mode');
            toggleBtn.textContent = '☀️';
            localStorage.setItem('technova-theme', 'dark');
        } else {
            toggleBtn.textContent = '🌙';
        }
    }

    toggleBtn.addEventListener('click', function() {
        const isDark = document.body.classList.toggle('dark-mode');
        this.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('technova-theme', isDark ? 'dark' : 'light');
    });
})();