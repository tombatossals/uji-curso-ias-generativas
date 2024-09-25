document.getElementById('translate-button').addEventListener('click', translateText);

async function translateText() {
    const originalText = document.getElementById('language-selector').value;
    const translatedTextArea = document.getElementById('translated-text-area');
    const spinner = document.getElementById('spinner');
    const OPENAI_API_KEY = "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"

    if (!originalText.trim()) {
        alert('Por favor, introduzca texto para traducir.');
        return;
    }

    const idioma = document.getElementById('translated-language-selector').value;
    if (!idioma.trim()) {
        alert('Por favor, seleccione el idioma al que desea traducir.');
        return;
    }

    // Mostrar el spinner
    spinner.style.display = 'block';

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [{ role: "user", content: `Translate the following text to ${idioma}: ${originalText}` }],
                max_tokens: 100
            })
        });

        const data = await response.json();
        translatedTextArea.value = data.choices[0].message.content.trim();
    } catch (error) {
        console.error('Error al traducir:', error);
        alert('Hubo un error al traducir el texto. Por favor, inténtelo de nuevo.');
    } finally {
        // Ocultar el spinner
        spinner.style.display = 'none';
    }
}
