export function carregaIdioma(lang, context) {
    fetch(`js/lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
            context.aplicarLinguagem(data);
        });
}
