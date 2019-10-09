function show(event, tab) {
  // Get All the tabs
  // Find out which tab was clicked
  // Add active class to tab that was clicked
  // Add hide class to tab that was not clicked

  // Hide all tab-contents on click
  let tabContent = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Remove active class from tabLinks buttons
  let tabLinks = document.getElementsByClassName("tab-links");
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className = "tab-links";
  }

  // Show current tab that is clicked, and and active class to button that was clicked
  document.getElementById(tab).style.display = "flex";
  event.currentTarget.className = "tab-links active";
}


