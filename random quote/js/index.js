$(document).ready(function(){
  getQuote();
  var randomNum;
  var randomQuote;
  var randomAuthor;
  function getQuote(){
    
    var quotes =["sistem informasi ", "bahasa inggris", "biologi"];
    var author= ["teknik informasi", "-matematika", "-perawat"];
    
    randomNum = Math.floor(Math.random()*quotes.length);
    randomQuote = quotes[randomNum];
    randomAuthor = author[randomNum];
    
    $("#quotes").text(randomQuote);
    $("#author").text(randomAuthor);
   }
  
  $("#newQuote").on('click', function(){
      getQuote();
    });
  });