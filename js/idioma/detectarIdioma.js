export function detectarIdioma() {
    const language = navigator.language || navigator.userLanguage;
    
    const languageMap = {
        'pt': 'pt',
        'en': 'en',
        'es': 'es'
    };
    
    return languageMap[language.slice(0, 2)] || 'pt';
}
