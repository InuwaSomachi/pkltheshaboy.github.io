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
// Mobile scroll enforcement
if ('ontouchstart' in window) {
    document.body.style.touchAction = 'pan-y';
    document.documentElement.style.overflowY = 'auto';
    
    // Make smoke canvas non-interactive
    const smokeCanvas = document.getElementById('smoke-canvas');
    if (smokeCanvas) {
        smokeCanvas.style.pointerEvents = 'none';
    }
}
