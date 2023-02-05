class game{
    constructor(id,title,description,category,img,url,video,published=false,favorite=false){
        this.id=id
        this.title=title
        this.description=description
        this.category=category
        this.img=img
        this.url=url
        this.video=video
        this.published=published
        this.favorite=favorite
    }
}

const initialData=[
    new game(
        0,
        'FlexBox Froggy',
        'a game where you help Froggy and friends by writing CSS code!',
        'CSS',
        'https://spillbart.com/wp-content/uploads/2021/02/css-flexbox-froggy.png',
        'https://flexboxfroggy.com/',
        `https://www.youtube.com/embed/5cbfEYT1FG4`,
        true,
        ),
    new game(
        1,
        'JSRobot',
        'Learn JavaScript by playing a platform game: Control a robot to collect coins, avoid obstacles and reach the flag at the end of the level.',
        'JavaScript',
        'https://i.blogs.es/ee8e7a/jsrobot-2017-11-28-17-46-11/450_1000.png',
        'https://lab.reaal.me/jsrobot/',
        `https://www.youtube.com/embed/oxh8ap1DjlA`,
        true,
    ),
    new game(
        2,
        'Python Challenge',
        'The most entertaining way to explore Python. Every puzzle can be solved by a bit of (python) programming.',
        'Python',
        'http://www.pythonchallenge.com/logo.jpg',
        'www.pythonchallenge.com',
        `https://www.youtube.com/embed/otBD59s4fpg`,
        true,
    ),
    new game(
        3,
        'Robocode',
        `It's an open-source game for programmers, wherein the core mechanic is programming your units' AI. You control your colony by writing JavaScript.`,
        'JavaScript',
        'https://robocode.sourceforge.io/gfx/robocode_logo_tanks.png',
        'https://robocode.sourceforge.io/',
        `https://www.youtube.com/embed/8JJqc5-erVM`,
        false,
    ),
    new game(
        4,
        'Screeps',
        'World is an open source MMO RTS sandbox game for programming enthusiasts, wherein the core mechanic is programming your units AI.',
        'JavaScript',
        'https://raw.githubusercontent.com/screeps/screeps/HEAD/logo.png',
        'https://screeps.com/',
        `https://www.youtube.com/embed/LkXuGcrCZtU`,
        true,
    ),
    new game(
        5,
        'SQL: Murder Mistery',
        `There's been a Murder in SQL City! The SQL Murder Mystery is designed to be both a self-directed lesson to learn SQL concepts and commands and a fun game for experienced SQL users to solve an intriguing crime.`,
        'SQL',
        'https://www.freecodecamp.org/news/content/images/2020/08/The_SQL_Murder_Mystery.jpg',
        'https://mystery.knightlab.com/',
        `https://www.youtube.com/embed/jbioR14VQYI`,
        true,
    ),
    new game(
        6,
        'CSS Dinner!',
        `No worries, you've got this! You're about to learn CSS Selectors! Selectors are how you pick which element to apply styles to.`,
        'CSS',
        'https://i.ytimg.com/vi/BaT22bWcGwU/maxresdefault.jpg',
        'https://flukeout.github.io/',
        `https://www.youtube.com/embed/SbYdwj5lito`,
        false,
    ),
]

let color={
    HTML: 'RGBA(255,60,7,var(--bs-bg-opacity,1))',
    CSS: 'RGBA(71,68,255,var(--bs-bg-opacity,1))',
    JavaScript: 'RGBA(255,255,0,var(--bs-bg-opacity,1))',
    Java: ' RGBA(255,255,255,var(--bs-bg-opacity,1)) ',
    Python: 'RGBA(100,100,100,var(--bs-bg-opacity,1))',
    SQL: 'RGBA(0,0,125,var(--bs-bg-opacity,1))',
    C:'RGBA(120,0,255,var(--bs-bg-opacity,1))',
    Others:'#000000',
}

let games=JSON.parse(localStorage.getItem('games'))||initialData

localStorage.setItem('games',JSON.stringify(games))

let featuredGame=JSON.parse(localStorage.getItem('featured'))||initialData[4]

let session=JSON.parse(localStorage.getItem('session'))||[]

//admin navbar button
let admNavBtn=document.querySelector('#admin-nav-item')

if(session.admin){
    admNavBtn.classList='nav-item'
}else{
    admNavBtn.classList='nav-item d-none'
}

//login button
let loginBtnText=document.querySelector('#user-log')

let userDropdown=`
                <div class="dropdown dropstart">
                    <button class="btn btn-outline-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ${session.username}
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item" href="/pages/profile.html">My Profile</a></li>
                        <li><a class="dropdown-item" href="/pages/login.html" onclick="logOut()">Log Out</a></li>
                    </ul>
                </div>`

if(session.username){loginBtnText.innerHTML=userDropdown}

const logOut=()=>localStorage.removeItem('session')


// let favoriteBadge=document.querySelector('#favorite-badge')

const addFavorite=()=>{
    // favoriteBadge=classList='bi bi-star-fill'
    user.favorites.push(game)
}