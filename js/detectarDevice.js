export function detectarDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPhone|iPad|iPod|Macintosh/i.test(userAgent)) {
        return 'Apple';
    }

    if (/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        return 'Mobile';
    }

    return 'Desktop';
}
