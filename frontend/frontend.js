


fetch('/kortTekst')
.then(response => response.json())
.then(data => {
    const kortHolder = document.getElementById("kortHolder");
    const tekstHolder = document.createTextNode(data.tekst);
    kortHolder.appendChild(tekstHolder);
})
.catch(error => console.error('Error:', error));