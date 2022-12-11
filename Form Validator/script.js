const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input,massage){
    input.className='form-control is-invalid'
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}
function validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    return re.test(String(email).toLowerCase());
}
function succsess(input){
    input.className='form-control is-valid'
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(username.value ===''){
        error(username, 'username gerekli');
    }else{
        succsess(username);
    }
    if(email.value ===''){
        error(email,'email gerekli');
    } else if (!validateEmail(email.value)){
         error(email,'düngün bi mail adresi giriniz.');
    }
    
    else{
        succsess(email);
    }
    if(password.value ===''){
        error(password,'password gerekli') ;
    }else{
        succsess(password);
    }
    if(repassword.value ===''){
        error(repassword,'repassword gerekli');
    }else{
        succsess(repassword);
    }
});





