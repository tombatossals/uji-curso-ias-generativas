document.getElementById('translate-button').addEventListener('click', translateText);

async function translateText() {
    const originalText = document.getElementById('language-selector').value;
    const translatedTextArea = document.getElementById('translated-text-area');

    if (!originalText.trim()) {
        alert('Por favor, introduzca texto para traducir.');
        return;
    }
    const idioma = document.getElementById('translated-language-selector').value;
    if (!idioma.trim()) {
        alert('Por favor, seleccione el idioma al que desea traducir.');
        return;
    }
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer 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`
        },
        body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [{ role: "user", content: `Translate the following text to ${idioma}: ${originalText}` }],
            max_tokens: 100
        })
    });

    const data = await response.json();
    translatedTextArea.value = data.choices[0].message.content.trim();
}