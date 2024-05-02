let iframe; // Deklareret uden for funktionen, så den er global og kan tilgås fra andre funktioner
let iframe2;
let iframe3;
let iframe4;
let iframe5;
let iframe6;
let iframe7;
let iframe8;
let iframe9;
let iframe10;


function spinWheel() {
    // Opret et iframe-element
    iframe = document.createElement('iframe');
    
    // Sæt kilden for iframe til spinWheel.html
    iframe.src = 'spil/html/spinWheel.html';
    
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

function talGeat() {
     // Opret et iframe-element
     iframe2 = document.createElement('iframe');
    
     // Sæt kilden for iframe til spinWheel.html
     iframe2.src = 'spil/html/talGeat.html';
     
     // Sæt størrelsen på iframe
     // Angiv stilen for i-framen ved hjælp af JavaScript
     iframe2.style.width = '100%'; // Juster bredden af ​​i-framen
     iframe2.style.height = '100%'; // Juster højden af ​​i-framen
     iframe2.style.border = 'none'; // Fjern rammen for en mere sømløs integration
     iframe2.style.position = 'absolute'; // Placer i-framen absolut
     iframe2.style.top = '50%'; // Placer i-framen 50% fra toppen
     iframe2.style.left = '50%'; // Placer i-framen 50% fra venstre
     iframe2.style.transform = 'translate(-50%, -50%)'; // Juster placeringen for at centrere i-framen
     
     
     // Indsæt iframe inden i det eksisterende element på din side
     document.getElementById('talGeatContainer').appendChild(iframe2);
     
     // Tilføj en knap til at lukke iframe'et
     var closeButton2 = document.createElement('button');
     closeButton2.id = 'closeButton'; // Sætter ID på knappen
     closeButton2.textContent = 'Luk';
     closeButton2.addEventListener('click', closetalGeat);
     document.getElementById('talGeatContainer').appendChild(closeButton2);






}

function WhackAMole() {
    // Opret et iframe-element
    iframe3 = document.createElement('iframe');
   
    // Sæt kilden for iframe til spinWheel.html
    iframe3.src = 'spil/html/WhackAMole.html';
    
    // Sæt størrelsen på iframe
    // Angiv stilen for i-framen ved hjælp af JavaScript
    iframe3.style.width = '100%'; // Juster bredden af ​​i-framen
    iframe3.style.height = '100%'; // Juster højden af ​​i-framen
    iframe3.style.border = 'none'; // Fjern rammen for en mere sømløs integration
    iframe3.style.position = 'absolute'; // Placer i-framen absolut
    iframe3.style.top = '50%'; // Placer i-framen 50% fra toppen
    iframe3.style.left = '50%'; // Placer i-framen 50% fra venstre
    iframe3.style.transform = 'translate(-50%, -50%)'; // Juster placeringen for at centrere i-framen
    
    
    // Indsæt iframe inden i det eksisterende element på din side
    document.getElementById('WhackAMoleContainer').appendChild(iframe3);
    
    // Tilføj en knap til at lukke iframe'et
    var closeButton3 = document.createElement('button');
    closeButton3.id = 'closeButton'; // Sætter ID på knappen
    closeButton3.textContent = 'Luk';
    closeButton3.addEventListener('click', closeWhackAMole);
    document.getElementById('WhackAMoleContainer').appendChild(closeButton3);






}

function huskeSpil() {
    // Opret et iframe-element
    iframe4 = document.createElement('iframe');
   
    // Sæt kilden for iframe til spinWheel.html
    iframe4.src = 'spil/html/huskeSpil.html';
    
    // Sæt størrelsen på iframe
    // Angiv stilen for i-framen ved hjælp af JavaScript
    iframe4.style.width = '100%'; // Juster bredden af ​​i-framen
    iframe4.style.height = '100%'; // Juster højden af ​​i-framen
    iframe4.style.border = 'none'; // Fjern rammen for en mere sømløs integration
    iframe4.style.position = 'absolute'; // Placer i-framen absolut
    iframe4.style.top = '50%'; // Placer i-framen 50% fra toppen
    iframe4.style.left = '50%'; // Placer i-framen 50% fra venstre
    iframe4.style.transform = 'translate(-50%, -50%)'; // Juster placeringen for at centrere i-framen
    
    
    // Indsæt iframe inden i det eksisterende element på din side
    document.getElementById('huskeSpilContainer').appendChild(iframe4);
    
    // Tilføj en knap til at lukke iframe'et
    var closeButton4 = document.createElement('button');
    closeButton4.id = 'closeButton'; // Sætter ID på knappen
    closeButton4.textContent = 'Luk';
    closeButton4.addEventListener('click', closehuskeSpil);
    document.getElementById('huskeSpilContainer').appendChild(closeButton4);






}


function blackJack() {
    // Opret et iframe-element
    iframe5 = document.createElement('iframe');
   
    // Sæt kilden for iframe til spinWheel.html
    iframe5.src = 'spil/html/blackJack.html';
    
    // Sæt størrelsen på iframe
    // Angiv stilen for i-framen ved hjælp af JavaScript
    iframe5.style.width = '100%'; // Juster bredden af ​​i-framen
    iframe5.style.height = '100%'; // Juster højden af ​​i-framen
    iframe5.style.border = 'none'; // Fjern rammen for en mere sømløs integration
    iframe5.style.position = 'absolute'; // Placer i-framen absolut
    iframe5.style.top = '50%'; // Placer i-framen 50% fra toppen
    iframe5.style.left = '50%'; // Placer i-framen 50% fra venstre
    iframe5.style.transform = 'translate(-50%, -50%)'; // Juster placeringen for at centrere i-framen
    
    
    // Indsæt iframe inden i det eksisterende element på din side
    document.getElementById('blackJackContainer').appendChild(iframe5);
    
    // Tilføj en knap til at lukke iframe'et
    var closeButton5 = document.createElement('button');
    closeButton5.id = 'closeButton'; // Sætter ID på knappen
    closeButton5.textContent = 'Luk';
    closeButton5.addEventListener('click', closeblackJack);
    document.getElementById('blackJackContainer').appendChild(closeButton5);
}
function hangMan() {
    // Opret et iframe-element
    iframe6 = document.createElement('iframe');
   
    // Sæt kilden for iframe til spinWheel.html
    iframe6.src = 'spil/html/hangMan.html';
    
    // Sæt størrelsen på iframe
    // Angiv stilen for i-framen ved hjælp af JavaScript
    iframe6.style.width = '100%'; // Juster bredden af ​​i-framen
    iframe6.style.height = '100%'; // Juster højden af ​​i-framen
    iframe6.style.border = 'none'; // Fjern rammen for en mere sømløs integration
    iframe6.style.position = 'absolute'; // Placer i-framen absolut

    iframe6.style.top = '50%'; // Placer i-framen 50% fra toppen
    iframe6.style.left = '50%'; // Placer i-framen 50% fra venstre
    iframe6.style.transform = 'translate(-50%, -50%)'; // Juster placeringen for at centrere i-framen

    // Indsæt iframe inden i det eksisterende element på din side
    document.getElementById('hangManContainer').appendChild(iframe6);

    // Tilføj en knap til at lukke iframe'et
    var closeButton6 = document.createElement('button');
    closeButton6.id = 'closeButton'; // Sætter ID på knappen
    closeButton6.textContent = 'Luk';
    closeButton6.addEventListener('click', closehangMan);
    document.getElementById('hangManContainer').appendChild(closeButton6);







}

function flappyBird() {

    // Opret et iframe-element
    iframe7 = document.createElement('iframe');

    // Sæt kilden for iframe til spinWheel.html

    iframe7.src = 'spil/html/flappyBird.html';

    // Sæt størrelsen på iframe
    // Angiv stilen for i-framen ved hjælp af JavaScript
    iframe7.style.width = '100%'; // Juster bredden af ​​i-framen
    iframe7.style.height = '100%'; // Juster højden af ​​i-framen
    iframe7.style.border = 'none'; // Fjern rammen for en mere sømløs integration
    iframe7.style.position = 'absolute'; // Placer i-framen absolut
    iframe7.style.top = '50%'; // Placer i-framen 50% fra toppen
    iframe7.style.left = '50%'; // Placer i-framen 50% fra venstre
    iframe7.style.transform = 'translate(-50%, -50%)'; // Juster placeringen for at centrere i-framen

    // Indsæt iframe inden i det eksisterende element på din side
    document.getElementById('flappyBirdContainer').appendChild(iframe7);

    // Tilføj en knap til at lukke iframe'et
    var closeButton7 = document.createElement('button');
    closeButton7.id = 'closeButton'; // Sætter ID på knappen
    closeButton7.textContent = 'Luk';
    closeButton7.addEventListener('click', closeflappyBird);
    document.getElementById('flappyBirdContainer').appendChild(closeButton7);

}

function stenSaksPapir() {

    // Opret et iframe-element
    iframe8 = document.createElement('iframe');

    // Sæt kilden for iframe til spinWheel.html

    iframe8.src = 'spil/html/stenSaksPapir.html';

    // Sæt størrelsen på iframe
    // Angiv stilen for i-framen ved hjælp af JavaScript
    iframe8.style.width = '100%'; // Juster bredden af ​​i-framen
    iframe8.style.height = '100%'; // Juster højden af ​​i-framen
    iframe8.style.border = 'none'; // Fjern rammen for en mere sømløs integration
    iframe8.style.position = 'absolute'; // Placer i-framen absolut
    iframe8.style.top = '50%'; // Placer i-framen 50% fra toppen
    iframe8.style.left = '50%'; // Placer i-framen 50% fra venstre
    iframe8.style.transform = 'translate(-50%, -50%)'; // Juster placeringen for at centrere i-framen

    // Indsæt iframe inden i det eksisterende element på din side
    document.getElementById('stenSaksPapirContainer').appendChild(iframe8);

    // Tilføj en knap til at lukke iframe'et
    var closeButton8 = document.createElement('button');
    closeButton8.id = 'closeButton'; // Sætter ID på knappen
    closeButton8.textContent = 'Luk';
    closeButton8.addEventListener('click', closestenSaksPapir);
    document.getElementById('stenSaksPapirContainer').appendChild(closeButton8);


}

function reactionTest() {
    // Opret et iframe-element
    iframe9 = document.createElement('iframe');

    // Sæt kilden for iframe til spinWheel.html

    iframe9.src = 'spil/html/reactionTest.html';

    // Sæt størrelsen på iframe
    // Angiv stilen for i-framen ved hjælp af JavaScript
    iframe9.style.width = '100%'; // Juster bredden af ​​i-framen
    iframe9.style.height = '100%'; // Juster højden af ​​i-framen
    iframe9.style.border = 'none'; // Fjern rammen for en mere sømløs integration
    iframe9.style.position = 'absolute'; // Placer i-framen absolut
    iframe9.style.top = '50%'; // Placer i-framen 50% fra toppen
    iframe9.style.left = '50%'; // Placer i-framen 50% fra venstre
    iframe9.style.transform = 'translate(-50%, -50%)'; // Juster placeringen for at centrere i-framen

    // Indsæt iframe inden i det eksisterende element på din side
    document.getElementById('reactionTestContainer').appendChild(iframe9);

    // Tilføj en knap til at lukke iframe'et
    var closeButton9 = document.createElement('button');
    closeButton9.id = 'closeButton'; // Sætter ID på knappen
    closeButton9.textContent = 'Luk';
    closeButton9.addEventListener('click', closereactionTest);
    document.getElementById('reactionTestContainer').appendChild(closeButton9);

}

function wordScrable() {

    iframe10 = document.createElement('iframe');

    iframe10.src = 'spil/html/wordScrable.html';

    iframe10.style.width = '100%'; // Juster bredden af ​​i-framen
    iframe10.style.height = '100%'; // Juster højden af ​​i-framen
    iframe10.style.border = 'none'; // Fjern rammen for en mere sømløs integration
    iframe10.style.position = 'absolute'; // Placer i-framen absolut
    iframe10.style.top = '50%'; // Placer i-framen 50% fra toppen
    iframe10.style.left = '50%'; // Placer i-framen 50% fra venstre
    iframe10.style.transform = 'translate(-50%, -50%)'; // Juster placeringen for at centrere i-framen

    document.getElementById('wordScrableContainer').appendChild(iframe10);

    var closeButton10 = document.createElement('button');
    closeButton10.id = 'closeButton'; // Sætter ID på knappen
    closeButton10.textContent = 'Luk';
    closeButton10.addEventListener('click', closewordScrable);
    document.getElementById('wordScrableContainer').appendChild(closeButton10);

}


function closewordScrable() {
    // Fjern iframe fra DOM'en
    iframe10.parentNode.removeChild(iframe10);

    // Fjern knappen til at lukke iframe'et
    this.parentNode.removeChild(this); // 'this' refererer til knappen, der udløste funktionen

}





function closereactionTest() {

    // Fjern iframe fra DOM'en
    iframe9.parentNode.removeChild(iframe9);

    // Fjern knappen til at lukke iframe'et
    this.parentNode.removeChild(this); // 'this' refererer til knappen, der udløste funktionen
}








function closestenSaksPapir() {
    // Fjern iframe fra DOM'en
    iframe8.parentNode.removeChild(iframe8);

    // Fjern knappen til at lukke iframe'et
    this.parentNode.removeChild(this); // 'this' refererer til knappen, der udløste funktionen
}



function closeflappyBird() {
    // Fjern iframe fra DOM'en
    iframe7.parentNode.removeChild(iframe7);

    // Fjern knappen til at lukke iframe'et
    this.parentNode.removeChild(this); // 'this' refererer til knappen, der udløste funktionen
}


function closehangMan() {
    // Fjern iframe fra DOM'en
    iframe6.parentNode.removeChild(iframe6);

    // Fjern knappen til at lukke iframe'et
    this.parentNode.removeChild(this); // 'this' refererer til knappen, der udløste funktionen
}







function closeblackJack() {
    // Fjern iframe fra DOM'en
    iframe5.parentNode.removeChild(iframe5);
    
    // Fjern knappen til at lukke iframe'et
    this.parentNode.removeChild(this); // 'this' refererer til knappen, der udløste funktionen
}



function closehuskeSpil() {
    // Fjern iframe fra DOM'en
    iframe4.parentNode.removeChild(iframe4);
    
    // Fjern knappen til at lukke iframe'et
    this.parentNode.removeChild(this); // 'this' refererer til knappen, der udløste funktionen
}










function closetalGeat() {
    // Fjern iframe fra DOM'en
    iframe2.parentNode.removeChild(iframe2);
    
    // Fjern knappen til at lukke iframe'et
    this.parentNode.removeChild(this); // 'this' refererer til knappen, der udløste funktionen
}


function closeWhackAMole() {
    // Fjern iframe fra DOM'en
    iframe3.parentNode.removeChild(iframe3);
    
    // Fjern knappen til at lukke iframe'et
    this.parentNode.removeChild(this); // 'this' refererer til knappen, der udløste funktionen
}








function closeSpinWheel() {
    // Fjern iframe fra DOM'en
    iframe.parentNode.removeChild(iframe);
    
    // Fjern knappen til at lukke iframe'et
    this.parentNode.removeChild(this); // 'this' refererer til knappen, der udløste funktionen
}
