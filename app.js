<script>
  window.addEventListener("DOMContentLoaded", function() {
    // Get the button and heading elements
    var button = document.getElementById("my-button");
    var heading = document.getElementById("my-heading");

    // Add a click event listener to the button
    button.addEventListener("click", function() {
      // Change the text of the heading
      heading.innerHTML = "You clicked the button!";
    });

    // Get the contact-section element
    var contactSection = document.getElementById("contact-section");
    // check if the element exists
    if (contactSection) {
      // Remove the element
      contactSection.remove();
    }
  });
</script>



