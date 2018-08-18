console.log("Welcome to my console!");

$(document).ready(() => {
  // Declaration of constants
  const $titlebar = $(".titlebar");
  const $selfportrait = $("#selfportrait");
  const $sectionbar = $(".sectionbar");
  const $subheader = $(".subheader");
  const $paragraph = $("p");
  const $listitem = $("li");
  const $h2 = $("h2");
  const $resume = $(".resume");
  const $linkedin = $(".linkedin");
  const $devpost = $(".devpost");
  const $github = $(".github");
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

  $titlebar.css("visibility", "hidden");
  $sectionbar.hide();
  $subheader.hide();
  $selfportrait.css("visibility", "hidden");
  $h2.hide();
  $paragraph.css("visibility", "hidden");
  $listitem.hide();

  // Hides the website content
  $projects.hide();
  $experience.hide();
  $technicalskills.hide();
  $awards.hide();
  $education.hide();

  // Fades in the elements
  $titlebar.css("visibility", "visible").hide().slideDown(500, function() {
    $selfportrait.css("visibility", "visible").hide().fadeIn(500, function() {
      $paragraph.css("visibility", "visible").hide().fadeIn(500, function() {
        $sectionbar.fadeIn(500);
        $subheader.fadeIn(500);
        $h2.fadeIn(500);
        $listitem.fadeIn(500);
      });
    });
  });

  // Changes the text if javascript is enabled to account for the clickable tabs
  $h2.text("Click on the tabs below to learn more about me!");

  // Makes icons respond to being hovered over
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


  $github.on('mouseover', () => {
    $github.css("transform", "scale(1.5, 1.5)");
  })
  $github.on('mouseleave', () => {
    $github.css("transform", "scale(1, 1)");
  })

  // Makes the section bars toggle the information
  $projectbar.on('mouseover', () => {
    $projectbar.css("background-color", "#549dff");
  })
  $projectbar.on('mouseleave', () => {
    $projectbar.css("background-color", "#1372ef");
  })
  $projectbar.on('click', () => {
    $projects.slideToggle(500);
    $arrow1.text($arrow1.text() == "▼" ? "▲" : "▼");
  })

  $experiencebar.on('mouseover', () => {
    $experiencebar.css("background-color", "#549dff");
  })
  $experiencebar.on('mouseleave', () => {
    $experiencebar.css("background-color", "#1372ef");
  })
  $experiencebar.on('click', () => {
    $experience.slideToggle(500);
    $arrow2.text($arrow2.text() == "▼" ? "▲" : "▼");
  })

  $skillbar.on('mouseover', () => {
    $skillbar.css("background-color", "#549dff");
  })
  $skillbar.on('mouseleave', () => {
    $skillbar.css("background-color", "#1372ef");
  })
  $skillbar.on('click', () => {
    $technicalskills.slideToggle(500);
    $arrow3.text($arrow3.text() == "▼" ? "▲" : "▼");
  })

  $awardbar.on('mouseover', () => {
    $awardbar.css("background-color", "#549dff");
  })
  $awardbar.on('mouseleave', () => {
    $awardbar.css("background-color", "#1372ef");
  })
  $awardbar.on('click', () => {
    $awards.slideToggle(500);
    $arrow4.text($arrow4.text() == "▼" ? "▲" : "▼");
  })

  $educationbar.on('mouseover', () => {
    $educationbar.css("background-color", "#549dff");
  })
  $educationbar.on('mouseleave', () => {
    $educationbar.css("background-color", "#1372ef");
  })
  $educationbar.on('click', () => {
    $education.slideToggle(500);
    $arrow5.text($arrow5.text() == "▼" ? "▲" : "▼");
  })

});
