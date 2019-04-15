const div_inter_rapidas = document.querySelector("#interacciones-rapidas");
const button_crear_evaluador = document.querySelector("#crear-evaluador");
const button_crear_nombre_curso = document.querySelector("#crear-nombre-curso");
const button_eliminar_evaluador = document.querySelector("#eliminar-evaluador");
const button_eliminar_nombre_curso = document.querySelector("#eliminar-nombre-curso");
const button_eliminar_curso= document.querySelector("#eliminar-curso");
const button_eliminar_evaluacion = document.querySelector("#eliminar-evaluacion");
const button_eliminar_rubrica = document.querySelector("#eliminar-rubrica");
button_crear_evaluador.addEventListener("click", () => {
    div_inter_rapidas.innerHTML = "";
    div_inter_rapidas.className = "menu-creacion-rapida";
    const container = document.createElement("div");
    container.className = "container-fluid text-center";
    const h1_crear_evaluador = document.createElement("h3");
    h1_crear_evaluador.innerHTML = "<i style='color:green;'>Crear Evaluador</i>";
    const form_container = document.createElement("div");
    form_container.className = "container-fluid";
    const form_crear = document.createElement("form");
    const input_nombre = document.createElement("input");
    const input_apellido = document.createElement("input");
    const select_tipo = document.createElement("select");
    const option_auxiliar = document.createElement("option");
    const option_ayudante = document.createElement("option");
    const option_externo = document.createElement("option");
    const input_correo = document.createElement("input");
    const label_nombre = document.createElement("label");
    const label_apellido = document.createElement("label");
    const label_correo = document.createElement("label");
    const label_tipo = document.createElement("label");
    const text_ayudante = document.createTextNode("Ayudante");
    const text_auxiliar = document.createTextNode("Auxiliar");
    const text_externo = document.createTextNode("Externo");
    const text_crear = document.createTextNode("Crear");
    const button_create = document.createElement("button");
    button_create.appendChild(text_crear);
    button_create.className="btn btn-success";
    button_create.style="margin-top:10px;"
    option_auxiliar.appendChild(text_auxiliar);
    option_ayudante.appendChild(text_ayudante);
    option_externo.appendChild(text_externo);
    input_nombre.setAttribute("type", "text");
    input_nombre.setAttribute("placeholder", "Nombre del Evaluador");
    input_correo.setAttribute("type", "text");
    input_correo.setAttribute("placeholder", "ejemplo@correo.dominio");
    input_apellido.setAttribute("placeholder", "Apellido del evaluador");
    input_apellido.setAttribute("type", "text");
    input_nombre.setAttribute("name", "nombre");
    input_apellido.setAttribute("name", "apellido");
    input_correo.setAttribute("name", "correo");
    select_tipo.setAttribute("name", "tipo");
    label_nombre.setAttribute("for", "nombre");
    label_apellido.setAttribute("for", "apellido");
    label_correo.setAttribute("for", "correo");
    label_tipo.setAttribute("for", "tipo");
    label_nombre.innerHTML = "Nombre:";
    label_apellido.innerHTML = "Apellido:";
    label_correo.innerHTML = "Correo:";

    input_nombre.className = "form-control";
    input_correo.className = "form-control";
    input_apellido.className = "form-control";
    select_tipo.className = "form-control";
    option_auxiliar.className = "form-control";
    option_ayudante.className = "form-control";
    option_externo.className = "form-control";

    form_crear.appendChild(label_nombre);
    form_crear.appendChild(input_nombre);
    form_crear.appendChild(label_apellido);
    form_crear.appendChild(input_apellido);
    form_crear.appendChild(label_correo);
    form_crear.appendChild(input_correo);
    form_crear.appendChild(label_tipo);
    select_tipo.appendChild(option_auxiliar);
    select_tipo.appendChild(option_ayudante);
    select_tipo.appendChild(option_externo);
    form_crear.appendChild(select_tipo);
    form_crear.appendChild(button_create);
    form_container.appendChild(form_crear);
    container.appendChild(h1_crear_evaluador);
    div_inter_rapidas.appendChild(container);
    div_inter_rapidas.appendChild(form_container);
});

button_crear_nombre_curso.addEventListener("click", () => {
    div_inter_rapidas.innerHTML = "";
    div_inter_rapidas.className = "menu-creacion-rapida";
    const container = document.createElement("div");
    container.className = "container-fluid text-center";
    const h1_crear_evaluador = document.createElement("h3");
    h1_crear_evaluador.innerHTML = "<i style='color:green;'>Crear Nombre de un Curso</i>";
    const form_container = document.createElement("div");
    form_container.className = "container-fluid";
    const form_crear = document.createElement("form");
    const input_nombre = document.createElement("input");
    const label_nombre = document.createElement("label");
    const text_crear = document.createTextNode("Crear");
    const button_create = document.createElement("button");
    button_create.appendChild(text_crear);
    button_create.className="btn btn-success";
    button_create.style="margin-top:10px;"

    input_nombre.setAttribute("type", "text");
    input_nombre.setAttribute("placeholder", "Nombre del curso");
    input_nombre.setAttribute("name", "nombre");
    label_nombre.setAttribute("for", "nombre");
    label_nombre.innerHTML = "Nombre:";
    
    input_nombre.className = "form-control";
    
    form_crear.appendChild(label_nombre);
    form_crear.appendChild(input_nombre);
    form_crear.appendChild(button_create);
    form_container.appendChild(form_crear);
    container.appendChild(h1_crear_evaluador);
    div_inter_rapidas.appendChild(container);
    div_inter_rapidas.appendChild(form_container);

});

button_eliminar_evaluador.addEventListener("click",()=>{
    div_inter_rapidas.innerHTML="";
    div_inter_rapidas.className = "menu-eliminacion-rapida";
    const container = document.createElement("div");
    container.className = "container-fluid text-center";
    const h1_crear_evaluador = document.createElement("h3");
    h1_crear_evaluador.innerHTML = "<i style='color:red;'>Eliminar Evaluador</i>";
    const form_container = document.createElement("div");
    const form_eliminar = document.createElement("form");
    for(let i=0;i<3;i++){
        const button_eliminar_ayudante = document.createElement("button");
        button_eliminar_ayudante.innerHTML = `Ayudante ${i+1} <i class='far fa-times-circle'></i>`;
        button_eliminar_ayudante.className="btn btn-danger btn-sm";
        button_eliminar_ayudante.style="margin-left:5px;";
        form_container.appendChild(button_eliminar_ayudante);
    }
    
    const button_detalles = document.createElement("button");
    button_detalles.innerHTML = "Detalles";
    button_detalles.className = "btn btn-warning btn-sm";
    button_detalles.style = "margin-top: 10px; margin-bottom: 10px; margin-left:5px;";
    form_container.appendChild(form_eliminar);
    form_container.appendChild(button_detalles);
    container.appendChild(h1_crear_evaluador);
    div_inter_rapidas.appendChild(container);
    const h3_ultimos=document.createElement("h4");
    h3_ultimos.innerHTML="<i style='color:black;'>Ultimos creados</i>";
    div_inter_rapidas.appendChild(h3_ultimos);
    div_inter_rapidas.appendChild(form_container);
});
button_eliminar_nombre_curso.addEventListener("click",()=>{
    div_inter_rapidas.innerHTML="";
    div_inter_rapidas.className = "menu-eliminacion-rapida";
    const container = document.createElement("div");
    container.className = "container-fluid text-center";
    const h1_crear_evaluador = document.createElement("h3");
    h1_crear_evaluador.innerHTML = "<i style='color:red;'>Eliminar Nombre de un Curso</i>";
    const form_container = document.createElement("div");
    const form_eliminar = document.createElement("form");
    for(let i=0;i<3;i++){
        const button_eliminar_ayudante = document.createElement("button");
        button_eliminar_ayudante.innerHTML = `Curso  ${i+1} <i class='far fa-times-circle'></i>`;
        button_eliminar_ayudante.className="btn btn-danger btn-sm";
        button_eliminar_ayudante.style="margin-left:5px;";
        form_container.appendChild(button_eliminar_ayudante);
    }
    
    const button_detalles = document.createElement("button");
    button_detalles.innerHTML = "Detalles";
    button_detalles.className = "btn btn-warning btn-sm";
    button_detalles.style = "margin-top: 10px; margin-bottom: 10px; margin-left:5px;";
    form_container.appendChild(form_eliminar);
    form_container.appendChild(button_detalles);
    container.appendChild(h1_crear_evaluador);
    div_inter_rapidas.appendChild(container);
    const h3_ultimos=document.createElement("h4");
    h3_ultimos.innerHTML="<i style='color:black;'>Ultimos creados</i>";
    div_inter_rapidas.appendChild(h3_ultimos);
    div_inter_rapidas.appendChild(form_container);
});
button_eliminar_curso.addEventListener("click",()=>{
    div_inter_rapidas.innerHTML="";
    div_inter_rapidas.className = "menu-eliminacion-rapida";
    const container = document.createElement("div");
    container.className = "container-fluid text-center";
    const h1_crear_evaluador = document.createElement("h3");
    h1_crear_evaluador.innerHTML = "<i style='color:red;'>Eliminar Curso</i>";
    const form_container = document.createElement("div");
    const form_eliminar = document.createElement("form");
    for(let i=0;i<3;i++){
        const button_eliminar_ayudante = document.createElement("button");
        button_eliminar_ayudante.innerHTML = `Curso ${i+1} <i class='far fa-times-circle'></i>`;
        button_eliminar_ayudante.className="btn btn-danger btn-sm";
        button_eliminar_ayudante.style="margin-left:5px;";
        form_container.appendChild(button_eliminar_ayudante);
    }
    
    const button_detalles = document.createElement("button");
    button_detalles.innerHTML = "Detalles";
    button_detalles.className = "btn btn-warning btn-sm";
    button_detalles.style = "margin-top: 10px; margin-bottom: 10px; margin-left:5px;";
    form_container.appendChild(form_eliminar);
    form_container.appendChild(button_detalles);
    container.appendChild(h1_crear_evaluador);
    div_inter_rapidas.appendChild(container);
    const h3_ultimos=document.createElement("h4");
    h3_ultimos.innerHTML="<i style='color:black;'>Ultimos creados</i>";
    div_inter_rapidas.appendChild(h3_ultimos);
    div_inter_rapidas.appendChild(form_container);
});
button_eliminar_evaluacion.addEventListener("click",()=>{
    div_inter_rapidas.innerHTML="";
    div_inter_rapidas.className = "menu-eliminacion-rapida";
    const container = document.createElement("div");
    container.className = "container-fluid text-center";
    const h1_crear_evaluador = document.createElement("h3");
    h1_crear_evaluador.innerHTML = "<i style='color:red;'>Eliminar Evaluacion</i>";
    const form_container = document.createElement("div");
    const form_eliminar = document.createElement("form");
    for(let i=0;i<3;i++){
        const button_eliminar_ayudante = document.createElement("button");
        button_eliminar_ayudante.innerHTML = `Evaluacion ${i+1} <i class='far fa-times-circle'></i>`;
        button_eliminar_ayudante.className="btn btn-danger btn-sm";
        button_eliminar_ayudante.style="margin-left:5px;";
        form_container.appendChild(button_eliminar_ayudante);
    }
    
    const button_detalles = document.createElement("button");
    button_detalles.innerHTML = "Detalles";
    button_detalles.className = "btn btn-warning btn-sm";
    button_detalles.style = "margin-top: 10px; margin-bottom: 10px; margin-left:5px;";
    form_container.appendChild(form_eliminar);
    form_container.appendChild(button_detalles);
    container.appendChild(h1_crear_evaluador);
    div_inter_rapidas.appendChild(container);
    const h3_ultimos=document.createElement("h4");
    h3_ultimos.innerHTML="<i style='color:black;'>Ultimos creados</i>";
    div_inter_rapidas.appendChild(h3_ultimos);
    div_inter_rapidas.appendChild(form_container);
});
button_eliminar_rubrica.addEventListener("click",()=>{
    div_inter_rapidas.innerHTML="";
    div_inter_rapidas.className = "menu-eliminacion-rapida";
    const container = document.createElement("div");
    container.className = "container-fluid text-center";
    const h1_crear_evaluador = document.createElement("h3");
    h1_crear_evaluador.innerHTML = "<i style='color:red;'>Eliminar Rubrica</i>";
    const form_container = document.createElement("div");
    const form_eliminar = document.createElement("form");
    for(let i=0;i<3;i++){
        const button_eliminar_ayudante = document.createElement("button");
        button_eliminar_ayudante.innerHTML = `Rubrica ${i+1} <i class='far fa-times-circle'></i>`;
        button_eliminar_ayudante.className="btn btn-danger btn-sm";
        button_eliminar_ayudante.style="margin-left:5px;";
        form_container.appendChild(button_eliminar_ayudante);
    }
    
    const button_detalles = document.createElement("button");
    button_detalles.innerHTML = "Detalles";
    button_detalles.className = "btn btn-warning btn-sm";
    button_detalles.style = "margin-top: 10px; margin-bottom: 10px; margin-left:5px;";
    form_container.appendChild(form_eliminar);
    form_container.appendChild(button_detalles);
    container.appendChild(h1_crear_evaluador);
    div_inter_rapidas.appendChild(container);
    const h3_ultimos=document.createElement("h4");
    h3_ultimos.innerHTML="<i style='color:black;'>Ultimos creados</i>";
    div_inter_rapidas.appendChild(h3_ultimos);
    div_inter_rapidas.appendChild(form_container);
});