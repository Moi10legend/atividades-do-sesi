let loginButton = document.getElementById("enterButton")
let inputUser = document.getElementById("inputEmailCpf")
let inputSenha = document.getElementById("inputSenha")

loginButton.addEventListener("click", doLogin)

function doLogin(){
     if(((inputUser.value === "moisesflopesf@gmail.com") || (inputUser.value === "07136573200"))
     && (inputSenha.value === "senha098")){
        window.location.href = "./paginaDeUsuário.html"
     }
}