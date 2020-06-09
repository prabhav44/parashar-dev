function sendQuoteRequest(emailAddress, fullname, phoneNumber, companyName, commentSection, buttonID) {
    let url = "https://atinvzrwth.execute-api.us-east-1.amazonaws.com/v1/request-quote"
    let button = document.getElementById(buttonID)

    var request_body = {
        'emailAddress': '',
        'fullname': '',
        'phoneNumber': '',
        'companyName': '',
        'commentSection': ''
    }

    button.innerHTML = "Submitting..."
    button.disabled = true

    request_body.emailAddress = document.getElementById(emailAddress).value
    request_body.fullname = document.getElementById(fullname).value
    request_body.phoneNumber = document.getElementById(phoneNumber).value
    request_body.companyName = document.getElementById(companyName).value
    request_body.commentSection = document.getElementById(commentSection).value

    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request_body)
    })
    .then((response) => {return response.json()})
    .then((data) => {
        console.log(data)
        button.innerHTML = "Submitted!"
    })
}

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
