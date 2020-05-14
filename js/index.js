$(document).ready(() => {
    var htmlDict = {
        "/": "home.html",
        "/index.html": "home.html",
        "/index": "home.html"
    };
    var mainComponentLocation = '/components/'+htmlDict[window.location.pathname];
    console.log(mainComponentLocation)
    $('#navbar_wrapper').load('/components/navbar.html', () => {
        $('#logoLink').on('mouseover', function() {
            $(this).find('img').attr('src', '/img/logo_transparent_background.png');
        });
        $('#logoLink').on('mouseout', function() {
            $(this).find('img').attr('src', '/img/white_logo_transparent_background.png');
        });
    });    
    $('#footer_wrapper').load('/components/footer.html');
});

particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js-2', 'assets/particles2.json', function() {
    console.log('callback - particles.js-2 config loaded');
});

particlesJS.load('particles-js-3', 'assets/particles3.json', function() {
    console.log('callback - particles.js-3 config loaded');
});
