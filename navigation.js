// navigation.js
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.before, .after');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const currentFileName = window.location.pathname.split('/').pop(); // Get current HTML file name
            const currentIndex = Array.from(buttons).indexOf(this);

            let targetIndex;

            if (this.classList.contains('before')) {
                targetIndex = currentIndex - 1;
            } else {
                targetIndex = currentIndex + 1;
            }

            if (targetIndex >= 0 && targetIndex < buttons.length) {
                const targetFileName = buttons[targetIndex].getAttribute('data-el') + '.html';
                window.location.href = currentFileName === targetFileName ? currentFileName : targetFileName;
            }
        });
    });
});
