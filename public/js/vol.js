$(document).ready(function() {
  $.get("/api/vols/1", function(data) {
    console.log(data);
    // Render volunteer data to the html for a specific volunteer using a specific id in the get method
    //Ideally, this would be based on a login that would use the volunteers id in the table to access their data

    $("#volImage").attr("src", data.volImage);
    $("#volName").text(data.volName);
    $("#aboutMe").text(data.aboutMe);
    $("#volZip").text(data.volZip);
    $("#volEmail").text(data.volEmail);
    $("#volSkills").text(data.volskills);
  });
});

//function trigger after submit button pressed then data get loaded into the database
$("#eventForm").on("submit", function() {
  event.preventDefault();

  var newVol = {
    volName: $("#firstName")
      .val()
      .trim(),
    volZip: $("#zipCode")
      .val()
      .trim(),
    volEmail: $("#email")
      .val()
      .trim(),
    aboutMe: $("#aboutme")
      .val()
      .trim(),
    volImage: $("#photoPath")
      .val()
      .trim(),
    volSkills: $("input[name=skills]:checked").val()
  };

  submitVol(newVol);
});

// Submits a new post and brings user to blog page upon completion
function submitVol(post) {
  $.post("/api/vols", post, function() {
    window.location.href = "/volunteer.html";
  });
}
