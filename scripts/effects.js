// Mobile scroll fix
function enableMobileScroll() {
    if ('maxTouchPoints' in navigator && navigator.maxTouchPoints > 0) {
        document.body.style.overflowY = 'auto';
        document.documentElement.style.overflowY = 'auto';
    }
}
window.addEventListener('DOMContentLoaded', enableMobileScroll);
// Mobile scroll enforcement
function enableMobileScroll() {
    if ('ontouchstart' in window) {
        document.body.style.overflowY = 'scroll';
        document.body.style.height = 'auto';
        document.documentElement.style.overflowY = 'scroll';
        document.documentElement.style.height = 'auto';
    }
}
window.addEventListener('load', enableMobileScroll);
