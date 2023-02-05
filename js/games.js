const parametroPaginaPrincipal= new URLSearchParams(location.search)
const idGame=parametroPaginaPrincipal.get("id")

let favoriteButton=document.querySelector('#favorite-button')
let gameCategory=document.querySelector('#game-category')
let gameTitle=document.querySelector('#game-title')
let gameVideo=document.querySelector('#game-video')
let gameDesc=document.querySelector('#game-desc')

const traerDatosJuegos=()=>{




let game=games.find(item=>item.id==idGame)
if(game){
  gameTitle.value=game.title
  gameVideo.value=game.video
  gameDesc.value=game.description
  gameCategory.value=game.category

  }
else{
  alert('juego no encontrado')
}
}
traerDatosJuegos()

