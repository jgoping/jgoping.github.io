console.log("Welcome to my console!");

$(document).ready(() => {
  function getModalIndex(event) {
    return parseInt(event.srcElement.id.substr(-1));
  }

  function setNavbarColour(backgroundColour, borderColour, itemColour) {
    $navList.style.backgroundColor = backgroundColour;
    $navList.style.borderColor = borderColour;
    $navListItems.each(function(index, value) {
      value.style.color = itemColour;
    });
  }

  // Declaration of constants
  const duration = 100;
  const $icons = $(".icons");
  const $introduction = $('#introduction');
  const $navList = $('#nav-list')[0];
  const $navListItems = $('.nav-list-item a');
  const offset = 41.5;
  const $section = $(".section");
  const $selfportrait = $("#selfportrait");
  const $titlebar = $(".titlebar");

  // Hide elements
  $titlebar.css("visibility", "hidden");
  $selfportrait.css("visibility", "hidden");
  $icons.css("visibility", "hidden");
  $section.hide();

  // Fades in the elements
  $titlebar.css("visibility", "visible").hide().fadeIn(600, function() {
    $selfportrait.css("visibility", "visible").hide().fadeIn(600);
    $icons.css("visibility", "visible").hide().fadeIn(600);
    $section.fadeIn(600);
  });

  // Modal code
  var modal = [];
  var button = [];
  var close = [];

  for (i=1; i<9; ++i) {
    button[i] = document.getElementById('project' + i);
    modal[i] = document.getElementById('modal' + i);
    close[i] = document.getElementById('close' + i);

    button[i].onclick = function(event) {
      modal[getModalIndex(event)].style.display = "block";
    }

    close[i].onclick = function(event) {
      modal[getModalIndex(event)].style.display = "none";
    }
  }

  window.onclick = function(event) {
    var index = modal.indexOf(event.target)
    if (index > 0) {
      modal[index].style.display = "none";
    }
  }


  // Navigation bar code
  $navListItems.on('click',function(event){
    event.preventDefault();

    var target = $($(this).attr('href'));
    var targetPosition = $(target).offset().top - offset;

    $('body, html').animate({ 'scrollTop': targetPosition }, duration);
  });


  // Navigation bar colour code
  var onLandingPage = false;

  $(window).scroll(function() {
    if ($introduction.position().top <= $(window).scrollTop() + offset) {
      if (onLandingPage) {
        setNavbarColour("white", "lightgrey", "black");
        onLandingPage = false;
      }
    } else if (!onLandingPage) {
      setNavbarColour("", "", "");
      onLandingPage = true;
    }

  }).scroll();
});
