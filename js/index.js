$(document).ready(() => {
    var htmlDict = {
        "/": "home.html",
        "/index.html": "home.html",
        "/index": "home.html"
    };
    var mainComponentLocation = '/components/'+htmlDict[window.location.pathname];
    console.log(mainComponentLocation)
    $('#navbar_wrapper').load('/components/navbar.html');    
    $('#footer_wrapper').load('/components/footer.html');
});

particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });