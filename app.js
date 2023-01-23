class game{
    constructor(id,title,description,category,img,url,favorite=false){
        this.id=id
        this.title=title
        this.description=description
        this.category=category
        this.img=img
        this.url=url
        this.favorite=favorite
    }
}

const initialData=[
    new game(
        0,
        'FlexBox Froggy',
        'a game where you help Froggy and friends by writing CSS code!',
        'CSS',
        'https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Fwww.giantbomb.com%2Fflexbox-froggy%2F3030-84034&psig=AOvVaw38pCx8MWGi43y_BHh18u5V&ust=1674568008035000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIDYkY7q3fwCFQAAAAAdAAAAABAD',
        'https://flexboxfroggy.com/'
        ),
    new game(
        1,
        'JSRobot',
        'Learn JavaScript by playing a platform game: Control a robot to collect coins, avoid obstacles and reach the flag at the end of the level.',
        'JavaScript',
        'https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Fwww.producthunt.com%2Fproducts%2Fjsrobot&psig=AOvVaw0m2zK6CIFiUpEiegFYli8Q&ust=1674569971525000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCl_7bx3fwCFQAAAAAdAAAAABAD',
        'https://lab.reaal.me/jsrobot/',
    ),
    new game(
        2,
        'Python Challenge',
        'The most entertaining way to explore Python. Every puzzle can be solved by a bit of (python) programming.',
        'Python',
        'http://www.pythonchallenge.com/logo.jpg',
        'www.pythonchallenge.com',
    ),
    new game(
        3,
        'Robocode',
        `It's an open-source game for programmers, wherein the core mechanic is programming your units' AI. You control your colony by writing JavaScript.`,
        'JavaScript',
        'https://robocode.sourceforge.io/gfx/robocode_logo_tanks.png',
        'https://robocode.sourceforge.io/',
    ),
    new game(
        4,
        'Screeps',
        'World is an open source MMO RTS sandbox game for programming enthusiasts, wherein the core mechanic is programming your units AI.',
        'JavaScript',
        'https://raw.githubusercontent.com/screeps/screeps/HEAD/logo.png',
        'https://screeps.com/',
    ),
    new game(
        5,
        'SQL: Murder Mistery',
        `There's been a Murder in SQL City! The SQL Murder Mystery is designed to be both a self-directed lesson to learn SQL concepts and commands and a fun game for experienced SQL users to solve an intriguing crime.`,
        'SQL',
        'https://www.freecodecamp.org/news/content/images/2020/08/The_SQL_Murder_Mystery.jpg',
        'https://mystery.knightlab.com/',
    ),
    new game(
        6,
        'CSS Dinner!',
        `No worries, you've got this! You're about to learn CSS Selectors! Selectors are how you pick which element to apply styles to.`,
        'CSS',
        'https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Fgithub.com%2Fflukeout%2Fcss-diner%2Fissues%2F93&psig=AOvVaw0x5R73Gucfizqq7MtQ9cAt&ust=1674589099893000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKiY3dm43vwCFQAAAAAdAAAAABAI',
        'https://flukeout.github.io/',
    ),
]

let games=JSON.parse(localStorage.getItem('games'))||initialData

localStorage.setItem('games',JSON.stringify(games))

//new Date().getTime()