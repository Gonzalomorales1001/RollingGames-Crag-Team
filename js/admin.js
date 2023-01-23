const editGameModal = new bootstrap.Modal(document.getElementById('editGameModal'))

let tableBody=document.querySelector('#game-table__body')

const loadTable=()=>{
  tableBody.innerHTML=''

  games.forEach(game=>{
    let tr=document.createElement('tr')

    let content=`
    <th scope="row">${game.title}</th>
    <td class="text-justify">${game.description}</td>
    <td>${game.category}</td>
    <td class="text-center fs-3"><i class="bi bi-pencil-square" onclick="showEditGameModal(${game.id})"></i></td>
    <td class="text-center fs-3"><i class="text-danger mx-1 bi bi-trash-fill" onclick="deleteGame(${game.id})"></i></td>
    `
    tr.innerHTML=content
    tableBody.appendChild(tr)
  })
}

const saveGamesInLS=()=>localStorage.setItem('games',JSON.stringify(games))

const deleteGame=(id)=>{
  let findGame=games.find(game=>game.id==id)
  let indexgame=games.findIndex(game=>game.id==id)

  let confirmDelete=confirm(`Are you sure to want to delete ${findGame.title} from Dewbie?`)

  confirmDelete?games.splice(indexgame,1):
  localStorage.removeItem('games')
  saveGamesInLS()
  loadTable()
}

const addNewGame=(event)=>{
  event.preventDefault()
  console.log(`funcion enabled`)
  let nameInput=document.querySelector('#game-name')
  let urlInput=document.querySelector('#game-url')
  let descInput=document.querySelector('#game-description')
  let categorySelect=document.querySelector('#game-category')
  let urlImageInput=document.querySelector('#game-imageURL')

  let newGame=new game(
    new Date().getTime(),
    nameInput.value,
    descInput.value,
    categorySelect.value,
    urlImageInput.value,
    urlInput.value
    )

  games.push(newGame)
  saveGamesInLS()
  loadTable()

  nameInput.value=''
  descInput.value=''
  categorySelect.value=''
  urlImageInput.value=''
  urlInput.value=''
}

let gameData=null

const showEditGameModal=(id)=>{
  editGameModal.show()
  gameData=games.find(game=>game.id==id)

  let nameInput=document.querySelector('#game-name__edit-modal')
  let urlInput=document.querySelector('#game-url__edit-modal')
  let descInput=document.querySelector('#game-description__edit-modal')
  let categorySelect=document.querySelector('#game-category__edit-modal')
  let urlImageInput=document.querySelector('#game-imageURL__edit-modal')

  nameInput.value=gameData.title
  descInput.value=gameData.description
  categorySelect.value=gameData.category
  urlImageInput.value=gameData.img
  urlInput.value=gameData.url
}

const editGame=(event)=>{
  let index=games.findIndex(game=>game.id==gameData.id)
  event.preventDefault()

  let nameInput=document.querySelector('#game-name__edit-modal')
  let urlInput=document.querySelector('#game-url__edit-modal')
  let descInput=document.querySelector('#game-description__edit-modal')
  let categorySelect=document.querySelector('#game-category__edit-modal')
  let urlImageInput=document.querySelector('#game-imageURL__edit-modal')

  games[index].title=nameInput.value
  games[index].description=descInput.value
  games[index].category=categorySelect.value
  games[index].img=urlImageInput.value
  games[index].url=urlInput.value

  saveGamesInLS()
  loadTable()
  editGameModal.hide()
}

loadTable()