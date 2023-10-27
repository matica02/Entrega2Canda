const form = document.getElementById("form");

form.addEventListener("submit", (e) => {crearUsuario(e)});

function crearUsuario(e){
    e.preventDefault()
    
    let formNombre = document.getElementById("nombre")
    let formApellido = document.getElementById("apellido")
    let formEdad = document.getElementById("edad")
    let formEmail = document.getElementById("email")

    const usuario = {
        nombre: formNombre.value,
        apellido: formApellido.value,
        edad: formEdad.value,
        email: formEmail.value,
    }

    console.log(usuario)
    localStorage.setItem("user", JSON.stringify(usuario))
    form.reset()
};

const autos= [
{
    id: 1,
    nombre: "Lamborghini Aventador",
    precio: 120,
    img: "./img/lamborghini.png",
},
{
    id: 2,
    nombre: "Mercedes AMG GTR",
    precio: 90,
    img: "../img/mercedes.png",
},
{
    id: 3,
    nombre: "Volkswagen Golf R",
    precio: 70,
    img: "../img/volkswagen.png",
},
{
    id: 4,
    nombre: "Porsche GT3RS",
    precio: 110,
    img: "../img/porsche.png",  
},
{
    id: 5,
    nombre: "Audi R8",
    precio: 100,
    img: "../img/audir8.png",
},
{
    id: 6,
    nombre: "BMW M4",
    precio: 80,
    img: "../img/m4.png",
}
];

const contenedorAutos= document.querySelector("#contenedorAutos");
const contenedorCarrito= document.querySelector("#contenedorCarrito");

function crearCards(){
    autos.forEach((auto) => {
        let contenedorAuto = document.createElement("div")
        contenedorAuto.innerHTML = `<div class="card cards-vw mx-auto col-sm-12 col-md-2 col-lg-2">
        <img class="rounded" src="${auto.img}"
          <div class="card-body">
            <h3 class="card-text">${auto.nombre}</h3> 
            <p class="card-text">Price: ${auto.precio} USD</p> 
            <a class="card-text card-btn rounded" id="btn-${auto.id}" href="#">ADD TO CART</a>
          </div>
      </div> `
    

        contenedorAutos.appendChild(contenedorAuto)
    })
};

crearCards();

const btnLambo= document.getElementById("btn-1");
const btnMercedes= document.getElementById("btn-2");
const btnVolkswagen = document.getElementById("btn-3");
const btnPorsche = document.getElementById("btn-4");
const btnAudi = document.getElementById("btn-5");
const btnBMW = document.getElementById("btn-6");

btnLambo.addEventListener("click" , agregarACarrito(0));
btnMercedes.addEventListener("click" , agregarACarrito(1));
btnVolkswagen.addEventListener("click" , agregarACarrito(2));
btnPorsche.addEventListener("click" , agregarACarrito(3));
btnAudi.addEventListener("click" , agregarACarrito(4));
btnBMW.addEventListener("click" , agregarACarrito(5));

function agregarACarrito(producto){
    let contenedorProducto = document.createElement("li")
    contenedorProducto.innerHTML = `<li class="nav-item">
    <p>${autos[producto].nombre}, Precio: ${autos[producto].precio} USD</p></li>`;

contenedorCarrito.appendChild(contenedorProducto)
};




