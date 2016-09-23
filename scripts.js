$('#add-link-button').on('click', function() {
  var urlInput = $('#url-input').val();
  verifyFullInput(urlInput);
  isUrlValid(urlInput);
});

$('#url-input').keypress(function(event) {
  if (event.which == 13) {
    var urlInput = $('#url-input').val();
    verifyFullInput(urlInput);
    isUrlValid(urlInput);
  }
});

function verifyFullInput(urlInput) {
  var titleInput = $('#title-input').val();
  if (urlInput && titleInput === '') {
    alert('You have not entered a URL. Please, specifiy a valid URL.');
  } else if (urlInput === '' && titleInput) {
    alert('You have not entered a site title. Please, specifiy a title for your link.');
  }
  // return;
}

function isUrlValid(urlInput) {
  var urlCheck = urlInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  if (urlCheck === null) {
    invalidUrlErrorMessage();
  } else {
    createSiteLink(urlInput);
  }
}

function invalidUrlErrorMessage() {
  alert("That URL is invalid. Please choose a valid URL.");
}

function createSiteLink(urlInput) {
  var titleInput = $('#title-input').val();
  var siteLink = '<li><a class="new-url-link" href="'+urlInput+'">'+titleInput+'</a><button class="mark-as-read-button">Mark as Read</button><button class="remove-link-button""mark-as-read-button">X</li>'
  addToLinkList(siteLink);
  $('#title-input').focus();
}

function addToLinkList(siteLink) {
  $('.linked-list').append(siteLink);
  clearFields();
  countTotals();
}

$('#title-input').on('keyup', function() {
  addLinkButtonToggle();
});

$('#url-input').on('keyup', function() {
  addLinkButtonToggle();
});

function addLinkButtonToggle() {
  if ($('#url-input').val() && $('#title-input').val()) {
    $('#add-link-button').prop('disabled', false);
  } else {
    $('#add-link-button').prop('disabled', true);
  }
}

function clearFields() {
  $('#url-input').val('');
  $('#title-input').val('');
  $('#add-link-button').prop('disabled', true);
}

$('.linked-list').on('click', '.remove-link-button', function() {
  $(this).parent().remove();
  countTotals();
});

$('.linked-list').on('click', '.mark-as-read-button', function() {
  $(this).parent().toggleClass('read');
  countTotals();
  clearReadButtonToggle();
});

function countTotals() {
  $('.total-links').text($('.new-url-link').length);
  $('.total-read').text($('.read').length);
  $('.total-unread').text($('.new-url-link').length - $('.read').length);
}

$('#clear-read-links-button').on('click', function() {
  $('.read').remove();
  countTotals();
  $('#clear-read-links-button').prop('disabled', true);
});

function clearReadButtonToggle() {
  if ($('.read')) {
    $('#clear-read-links-button').prop('disabled', false);
  } else {
    $('#clear-read-links-button').prop('disabled', true);
  }
}
