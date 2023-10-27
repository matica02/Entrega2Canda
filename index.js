/* const contenedor= document.getElementById("contenedorGeneral")

let botonLambo= document.getElementsByClassName("btn-lamborghini");
let botonMercedes= document.getElementById("btn-mercedes");
let botonVolkswagen= document.getElementById("btn-volkswagen");
let botonPorsche= document.getElementById("btn-porsche"); */

/* function agregarLambo() {
    let contenedorLambo = document.createElement("li")
    contenedorLambo.innerHTML = `<li class="nav-item">
    <p class="nav-link">Lamborghini Aventador, Price: 110usd</p>
    </li>`;
contenedor.appendChild(contenedorLambo);
};

botonLambo.addEventListener("click", agregarLambo); */

const autos= [
{
    id: 1,
    nombre: "Lamborghini Aventador",
    precio: 110,
    img: "./img/lamborghini.png"
},
{
    id: 2,
    nombre: "Mercedes AMG GTR",
    precio: 90,
    img: "../img/mercedes.png"
},
{
    id: 3,
    nombre: "Volkswagen Golf R",
    precio: 80,
    img: "../img/volkswagen.png"
},
{
    id: 4,
    nombre: "Porsche GT3RS",
    precio: 100,
    img: "../img/porsche.png"
},
];

const contenedorAutos= document.querySelector("#contenedorAutos")

function crearCards(){
    autos.forEach((auto) => {
        let contenedorAuto = document.createElement("div")
        contenedorAuto.innerHTML = `<div class="card cards-vw mx-auto /* col-sm-12 col-md-2 col-lg-2 */">
        <img class="rounded" src="${auto.img}"
          <div class="card-body">
            <h3 class="card-text">${auto.nombre}</h3> 
            <p class="card-text">Price: ${auto.precio} USD</p> 
            <a class="card-text card-btn rounded" id="btn-${auto.id}" href="#">ADD TO CART</a>
          </div>
      </div> `
    

        contenedorAutos.appendChild(contenedorAuto)
    })
}

crearCards();

const contenedorCarrito= document.querySelector("#contenedorCarrito")

const btnLambo = document.getElementById("btn-1")

btnLambo.addEventListener("click", agregarACarrito)
function agregarACarrito(){
    let contenedorLambo = document.createElement("li")
    contenedorLambo.innerHTML = `<li class="nav-item">
    <p class="nav-link">Lamborghini Aventador, Precio: 110 USD.</p>
    </li>`;
contenedorCarrito.appendChild(contenedorLambo);
};


