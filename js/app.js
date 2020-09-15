// // Run function on DOM load.
'use strict';
// document.addEventListener('DOMContentLoaded', function () {
//   // function for to run containing most of the methods needed
//   function getQuote() {
//     // section containing most of the variables used
//     let random = Math.floor(Math.random() * 107);
//     let request = new XMLHttpRequest();
//     let colorArray = ['#001011', '#093A3E', '#3AAFB9', '#64E9EE', '#97C8EB', '#BA2D0B', '#D5F2E3', '#73BA9B', '#003E1F', '#01110A', '#75DBCD', '#C9DBBA', '#DCDBA8', '#F5CDA7', '#FAA381', '#003049', '#D62828', 'F77F00', '#FCBF49', '#EAE2B7'];
//     let ranColor = Math.floor(Math.random() * colorArray.length);
//     // accessing/pulling the information from the quote api
//     request.open('GET', 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json', true);
//     // function to change the background color as well as add a transition affect
//     function colorChange() {
//       document.body.style.backgroundColor = colorArray[ranColor];
//       document.body.style.transition = 'all 1.2s';
//     }
//     // run the XMLHttp request onload and run the function below
//     // the function parses the api into useable data
//     // after parsing the data it adds the selected data to the selected elementid
//     request.onload = function () {
//       let data = JSON.parse(this.response);
//       const quote = document.getElementById('quote');
//       quote.textContent = '"' + data.quotes[random].quote + '"';
//       const author = document.getElementById('author');
//       author.textContent = ' - ' + data.quotes[random].author;
//     };
//     // call the colorChange function
//     colorChange();
//     // after requesting data from the api we make sure to send nothing back
//     request.send(null);
//   }
//   // call the getQuote function to run all of our methods
//   getQuote();
//   // added an onlclick run function to the button at the bottom
//   document.getElementById('newQuote').addEventListener('click', newQuote);
//   // newQuote function calls the getQuote function so that everytime the button
//   // is click a new quote and background color is selected.
//   function newQuote() {
//     getQuote();
//   }


// });

$(document).ready(() => {
  const colorChange = () => {
    let colorArray = ['#001011', '#093A3E', '#3AAFB9', '#64E9EE', '#97C8EB', '#BA2D0B', '#D5F2E3', '#73BA9B', '#003E1F', '#01110A', '#75DBCD', '#C9DBBA', '#DCDBA8', '#F5CDA7', '#FAA381', '#003049', '#D62828', 'F77F00', '#FCBF49', '#EAE2B7'];
    let ranColor = Math.floor(Math.random() * colorArray.length);
    $(document.body).css('background-color', `${colorArray[ranColor]}`);
    $(document.body).css('transition', 'all 1.2s');
  };
  const getQuote = () => {
    let random = Math.floor(Math.random() * 107);

    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    $.get(url, (strData) => {
      let data = JSON.parse(strData);
      $('#quote').text(`" ${data.quotes[random].quote} "`);
      $('#author').text(` - ${data.quotes[random].author}`);
    });
    colorChange();
  };

  $('#newQuote').click(() => {
    getQuote();
  });

  getQuote();
});