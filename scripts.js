$('#add-link-button').on('click', function() {
  var urlInput = $('#url-input').val();
  isUrlValid(urlInput);
});

// $('#add-link-form').keypress(function(event) {
//   if (event.which == 13) {
//     var urlInput = $('#url-input').val();
//     isUrlValid(urlInput);
//   }
// });

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

function createSiteLink(url) {
  var titleInput = $('#title-input').val();
  var siteLink = '<li><a href="'+url+'">'+titleInput+'</a><button class="remove-link">x</button><button class="mark-as-read">Mark as Read</li>'
  addToLinkList(siteLink);
  totalLinks();
}

function addToLinkList(siteLink) {
  $('.linked-list').append(siteLink);
  clearFields();
}

function totalLinks() {
  var total = 0;
  total++;
}

$('#title-input').on('keyup', function() {
  buttonToggle();
});

$('#url-input').on('keyup', function() {
  buttonToggle();
});

function buttonToggle () {
  if ($('#url-input').val() && $('#title-input').val()){
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

$('.linked-list').on('click', '.remove-link', function() {
  $('.remove-link').parent().remove();
});

$('.linked-list').on('click', '.mark-as-read', function() {
  $(this).toggleClass('read');

  // $(this.sibling('a')).toggleClass('read');

  // if ($('.linked-list li a').hasClass('read')) {
  //   $('.linked-list li a').removeClass('read');
  // } else {
  //   $('.linked-list li a').addClass('read');
  // }
});
