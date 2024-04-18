let iframe; // Deklareret uden for funktionen, så den er global og kan tilgås fra andre funktioner

function spinWheel() {
    // Opret et iframe-element
    iframe = document.createElement('iframe');
    
    // Sæt kilden for iframe til spinWheel.html
    iframe.src = 'spil/spinWheel.html';
    
    // Sæt størrelsen på iframe
    // Angiv stilen for i-framen ved hjælp af JavaScript
    iframe.style.width = '100%'; // Juster bredden af ​​i-framen
    iframe.style.height = '100%'; // Juster højden af ​​i-framen
    iframe.style.border = 'none'; // Fjern rammen for en mere sømløs integration
    iframe.style.position = 'absolute'; // Placer i-framen absolut
    iframe.style.top = '50%'; // Placer i-framen 50% fra toppen
    iframe.style.left = '50%'; // Placer i-framen 50% fra venstre
    iframe.style.transform = 'translate(-50%, -50%)'; // Juster placeringen for at centrere i-framen
    
    
    // Indsæt iframe inden i det eksisterende element på din side
    document.getElementById('spinWheelContainer').appendChild(iframe);
    
    // Tilføj en knap til at lukke iframe'et
    var closeButton = document.createElement('button');
    closeButton.id = 'closeButton'; // Sætter ID på knappen
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
