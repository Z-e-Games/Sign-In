const usernameInput = document.getElementById('user-input')
const passwordInput = document.getElementById('password-input')
const verifyButton = document.getElementById('submit-button')
let isSignedIn = 'no'
let accountIsMade = 'no'
if(localStorage.getItem('is signed in') === 'yes'){
    verifyButton.innerHTML = 'You are signed in'
}
if(localStorage.getItem('account is created') === 'no'){
    verifyButton.innerHTML = 'Create Account'
}

function verifyUser(){
    if(localStorage.getItem('account is created') === 'yes'){
        if(localStorage.getItem('is signed in') === 'no' && localStorage.getItem('username') === usernameInput.value && localStorage.getItem('**') === passwordInput.value){
            isSignedIn = 'yes'
            localStorage.setItem('is signed in','yes')
            alert('Congratulations, sign in complete!')
            window.location.replace("C:/Coding/KingGames/homepage.html");
        }
    }else{
        console.log('inside else')
        isSignedIn = 'yes'
        accountIsMade = 'yes'
        localStorage.setItem('is signed in','yes')
        localStorage.setItem('username',usernameInput.value)
        localStorage.setItem('**',passwordInput.value)
        localStorage.setItem('account is created','yes')
        alert('Your account has been created!')
        alert('Sign in complete!')
        window.location.replace("C:/Coding/KingGames/homepage.html");
    }
}

verifyButton.addEventListener('click', verifyUser)