console.log("Welcome to my console!");
$(document).ready(() => {
  /* Declaration of constants */
  const $titlebar = $(".titlebar");
  const $photo = $(".photo");
  const $sectionbar = $(".sectionbar");
  const $subheader = $(".subheader");
  const $paragraph = $("p");
  const $listitem = $("li");
  const $h2 = $("h2");
  const $resume = $(".resume");
  const $linkedin = $(".linkedin");
  const $devpost = $(".devpost");
  //const $github = $(".github");
  const $projectbar = $(".projectbar");
  const $projects = $("#projects");
  const $experiencebar = $(".experiencebar");
  const $experience = $("#workexperience");
  const $skillbar = $(".skillbar");
  const $technicalskills = $("#technicalskills");
  const $awardbar = $(".awardbar");
  const $awards = $("#awards");
  const $educationbar = $(".educationbar");
  const $education = $("#education");
  const $arrow1 = $("#arrow1");
  const $arrow2 = $("#arrow2");
  const $arrow3 = $("#arrow3");
  const $arrow4 = $("#arrow4");
  const $arrow5 = $("#arrow5");

  /* Hides the entire webpage */
  $titlebar.css("visibility", "hidden");
  $photo.css("visibility", "hidden");
  $sectionbar.hide();
  $subheader.hide();
  $h2.hide();
  $paragraph.css("visibility", "hidden");
  $listitem.hide();

  /* Hides the website content */
  $projects.hide();
  $experience.hide();
  $technicalskills.hide();
  $awards.hide();
  $education.hide();

  $h2.text("Click on the tabs below to learn more about me!");

  /* Fades in the elements */
  $titlebar.css("visibility", "visible").hide().slideDown(500, function() {
    $photo.css("visibility", "visible").hide().fadeIn(500, function() {
      $sectionbar.fadeIn(500);
      $subheader.fadeIn(500);
      $h2.fadeIn(500);
      $paragraph.css("visibility", "visible").hide().fadeIn(500);
      $listitem.fadeIn(500);
    });
  });

  /* Makes icons respond to being hovered over */
  $resume.on('mouseover', () => {
    $resume.css("transform", "scale(1.5, 1.5)");
  })
  $resume.on('mouseleave', () => {
    $resume.css("transform", "scale(1, 1)");
  })

  $linkedin.on('mouseover', () => {
    $linkedin.css("transform", "scale(1.5, 1.5)");
  })
  $linkedin.on('mouseleave', () => {
    $linkedin.css("transform", "scale(1, 1)");
  })

  $devpost.on('mouseover', () => {
    $devpost.css("transform", "scale(1.5, 1.5)");
  })
  $devpost.on('mouseleave', () => {
    $devpost.css("transform", "scale(1, 1)");
  })

/*
  $github.on('mouseover', () => {
    $github.css("transform", "scale(1.5, 1.5)");
  })
  $github.on('mouseleave', () => {
    $github.css("transform", "scale(1, 1)");
  })*/

  /* Makes the section bars toggle the information */
  $projectbar.on('mouseover', () => {
    $projectbar.css("background-color", "#ffad99");
  })
  $projectbar.on('mouseleave', () => {
    $projectbar.css("background-color", "#ff4d4d");
  })
  $projectbar.on('click', () => {
    $projects.slideToggle(500);
    $arrow1.text($arrow1.text() == "▼" ? "▲" : "▼");
  })

  $experiencebar.on('mouseover', () => {
    $experiencebar.css("background-color", "#ffad99");
  })
  $experiencebar.on('mouseleave', () => {
    $experiencebar.css("background-color", "#ff4d4d");
  })
  $experiencebar.on('click', () => {
    $experience.slideToggle(500);
      $arrow2.text($arrow2.text() == "▼" ? "▲" : "▼");
  })

  $skillbar.on('mouseover', () => {
    $skillbar.css("background-color", "#ffad99");
  })
  $skillbar.on('mouseleave', () => {
    $skillbar.css("background-color", "#ff4d4d");
  })
  $skillbar.on('click', () => {
    $technicalskills.slideToggle(500);
      $arrow3.text($arrow3.text() == "▼" ? "▲" : "▼");
  })

  $awardbar.on('mouseover', () => {
    $awardbar.css("background-color", "#ffad99");
  })
  $awardbar.on('mouseleave', () => {
    $awardbar.css("background-color", "#ff4d4d");
  })
  $awardbar.on('click', () => {
    $awards.slideToggle(500);
      $arrow4.text($arrow4.text() == "▼" ? "▲" : "▼");
  })

  $educationbar.on('mouseover', () => {
    $educationbar.css("background-color", "#ffad99");
  })
  $educationbar.on('mouseleave', () => {
    $educationbar.css("background-color", "#ff4d4d");
  })
  $educationbar.on('click', () => {
    $education.slideToggle(500);
      $arrow5.text($arrow5.text() == "▼" ? "▲" : "▼");
  })
});
