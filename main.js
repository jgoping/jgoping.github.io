console.log("Welcome to my console!");

$(document).ready(() => {
  // Declaration of constants
  const $titlebar = $(".titlebar");
  const $selfportrait = $("#selfportrait");
  const $section = $(".section");
  const $icons = $(".icons");

  $titlebar.css("visibility", "hidden");
  $section.hide();
  $selfportrait.css("visibility", "hidden");
  $icons.css("visibility", "hidden");

  // Fades in the elements
  $titlebar.css("visibility", "visible").hide().fadeIn(600, function() {
    $selfportrait.css("visibility", "visible").hide().fadeIn(600);
    $icons.css("visibility", "visible").hide().fadeIn(600);
    $section.fadeIn(600);
  });

  // Modal code
  var modal = []
  var button = []
  var modalMap = new Map();

  for (i=1; i<9; ++i) {
    button[i] = document.getElementById('project' + i);
    modal[i] = document.getElementById('modal' + i);
    modalMap.set('project' + i, modal[i]);

    button[i].onclick = function() {
      modalMap.get(event.srcElement.id).style.display = "block";
    }
  }

  window.onclick = function(event) {
    var index = modal.indexOf(event.target)
    if (index > 0) {
      modal[index].style.display = "none";
    }
  }
});
