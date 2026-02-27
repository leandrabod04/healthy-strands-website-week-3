// Contact Form Validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    const formSuccess = document.getElementById('form-success');

    const nameInput    = document.getElementById('name');
    const nameError    = document.getElementById('name-error');
    const emailInput   = document.getElementById('email');
    const emailError   = document.getElementById('email-error');
    const phoneInput   = document.getElementById('phone');
    const phoneError   = document.getElementById('phone-error');
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('message-error');

    // --- Helpers ---
    function showError(input, errorEl, message) {
        input.classList.add('input-error');
        errorEl.textContent = message;
    }

    function clearError(input, errorEl) {
        input.classList.remove('input-error');
        errorEl.textContent = '';
    }

    // --- Validators (return error string or '') ---
    function validateName(value) {
        if (!value.trim()) return 'Please enter your name.';
        return '';
    }

    function validateEmail(value) {
        if (!value.trim()) return 'Please enter your email address.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address.';
        return '';
    }

    function validatePhone(value) {
        if (!value.trim()) return ''; // optional field
        if (!/^(?=.*\d)[\d\s()\-+]{7,20}$/.test(value)) return 'Please enter a valid phone number.';
        return '';
    }

    function validateMessage(value) {
        if (!value.trim()) return 'Please enter a message.';
        return '';
    }

    // --- Inline validation on blur ---
    nameInput.addEventListener('blur', function () {
        const msg = validateName(nameInput.value);
        msg ? showError(nameInput, nameError, msg) : clearError(nameInput, nameError);
    });

    emailInput.addEventListener('blur', function () {
        const msg = validateEmail(emailInput.value);
        msg ? showError(emailInput, emailError, msg) : clearError(emailInput, emailError);
    });

    phoneInput.addEventListener('blur', function () {
        const msg = validatePhone(phoneInput.value);
        msg ? showError(phoneInput, phoneError, msg) : clearError(phoneInput, phoneError);
    });

    messageInput.addEventListener('blur', function () {
        const msg = validateMessage(messageInput.value);
        msg ? showError(messageInput, messageError, msg) : clearError(messageInput, messageError);
    });

    // --- Submit handler ---
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameMsg    = validateName(nameInput.value);
        const emailMsg   = validateEmail(emailInput.value);
        const phoneMsg   = validatePhone(phoneInput.value);
        const messageMsg = validateMessage(messageInput.value);

        nameMsg    ? showError(nameInput,    nameError,    nameMsg)    : clearError(nameInput,    nameError);
        emailMsg   ? showError(emailInput,   emailError,   emailMsg)   : clearError(emailInput,   emailError);
        phoneMsg   ? showError(phoneInput,   phoneError,   phoneMsg)   : clearError(phoneInput,   phoneError);
        messageMsg ? showError(messageInput, messageError, messageMsg) : clearError(messageInput, messageError);

        if (!nameMsg && !emailMsg && !phoneMsg && !messageMsg) {
            form.hidden = true;
            formSuccess.removeAttribute('hidden');
            formSuccess.focus();
        } else {
            // Move focus to the first invalid field for accessibility
            const firstInvalid = form.querySelector('.input-error');
            if (firstInvalid) firstInvalid.focus();
        }
    });
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');

    // Header scroll effect
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');

            // Animate hamburger menu
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function () {
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }
});
