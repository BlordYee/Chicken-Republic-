// Add to existing main.js
initAnalytics() {
    // Google Analytics + Meta Pixel
    gtag('event', 'page_view');
    fbq('track', 'PageView');
}

initAbandonmentRecovery() {
    window.addEventListener('beforeunload', () => {
        if (this.cart.length > 0) {
            // Send abandoned cart data
            gtag('event', 'abandon_cart', { items: this.cart.length });
        }
    });
}

initLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            // Auto-populate nearest stores
            this.loadNearestStores(pos.coords);
        });
    }
}
