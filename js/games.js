const parametroPaginaPrincipal= new URLSearchParams(location.search)
const idGame=parametroPaginaPrincipal.get("id")

let contenedor=document.querySelector("#contenedor")
let games= JSON.parse(localStorage.getItem("games"))||[]




const traerDatosJuegos=()=>{
//encontrar el producto
//si existe crear la tarjeta
//si no existe mostramos un mensaje
let infogames=games.find(item=>item.id===idGame)
if(infogames){
    let col = document.createElement("div");
    col.classList = "col";
    let tarjeta = `<div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${infogames.image}" class="img-fluid rounded-start p-3" alt="${infogames.title}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${infogames.title}</h5>
          <p class="card-text">${infogames.description}</p>
          <p class="card-text"><small class="text-muted">Precio: $${infogames.price}</small></p>
        </div>
      </div>
    </div>
  </div>`;

    col.innerHTML = tarjeta;
    contenedor.append(col);
}else{
    console.warn("NO ENCONTRAMOS EL JUEGO QUE BUSCAS")
}
}
traerDatosJuegos()

