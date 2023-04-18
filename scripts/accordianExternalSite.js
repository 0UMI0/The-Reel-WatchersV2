
const accordianLinks = document.querySelectorAll('.link-success');


accordianLinks.forEach(link => {
    link.addEventListener('click', function (event) { 

        event.preventDefault(); // prevent the default link behavior

        window.open(event.target.href, '_blank');// open link in a new tab
    });
});

