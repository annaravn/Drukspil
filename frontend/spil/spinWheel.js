let iframe; // Deklareret uden for funktionen, så den er global og kan tilgås fra andre funktioner

function spinWheel() {
    // Opret et iframe-element
    iframe = document.createElement('iframe');
    
    // Sæt kilden for iframe til spinWheel.html
    iframe.src = 'spil/spinWheel.html';
    
    // Sæt størrelsen på iframe
    iframe.style.width = '100%'; // Indstil bredden til 100% af forælderens bredde
    iframe.style.height = '100vh'; // Indstil højden til 100% af viewportens højde
    iframe.style.border = 'none'; // Fjern rammen for en mere sømløs integration
    
    // Indsæt iframe inden i det eksisterende element på din side
    document.getElementById('spinWheelContainer').appendChild(iframe);
    
    // Tilføj en knap til at lukke iframe'et
    var closeButton = document.createElement('button');
    closeButton.textContent = 'Luk';
    closeButton.addEventListener('click', closeSpinWheel);
    document.getElementById('spinWheelContainer').appendChild(closeButton);
}

function closeSpinWheel() {
    // Fjern iframe fra DOM'en
    iframe.parentNode.removeChild(iframe);
    
    // Fjern knappen til at lukke iframe'et
    this.parentNode.removeChild(this); // 'this' refererer til knappen, der udløste funktionen
}
