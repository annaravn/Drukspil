let startTime, endTime;
const testArea = document.getElementById('testArea');
const statusText = document.getElementById('status');
const reactionTimeDisplay = document.getElementById('reactionTime');

function changeToGreen() {
    testArea.style.backgroundColor = 'green';
    statusText.textContent = 'Klik nu!';
    startTime = new Date();
}

function recordReactionTime() {
    if (testArea.style.backgroundColor === 'red') {
        statusText.textContent = 'Vent, indtil det bliver grønt.';
        return;
    }
    if (testArea.style.backgroundColor === 'green') {
        endTime = new Date();
        let reactionTime = endTime - startTime;
        reactionTimeDisplay.textContent = reactionTime;
        testArea.style.backgroundColor = 'red';
        statusText.textContent = 'Klik her for at starte testen.';
        return;
    }
    setTimeout(changeToGreen, Math.floor(Math.random() * 2000) + 1000); // vent 1-3 sekunder
}

testArea.addEventListener('click', recordReactionTime);
