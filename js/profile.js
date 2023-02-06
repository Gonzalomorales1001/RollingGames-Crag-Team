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

  window.addEventListener("scroll", function(){
    var nav = document.querySelector(".navbar");
    nav.classList.toggle("navbar-color",window.scrollY>0)
    })

//load user images
const userPhoto=document.querySelector('.banner__user__img')
const banner=document.querySelector('.banner')

const loadUserImages=()=>{
    userPhoto.style.backgroundImage=`url(${session.photo})`
    banner.style.background=session.banner
}

const changeUserPhotoModal=new bootstrap.Modal(document.getElementById('changeUserPhotoModal'))
const changeBannerModal=new bootstrap.Modal(document.getElementById('changeBannerModal'))

let imgPreview=document.querySelector('#modal-img-preview')
let changeAvatarInput=document.querySelector('#avatarURLInput')

const openEditPhotoModal=()=>{
    changeUserPhotoModal.show()
    imgPreview.src=session.photo
}

function validateURL(urlImage){
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
            users[logedUserIndex].photo=imgPreview.src
            session.photo=imgPreview.src
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
    if(confirm('Are you sure to delete profile avatar?')){
        let users=JSON.parse(localStorage.getItem('users'))
        let logedUserIndex=users.findIndex(user=>user.id==session.id)
    
        users[logedUserIndex].photo=defaultAvatar.src
        session.photo=defaultAvatar.src
    
        localStorage.setItem('users',JSON.stringify(users))
        localStorage.setItem('session',JSON.stringify(session))
    
        loadUserImages()
    
        clearInputs()
        changeUserPhotoModal.hide()
    }
}

const changeBanner=(value)=>{
    let users=JSON.parse(localStorage.getItem('users'))
    let logedUserIndex=users.findIndex(user=>user.id==session.id)

    let getSelectedBGStyles=''
    if(value==='c'){
        getSelectedBGStyles=document.querySelector('#b-btn-c').value
        
        alert('func encabled () '+getSelectedBGStyles)

        users[logedUserIndex].banner=getSelectedBGStyles
        session.banner=getSelectedBGStyles
    }else{
        getSelectedBGStyles=window.getComputedStyle(document.querySelector(`#b-btn-${value}`)).background
        users[logedUserIndex].banner=getSelectedBGStyles
        session.banner=getSelectedBGStyles
    }
    localStorage.setItem('users',JSON.stringify(users))
    localStorage.setItem('session',JSON.stringify(session))
    loadUserImages()
}

function clearInputs(event){
    changeAvatarInput.value=''
    document.querySelector('#InvalidURL').style.opacity="0%"
}

//load functions
if(session){
    loadUserImages()
    let sessionName=session.username.charAt(0).toUpperCase()+session.username.substring(1)
    document.querySelector('#sessionUsername').innerHTML=sessionName
    document.querySelector('#sessionEmail').innerHTML=session.email
    document.querySelector('#sessionUsernameProfile').innerHTML=sessionName+"'s"+' Profile'
  }