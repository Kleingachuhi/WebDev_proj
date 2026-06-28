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

(function initGalleryFilter() {
    const filterBtns = document.querySelectorAll('#galleryFilter .btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (!filterBtns.length || !galleryItems.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;

            galleryItems.forEach(item => {
                const category = item.dataset.category;
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
})();
 

(function initFaqSearch() {
    const searchInput = document.getElementById('faqSearch');
    const faqItems = document.querySelectorAll('.faq-item');
    if (!searchInput || !faqItems.length) return;

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();

        faqItems.forEach(item => {
            const button = item.querySelector('.accordion-button');
            const text = button ? button.textContent.toLowerCase() : '';
            const body = item.querySelector('.accordion-body');
            const bodyText = body ? body.textContent.toLowerCase() : '';

            const match = text.includes(query) || bodyText.includes(query);

            item.style.display = match ? '' : 'none';
            item.classList.toggle('highlight', match && query.length > 0);
        });

        if (!query) {
            faqItems.forEach(item => {
                item.style.display = '';
                item.classList.remove('highlight');
            });
        }
    });
})(); 


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
