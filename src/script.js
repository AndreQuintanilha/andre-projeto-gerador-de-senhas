//PEGAR MEU SLIDER.
 
let sliderElement = document.querySelector("#slider");//através do # pego meu id.
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");//relacão classe hide

//PEGAR QUANTOS CARACTERES ELE QUER GERAR.

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value; //atribui a funcao nos valores do caracteres.

sliderElement.oninput = function() { 
    sizePassword.innerHTML = this.value;//D a função de controlar o numero de cacteres a ser usado no slide.
}

//FUNÇÃO PARA GERAR A SENHA.

function generatePassword() {
    
    let pass = '';
    
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i) {//'n'variavel tanto de caracter na base  '.sliderElement.value'- é o tanto de caracter q o usuario colocou.
        
    pass += charset.charAt(Math.floor(Math.random() * n));

    }   
    
    //gerando numero aleatorio com número de caracter escolhido.  '+=' -  concatenar com alguma coisa a mais sempre somando caracter. 'charAt' - pegando uma posição. 'Math.floor' - gerando numero inteiro. 'Math.random' - gerando numero aleatorio.
     

     //testando 
     //console.log(pass);

    //PEGAR A SENHA GERADA E COLOCAR DENTRO DO HMTL OU SEJA DENTRO PASSWORD.
    
    containerPassword.classList.remove("hide");//removendo a classe hide que tira a visibilidade da senha
    password.innerHTML = pass;
    novaSenha = pass;

    }

    function copyPassword(){
        alert ("Senha copiada com sucesso!");
        navigator.clipboard.writeText(novaSenha);
    
    
    
    
}
