let session=JSON.parse(localStorage.getItem('session'))
let mainTag=document.querySelector('#main')

if(!session.admin){
  let accessDenied=`
  <div class="vh-100">
  <div class="alert alert-danger mx-4" role="alert" id="access-denied">
  You do not have permission to access this page
  </div>
  </div>
  `
  mainTag.innerHTML=accessDenied
}

const editGameModal = new bootstrap.Modal(document.getElementById('editGameModal'))

let gameTableBody=document.querySelector('#game-table__body')

const loadTable=()=>{
  gameTableBody.innerHTML=''

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
    gameTableBody.appendChild(tr)
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

  let imgPreview=document.querySelector('#modal-img-preview')

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

  imgPreview.src=gameData.img
}

const onChangeImgPreview=()=>{
  let imgPreview=document.querySelector('#modal-img-preview')
  imgPreview.src=gameData.img
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


//user admins

let userTableBody=document.querySelector('#user-table__body')
let users=JSON.parse(localStorage.getItem('users'))||[admin,defaultUser]

const saveUsersInLS=()=>localStorage.setItem('users',JSON.stringify(users))

const loadUserTable=()=>{
  userTableBody.innerHTML=''
  
  users.forEach(user=>{
    let tr=document.createElement('tr')

    let content=`
    <th scope="row" ${user.id==0?'class="text-danger-emphasis"':''}>${user.username}</th>
    <td ${user.id==0?'class="text-danger-emphasis"':''}>${user.email}</td>
    <td class="text-center fs-4">
        <div class="form-check form-switch d-flex justify-content-center align-items-center">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" ${user.admin?'checked':''} ${user.id==0?'disabled':''} onclick="setAdmin(${user.id})">
        </div>
    </td>
    <td class="text-center fs-3">${user.id==0?'':`<i class="text-danger bi bi-trash-fill" onclick="deleteUser(${user.id})"></i>`}</td>
    `

    tr.innerHTML=content
    userTableBody.appendChild(tr)
  })

}

const setAdmin=(id)=>{
  let userFound=users.find(user=>user.id==id)
  if(userFound.id==0){return alert('Access Denied')}
  let userFoundIndex=users.findIndex(user=>user.id==id)

  userFound.admin= !userFound.admin
  users[userFoundIndex]=userFound

  localStorage.setItem('session',JSON.stringify(userFound))
  saveUsersInLS()
  loadUserTable()
}

const deleteUser=(id)=>{
  let userFound=users.find(user=>user.id==id)
  if(userFound.id==0){return alert('Access Denied')}
  let userFoundIndex=users.findIndex(user=>user.id==id)

  let confirmDelete=confirm(`Are you sure to want to delete ${userFound.username} from users?`)

  if(confirmDelete){
    users.splice(userFoundIndex,1)
    localStorage.removeItem('users')
    saveUsersInLS()

    let session=JSON.parse(localStorage.getItem('session'))
    session=[]
    localStorage.setItem('session',JSON.stringify(session))
    loadUserTable()
  }
}

//queue

let queueTableBody=document.querySelector('#queue-table__body')
let queue=JSON.parse(localStorage.getItem('queue'))||[]

const saveQueueInLS=()=>localStorage.setItem('queue',JSON.stringify(queue))

const loadQueueTable=()=>{
  queueTableBody.innerHTML=''

  queue.forEach(user=>{
    let tr=document.createElement('tr')

    let content=`
    <th class="vertical-align-center" scope="row">${user.username}</th>
    <td class="vertical-align-center">${user.email}</td>
    <td class="text-center fs-3"><i class="text-success mx-1 bi bi-check-lg" onclick="acceptUser(${user.id})"></i></td>
    <td class="text-center fs-3"><i class="text-danger mx-1 bi bi-x-lg" onclick="rejectUser(${user.id})"></i></td>
  `

  tr.innerHTML=content
  queueTableBody.appendChild(tr)
  })
}

const rejectUser=(id)=>{
  let userInQueueFound=queue.find(user=>user.id==id)
  let userInQueueFoundIndex=queue.findIndex(user=>user.id==id)

  let deleteConfirm=confirm(`Are you sure you want to reject the registration request of: ${userInQueueFound.username}?`)
  deleteConfirm?queue.splice(userInQueueFoundIndex,1):

  saveQueueInLS()
  loadQueueTable()
}

const acceptUser=(id)=>{
  let userInQueueFound=queue.find(user=>user.id==id)
  let userInQueueFoundIndex=queue.findIndex(user=>user.id==id)

  let accept=confirm(`Add ${userInQueueFound.username}?`)
  if(accept){
    users.push(userInQueueFound)
    loadUserTable()
    saveUsersInLS()

    queue.splice(userInQueueFoundIndex,1)
    loadQueueTable()
    saveQueueInLS()

  }
}

if(session.admin){
  document.querySelector('#access-denied').style.display='none'
  loadTable()
  loadUserTable()
  loadQueueTable()
}