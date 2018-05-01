$(document).ready(function() {
  // $('select').formSelect();

  //Get references to the task creation form fields

  var orgSelect = $("#orgName");
  var taskTitleInput = $("#taskTitle");
  var taskDescInput = $("#taskDesc");
  var taskDateInput = $("#taskDate");
  var taskTimeInput = $("#taskTime");
  var taskAddrInput = $("#taskAddr");
  var taskCityInput = $("#taskCity");
  var taskStateInput = $("#taskState");
  var taskZipInput = $("#taskZip");
  var taskSlotsInput = $("#taskSlots");
  var taskDurationInput = $("#taskDuration");
  var taskCatInput = $("#taskCat");
  var taskForm = $("#taskForm");

  // Getting the orgs, and their tasks

  $(taskForm).on("submit", function(e) {
    e.preventDefault();
    console.log("click");
    handleFormSubmit();
  });  

  // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  var url = window.location.search;
  var taskId;
  var newTask;
  // var orgId;
  //   // Sets a flag for whether or not we're updating an task to be false initially
  var updating = false;
  console.log("updating: " + updating);
  //      // If we have this section in our url, we pull out the task id from the url
  //   // In '?post_id=1', postId is 1
  // if (url.indexOf("?task_id=") !== -1) {
  //   orgId = url.split("=")[1];
  //   getTaskData(taskId, "task");
  // }
  //    // Otherwise if we have an org_id in our url, preset the org select box to be our Org
  //  else if (url.indexOf("?org_id=") !== -1) {
  //   orgId = url.split("=")[1];
  // }

  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the task if we are missing any data
    if (
      !orgSelect.val() ||
      !taskTitleInput.val().trim() ||
      !taskDescInput.val().trim() ||
      !taskDateInput.val().trim() ||
      !taskTimeInput.val().trim() ||
      !taskAddrInput.val().trim() ||
      !taskCityInput.val().trim() ||
      !taskStateInput.val().trim() ||
      !taskZipInput.val().trim() ||
      !taskSlotsInput.val().trim() ||
      !taskDurationInput.val().trim() ||
      !taskCatSelect.val()
    ) {
      return;
    }

    // Creating a new task object to send to the database
    var newTask = {
      OrgId: orgSelect.val(),
      taskTitle: taskTitleInput.val().trim(),
      taskDesc: taskDescInput.val().trim(),
      taskAddr: taskAddrInput.val().trim(),
      taskDate: taskDateInput.val().trim(),
      taskTime: taskTimeInput.val().trim(),
      taskCity: taskCityInput.val().trim(),
      taskState: taskStateInput.val().trim(),
      taskZip: taskZipInput.val().trim(),
      taskSlots: taskSlotsInput.val().trim(),
      taskDuration: taskDurationInput.val(),
      taskCat: taskCatInput.val()
    };
    console.log(newTask);
  }
  // If we're updating an task run updateEvent to update an task
  // Otherwise run submitTask to create a whole new post
  // if (updating) {
  //     newTask.id = taskId;
  //     updateTask(newTask);
  //   }
  //   else {
  //     submitTask(newTask);
  //   }
  // Submits a new task and brings user to tasks page upon completion
  submitTask(newTask);

  function submitTask(task) {
    $.post("/api/tasks", task, function() {
      window.location.href = "/tasks";
      console.log(newTask);
    });
  }

  //    Function for retrieving orgs and getting them ready to be rendered to the page
  function getOrgs() {
    $.get("/api/orgs", renderOrgList);
  }

  // Function for handling what to render when there are no authors
  //  function renderEmpty() {
  //     var alertDiv = $("<div>");
  //     alertDiv.addClass("alert alert-danger");
  //     alertDiv.text("You must create an organization before you can create an task.");
  //     orgContainer.append(alertDiv);
  //   }

  // Adding an event listener for when the form is submtted
});
