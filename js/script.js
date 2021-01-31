window.addEventListener("load", function(){
    const button = document.getElementById("submit");
    const form = document.getElementById('form');
    const message = document.getElementById("error");
    console.log(button);

    button.addEventListener('click', function(e) {
        const email = form['email'].value;
        const password = form['password'].value;
        e.preventDefault();
        console.log("cheguei");
        console.log(email);
        console.log(password)
        email === '' ? addMessage(email,"Por favor, insira um e-mail váido") : removeMessage(email);
        password === '' ? addMessage(password,"Por favor, insira uma senha váida") : removeMessage(password);
    })
});

function addMessage(field,message){
    const span = document.getElementById("error");
    span.innerHTML = message;
};

function removeMessage(field,message){
    const span = document.getElementById("error");
    span.innerHTML = '';
};