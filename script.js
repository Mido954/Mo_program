function openInTelegram(url) {
    // Try to open in Telegram app directly using tg:// if on mobile
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        const telegramUrl = url.replace('https://t.me/', 'tg://resolve?domain=');
        window.location.href = telegramUrl;
        
        // Fallback to web if app doesn't open
        setTimeout(() => {
            window.open(url, '_blank', 'noopener,noreferrer');
        }, 1000);
    } else {
        // On desktop, open in new tab
        window.open(url, '_blank', 'noopener,noreferrer');
    }
}
