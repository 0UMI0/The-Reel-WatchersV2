


const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach(item => {
  item.addEventListener('click', function (event) { 

    event.preventDefault();// prevent the default link behavior
    window.open(event.target.href, '_blank'); // open link in a new tab
  });
});
