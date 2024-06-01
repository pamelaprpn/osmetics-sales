const modalForgetPassword = document.getElementById('forgotPasswordModal');
const btnOpenModalForgetPassword = document.getElementById('openModal');
const closeModalForgetPassword = document.querySelector('.close');

btnOpenModalForgetPassword.onclick = function() {
    modalForgetPassword.style.display = 'block';
}

closeModalForgetPassword.onclick = function(){
    modalForgetPassword.style.display = 'none';
}

window.onclick = function(event){
    if(event.target == modalForgetPassword) {
        modalForgetPassword.style.display = 'none'
    }
}

document.getElementById('formForgetPassword').addEventListener('submit', function(event){
    event.preventDefault();
})

document.getElementsByClassName('.btn_login').addEventListener('submit', function(event){
    event.preventDefault();
})


//Validação do input e-mail
document.getElementById('email').addEventListener('blur', function () {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const email = document.getElementById("email").value;

        if (!emailPattern.test(email)) {
            document.getElementById('emailError').style.display = 'block';
            this.style.border = '1px solid red';
            document.getElementById('emailError').textContent = "Por favor, digite um e-mail válido.";
        } else {
            this.style.border = 'none';
            document.getElementById('emailError').style.display = 'none';
        }
});

//Validação do input password
document.getElementById('password').addEventListener('blur', function () {

    const password = document.getElementById("password").value;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').style.display = 'block';
        this.style.border = '1px solid red'
        document.getElementById('passwordError').textContent = 'Campo deve conter no minimo 8 caracteres, entre letras maiúsculas, minúsculas, numeros e caracteres especiais.'
    } else {

    }
});







// function validarForm (){
//     validadeEmail();
//     validadeSenha();

//     document.querySelector('.btn_login').addEventListener('click', function(event){
//         if(email.trim() === "" && password.trim() === ""){
//             event.preventDefault();
//             email.style.border = '1px solid red';
//             password.style.border = '1px solid red';

//             alert('teste')
//         }
//     })
// }

// validarForm();

// document.getElementsByClassName('.btn_login').addEventListener("click", function(event){

//     if(email.trim() === "" && password.trim() === ""){
//         email.style.border = '1px solid red';
//         document.getElementById('emailError').textContent = "Por favor, digite um e-mail válido."; 
//         password.style.border = '1px solid red';
//         document.getElementById('passwordError').textContent = 'Campo deve conter no minimo 8 caracteres, entre letras maiúsculas, minúsculas, numeros e caracteres especiais.'
//         event.preventDefault();
//     }
    

// });





