document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener('load', () => {
        const pageLoadTime = performance.now();
        const loadTimeElement = document.getElementById('load-time');
        if (loadTimeElement) {
            loadTimeElement.textContent = 'Время загрузки страницы: ' + (pageLoadTime / 1000).toFixed(2) + ' секунд';
        }
    });
});


