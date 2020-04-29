$(function () {
  // CREATE - add new burger
  $(".create-burger").on("submit", function (e) {
    e.preventDefault();
    let newBurger = {
      burger_name: $("#burger-name").val().trim(),
    };
    // Create burger
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("Burger created!");
      location.reload();
    });
  });
  
  // UPDATE - Devour burger button functionality
  $(".devour").on("click", function (e) {
    let id = $(this).data("id");
    // Update burger
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: { devoured: true },
    }).then(function () {
      console.log("Burger DEVOURED!");
      location.reload();
    });
  });
});
