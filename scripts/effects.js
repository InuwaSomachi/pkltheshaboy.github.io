// Mobile scroll fix
function enableMobileScroll() {
    if ('maxTouchPoints' in navigator && navigator.maxTouchPoints > 0) {
        document.body.style.overflowY = 'auto';
        document.documentElement.style.overflowY = 'auto';
    }
}
window.addEventListener('DOMContentLoaded', enableMobileScroll);
