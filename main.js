console.log("Welcome to my console!");

function getModalIndex(event) {
  return parseInt(event.srcElement.id.substr(-1));
}

$(document).ready(() => {
  // Declaration of constants
  const $titlebar = $(".titlebar");
  const $selfportrait = $("#selfportrait");
  const $section = $(".section");
  const $icons = $(".icons");

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
      console.log(event.srcElement);
      console.log(button);
      modal[getModalIndex(event)].style.display = "block";
    }

    close[i].onclick = function() {
      modal[getModalIndex(event)].style.display = "none";
    }
  }

  window.onclick = function(event) {
    var index = modal.indexOf(event.target)
    if (index > 0) {
      modal[index].style.display = "none";
    }
  }
});
