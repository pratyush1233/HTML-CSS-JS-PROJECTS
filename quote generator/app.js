var Text = document.getElementById('quote-text');
var Author = document.getElementById('quote-author');
var NewQuote = document.getElementById('new-quote');
var title = document.getElementById('heading-1');
var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
  greeting = 'Let\'s start the night with a quote';
} else if (hourNow > 16) {
  greeting = 'Let\'s start the evening with a quote!';
} else if (hourNow > 12) {
    greeting = 'Let\'s start the afternoon with a quote!';
} else if (hourNow > 0) {
  greeting = 'Let\'s start the morning with a quote!';
} else {
  greeting = 'Let\'s start the day with a quote';
}
title.innerHTML = greeting;
var colors = [
  { bg: 'rgb(135, 206, 250)', text: 'black', contrast: 'rgb(135, 206, 250)' },
  { bg: 'rgb(255, 99, 71)', text: 'white', contrast: 'rgb(255, 99, 71)' },
  { bg: 'rgb(154, 205, 50)', text: 'black', contrast: 'rgb(154, 205, 50)' },
  { bg: 'rgb(255, 215, 0)', text: 'black', contrast: 'rgb(255, 215, 0)' },
  { bg: 'rgb(144, 238, 144)', text: 'black', contrast: 'rgb(144, 238, 144)' },
  { bg: 'rgb(255, 165, 0)', text: 'black', contrast: 'rgb(255, 165, 0)' },
  { bg: 'rgb(220, 20, 60)', text: 'white', contrast: 'rgb(220, 20, 60)' },
  { bg: 'rgb(255, 250, 205)', text: 'black', contrast: 'rgb(255, 250, 205)' },
  { bg: 'rgb(70, 130, 180)', text: 'white', contrast: 'rgb(70, 130, 180)' },
  { bg: 'rgb(255, 20, 147)', text: 'white', contrast: 'rgb(255, 20, 147)' }
  ];
function changeUIColors() {
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor.bg;
    NewQuote.style.backgroundColor = randomColor.bg;
    NewQuote.style.color = randomColor.text;
    Text.style.color = randomColor.bg;
    Author.style.color = randomColor.bg;
    var quoteIcons = document.querySelectorAll('.quote-icons i');
    quoteIcons.forEach(function (quoteIcon) {
      quoteIcon.style.color = randomColor.text;
    });
    var container = document.querySelector('.container');
    container.style.backgroundColor = randomColor.text;
    container.style.opacity = 0.4;
  }
  function fetchRandomQuote() {
    fetch('quotes.txt')
      .then(response => response.text())
      .then(data => {
        var lines = data.split('\n');
        var randomIndex = (Math.random() * lines.length);
        var randomLine = lines[randomIndex];
        var [quote, author] = randomLine.split('-');
        Text.innerHTML = quote;
        Author.innerHTML = `- ${author.trim()} -`;
      })
      .catch(error => console.log(error));
  }
NewQuote.addEventListener('click', function () {
  fetchRandomQuote();
  changeUIColors();
});
fetchRandomQuote();
changeUIColors();