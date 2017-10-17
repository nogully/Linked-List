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
submitButton.on('click', validateUrl);
websiteName.on('keyup', enableOrDisable);
websiteUrl.on('keyup', enableOrDisable);
cardList.on('click', '.delete', deleteEntry);
cardList.on('click', '.read-button', toggleRead);
clearReadButton.on('click', deleteRead);


// FUNCTIONS
function submitEntry() {
  cardList.append(`<article class='card'>
    <h2> ${ websiteName.val() } </h2>
    <hr>
    <a href='${ websiteUrl.val() }' target='_blank'>${ websiteUrl.val() }</a>
    <hr>
    <button class='read-button'>Read</button>
    <button class="delete">Delete</button>
    </article>`);
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
    updateReadUnread();
  }

function deleteRead() {
  cardList.removeClass('read');
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

function validateUrl() {
  if (websiteUrl.val().match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/)) {
    submitButton.text('Enter');
    submitEntry();
  }
  else {
    submitButton.text('Enter valid URL'); 
  }
}

//jquery.slideDown()
 
websiteName.focus();
// END JQUERY
});

