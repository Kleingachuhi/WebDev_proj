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

(function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        form.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        const feedback = document.getElementById('formFeedback');
        feedback.innerHTML = '';

        let isValid = true;

        const name = document.getElementById('name');
        if (!name.value.trim()) {
            name.classList.add('is-invalid');
            isValid = false;
        }

        const email = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            email.classList.add('is-invalid');
            isValid = false;
        }

        const subject = document.getElementById('subject');
        if (!subject.value.trim()) {
            subject.classList.add('is-invalid');
            isValid = false;
        }

        const message = document.getElementById('message');
        if (!message.value.trim()) {
            message.classList.add('is-invalid');
            isValid = false;
        }

        if (isValid) {
            feedback.innerHTML = `
                <div class="alert alert-success">
                    ✅ Thank you, ${name.value.trim()}! Your message has been sent. We'll get back to you soon.
                </div>
            `;
            form.reset();
            feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            feedback.innerHTML = `
                <div class="alert alert-danger">
                    ⚠️ Please fill in all fields correctly before submitting.
                </div>
            `;
            const firstInvalid = form.querySelector('.is-invalid');
            if (firstInvalid) firstInvalid.focus();
        }
    });

    form.querySelectorAll('input, textarea').forEach(field => {
        field.addEventListener('input', function() {
            this.classList.remove('is-invalid');
        });
    });
})();
