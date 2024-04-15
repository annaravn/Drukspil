
function testSpil() {
    console.log("testSpil");
    const kortHolder = document.getElementById("kortHolder");
    kortHolder.innerHTML = "";
    const tekstHolder = document.createTextNode("Dette er et testspil");
    kortHolder.appendChild(tekstHolder);
}
