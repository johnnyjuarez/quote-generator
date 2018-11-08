document.addEventListener("DOMContentLoaded", function () {
    function getQuote() {
    let request = new XMLHttpRequest();
    let colorArray = ["#001011", "#093A3E", "#3AAFB9", "#64E9EE", "#97C8EB", "#BA2D0B", "#D5F2E3", "#73BA9B", "#003E1F", "#01110A", "#75DBCD", "#C9DBBA", "#DCDBA8", "#F5CDA7", "#FAA381", "#003049", "#D62828", "F77F00", "#FCBF49", "#EAE2B7"]
    let ranColor = Math.floor(Math.random() * colorArray.length);
    request.open("GET", "https://talaikis.com/api/quotes/random/", true);
    function colorChange() {
        document.body.style.backgroundColor = colorArray[ranColor];
        document.body.style.transition = "all 1.2s";
    }
    request.onload = function() {
        let data = JSON.parse(this.response);
        console.log(data.author);
        console.log(data);
        const quote = document.getElementById("quote");
        quote.textContent = '"' +  data.quote + '"';
        const author = document.getElementById("author");
        author.textContent = " - " + data.author;
    }
    colorChange();
    request.send(null);
    }
    getQuote();
    document.getElementById("newQuote").addEventListener("click", newQuote);
    function newQuote() {
        getQuote();
    }

    
})
