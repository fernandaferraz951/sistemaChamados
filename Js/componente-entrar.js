function logar(){
    var email =document.getElementById("e-mail");
    var senha =document.getElementById("senha");
    if(email.value =="admin@admin.com" && senha.value =="admin"){
        localStorage.setItem("acesso", true);

        window.location.href= "tabela.html";
    }else{
        alert("Usuário ou senha inválidos!")
    }



}

