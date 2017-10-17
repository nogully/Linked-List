// TURING PROJECT:: L I N K E D - L I S T :: by Nora and Bruce
// Assignment URL: http://frontend.turing.io/projects/linked-list.html
$('document').ready(function() {

// VARIABLES
var websiteName = $('#website-name');
var websiteUrl = $('#website-url');
var submitButton = $('#submit-button');
var cardList = $('#card-list');
var newCard = $('.card');
var readCards = $('.clicked').length;
var totalCards = $('article').length;
var unreadCards = totalCards - readCards;
var clearReadButton = $('.clear-all-read');

// EVENT LISTENERS
submitButton.on('click', submitEntry);
websiteName.on('keyup', enableOrDisable);
websiteUrl.on('keyup', enableOrDisable);
cardList.on('click', '.delete', deleteEntry);
cardList.on('click', '.read-button', toggleRead);
/*cardList.on('click', '.read', function(event) {
  event.stopPropogation();
  toggleRead();
});*/
clearReadButton.on('click', deleteRead);


// FUNCTIONS
function submitEntry() {
  cardList.append(`<article class='card'>
    <h2> ${ websiteName.val() } </h2>
    <hr>
    <a href='${ websiteUrl.val() }'>${ websiteUrl.val() }</a>
    <hr>
    <button class='read-button'>Read</button>
    <button class="delete">Delete</button>
    </article>`);
    //cardList.find('.card:last').slideDown('fast');
    updateTotal();
    updateReadUnread(); 
}

function deleteEntry() {
    $(this).parent().remove();
    updateTotal();
    updateReadUnread();
} 

function enableOrDisable() {
  websiteName.val().length > 0 && websiteUrl.val().length > 0 ? 
    submitButton.removeAttr('disabled', true) : 
    submitButton.attr('disabled');
}

function toggleRead() {
    $(this).closest('article').toggleClass('read');
    $(this).toggleClass('clicked');
    console.log('current', $(this));
    console.log('closest', $(this).closest('article'));
    updateReadUnread();
  }

function deleteRead() {
  $('*').find('clicked').parent().remove();
  console.log($('*').find('clicked'));
}

function updateTotal() {
  totalCards = $('article').length;
  $('#total-number').text(totalCards);
}

function updateReadUnread() {
    readCards = $('.clicked').length;
    unreadCards = totalCards - readCards;
    $('#read-number').text(readCards)
    $('#unread-number').text(unreadCards);
}

//jquery.slideDown()
//error message on submit button
//regex expression to match valid url
 
websiteName.focus();

// END JQUERY
});

