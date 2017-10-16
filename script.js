// TURING PROJECT:: L I N K E D - L I S T :: by Nora and Bruce
// Assignment URL: http://frontend.turing.io/projects/linked-list.html
$('document').ready(function() {

// VARIABLES
var websiteName = $('#website-name');
var websiteUrl = $('#website-url');
var submitButton = $('#submit-button');
var cardList = $('#card-list');
var newCard = $('.card');
var readButton = $('.read');


// EVENT LISTENERS
submitButton.on('click', submitEntry);
cardList.on('click', '.delete', deleteEntry);

cardList.on('click', readButton, readCard);

cardList.on('click', deleteButton, deleteEntry);


// FUNCTIONS
function submitEntry() {
  cardList.append(`<article class='card'>
    <h2> ${ websiteName.val() } </h2>
    <hr>
    <a href='${ websiteUrl.val() }'>${ websiteUrl.val() }</a>
    <hr>
    <button class='read'>Read</button>
    <button class="delete">Delete</button>
    </article>`);
}

function deleteEntry() {
  $(this).parent().remove();
} 





// END JQUERY
});

