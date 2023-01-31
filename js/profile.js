let mainTag=document.querySelector('#main')
if(session.length<1){
    let accessDenied=`
    <div class="vh-100 d-flex justify-content-center align-items-center">
    <div class="alert alert-danger mx-4" role="alert" id="access-denied">
    You need to Log In to view this page
    </div>
    </div>
    `
    mainTag.innerHTML=accessDenied
  }

//load user images
const userPhoto=document.querySelector('.banner__user__img')
const banner=document.querySelector('.banner')

let defaultAvatar=new Image()
defaultAvatar.src='/assets/img/profile-avatar-example.png'

const loadUserImages=()=>{
    userPhoto.style.backgroundImage=`url(${session.photo})`
    banner.style.backgroundImage=`url(${session.banner})`
}

const changeUserPhotoModal=new bootstrap.Modal(document.getElementById('changeUserPhotoModal'))
const changeBannerModal=new bootstrap.Modal(document.getElementById('changeBannerModal'))

let imgPreview=document.querySelector('#modal-img-preview')
let changeAvatarInput=document.querySelector('#avatarURLInput')

const openEditPhotoModal=()=>{
    changeUserPhotoModal.show()
    imgPreview.src=session.photo
}

const validateURL=(urlImage)=>{
    try {
        new URL(urlImage)
        return true
    } catch (err) {
        return false
    }
}

const onChangeImgPreview=()=>{
    if(validateURL(changeAvatarInput.value)){
        document.querySelector('#InvalidURL').style.opacity="0%"
        imgPreview.src=changeAvatarInput.value
    }else{
        document.querySelector('#InvalidURL').style.opacity="100%"
    }
  }

const openEditBannerModal=()=>{
    changeBannerModal.show()
}

const changeAvatar=(event)=>{
    event.preventDefault()

    let users=JSON.parse(localStorage.getItem('users'))
    let logedUserIndex=users.findIndex(user=>user.id==session.id)

    if(validateURL(changeAvatarInput.value)){
        users[logedUserIndex].photo=changeAvatarInput.value
        session.photo=changeAvatarInput.value
        document.querySelector('#InvalidURL').style.opacity="0%"
        localStorage.setItem('users',JSON.stringify(users))
        localStorage.setItem('session',JSON.stringify(session))
    
        loadUserImages()
    
        clearInputs()
        changeUserPhotoModal.hide()
    }else{
        document.querySelector('#InvalidURL').style.opacity="100%"
    }
    
}

const deleteAvatar=()=>{
    let users=JSON.parse(localStorage.getItem('users'))
    let logedUserIndex=users.findIndex(user=>user.id==session.id)

    users[logedUserIndex].photo=defaultAvatar.src
    session.photo=defaultAvatar.src
    document.querySelector('#InvalidURL').style.opacity="0%"
    localStorage.setItem('users',JSON.stringify(users))
    localStorage.setItem('session',JSON.stringify(session))

    loadUserImages()

    clearInputs()
    changeUserPhotoModal.hide()
}

function clearInputs(event){
    changeAvatarInput.value=''
    document.querySelector('#InvalidURL').style.opacity="0%"
}

//load functions
if(session){
    loadUserImages()
  }