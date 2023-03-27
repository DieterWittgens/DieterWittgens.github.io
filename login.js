
const urlParams = new URLSearchParams(window.location.search);
const pass = urlParams.get('password');
const alreadyLoggedIn = localStorage['access'] && !pass;
if(alreadyLoggedIn) {
    localStorage['access'] = 'N';
} else {
    const isLoggedIn = (pass == '1234');
    localStorage['access'] = isLoggedIn ? 'Y' : 'N';
    if(isLoggedIn) {    
        window.location = '/index.html';
    }
}