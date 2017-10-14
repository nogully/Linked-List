// TURING PROJECT:: L I N K E D - L I S T :: by Nora and Bruce
// Assignment URL: http://frontend.turing.io/projects/linked-list.html
$('document').ready(function() {

// VARIABLES
var websiteName = $('#website-name');
var websiteUrl = $('#website-url');
var submitButton = $('#submit-button');
var cardList = $('#card-list');
var newCard = $('.card');


// EVENT LISTENERS
submitButton.on('click', submitEntry);


// FUNCTIONS
function submitEntry() {
  cardList.append('<article class="card">');
  addH2();
  cardList.append('</article>');
}

function addH2() {
  var title = '<h2>' + websiteName.val() + '</h2>';
  cardList.append(title);
}








});

