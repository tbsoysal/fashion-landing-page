let menuItems = document.querySelectorAll('.navbar__links li')

menuItems.forEach(li => {
    li.classList.remove('active');
});

switch(window.location.pathname) {
    case '/index.html':
        menuItems[0].classList.add('active');
    break;
    case '/pages/collection.html':
        menuItems[1].classList.add('active');
    break;
    case '/pages/parfume.html':
        menuItems[2].classList.add('active');
    break;
    case '/pages/jewellery.html':
        menuItems[3].classList.add('active');
    break;
    case '/pages/watchmaking.html':
        menuItems[4].classList.add('active');
    break;
    case '/pages/about.html':
        menuItems[5].classList.add('active');
    break;
}

// Global Functions
function redirectToCollection(){
    window.location.href = 'pages/collection.html';
}