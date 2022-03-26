console.log("vinculado");

const Formulario = document.getElementById("Formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const alert = document.getElementById("alert");
const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");

const pintarMensajeExito = () => {
    //! classList remueve una class o ingresa
    alert.classList.remove("d-none")
}

const pintarMensajeError = (errores) => {

    errores.forEach(item => {
        item.tipo.classList.remove("d-none")
        item.tipo.textContent = item.msg;
    })
}

Formulario.addEventListener("submit", (e) =>{
    e.preventDefault();

    const errores = [];

//! .trim() remueve los espacio vacios del inicio o dei final
    console.log(userName.value.trim())

    alert.classList.add("d-none")
    
    if(!regUserName.test(userName.value) || !userName.value.trim()){
        userName.classList.add("is-invalid")
        errores.push({
            tipo: alertName,
            msg: "Formato no valido en el campo nombre, solo letres"
        })
    }else {
        userName.classList.remove("is-invalid")
        userName.classList.add("is-valid")
        alertName.classList.add("d-none")
    }
    if(!regUserEmail.test(userEmail.value) || !userEmail.value.trim()){
        userEmail.classList.add("is-invalid")
        errores.push({
            tipo: alertEmail,
            msg: "Escriba un correo valido"
        })
    }else{
        userEmail.classList.remove("is-invalid")
        userEmail.classList.add("is-valid")
        alertEmail.classList.add("d-none")
    }
    if(errores.length !==0){
        pintarMensajeError(errores)
        return
    }
    console.log("formulario enviado");
    pintarMensajeExito();
    
})
