const parametroPaginaPrincipal= new URLSearchParams(location.search)
const idGame=parametroPaginaPrincipal.get("id")

let contenedor=document.querySelector("#contenedor")
//let games= JSON.parse(localStorage.getItem("games"))||[]




const traerDatosJuegos=()=>{
//encontrar el producto
//si existe crear la tarjeta
//si no existe mostramos un mensaje
let game=games.find(item=>item.id==idGame)
if(game){
    let col = document.createElement("div");
    col.classList = "col";
    let tarjeta = `<div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${game.img}" class="img-fluid rounded-start p-3" alt="${game.title}">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${game.title}</h5>
          <p class="card-text">${game.description}</p>
          <p class="card-text">${game.category}</p>
          <p class="card-text"><small class="text-muted">Video: ${game.video}</small></p>
        </div>
      </div>
    </div>
  </div>`;

    col.innerHTML = tarjeta;
    contenedor.append(col);
}else{
    console.warn("NO ENCONTRAMOS EL JUEGO QUE BUSCAS")
}
console.log(game)}

traerDatosJuegos()


