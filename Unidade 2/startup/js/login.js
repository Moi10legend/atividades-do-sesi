let loginButton = document.getElementById("enterButton")
let inputUser = document.getElementById("inputEmailCpf")
let inputSenha = document.getElementById("inputSenha")
let userErrorSpace = document.querySelector(".userErrorSpace")

loginButton.addEventListener("click", doLogin)

function doLogin(){
     if(((inputUser.value === "moisesflopesf@gmail.com") || (inputUser.value === "07136573200"))
     && (inputSenha.value === "senha098")){
        window.location.href = "./paginasDeUsuariosCadastrados/paginaDeUsuario.html"
     }else if((inputUser != "moisesflopesf@gmail.com") || (inputUser != "07136573200")){
      userErrorSpace.innerHTML = `<span class="userError">Usuário ou senha inválido</span>`
   }
}