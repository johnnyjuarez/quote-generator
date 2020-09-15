'use strict';
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