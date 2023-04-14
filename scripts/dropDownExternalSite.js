

// This script selects all elements with the class '.dropdown-item'
const dropdownItems = document.querySelectorAll('.dropdown-item');

// This loop adds an event listener to each selected element, that triggers on click
dropdownItems.forEach(item => {
  item.addEventListener('click', function(event) {
    // The click event listener function prevents the default link behavior
    event.preventDefault();
    // The function opens the href of the clicked element in a new tab or window
    window.open(event.target.href, '_blank');
  });
});
