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
        123,
        'FlexBox Froggy',
        'a game where you help Froggy and friends by writing CSS code!',
        'CSS',
        'https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Fwww.giantbomb.com%2Fflexbox-froggy%2F3030-84034&psig=AOvVaw38pCx8MWGi43y_BHh18u5V&ust=1674568008035000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIDYkY7q3fwCFQAAAAAdAAAAABAD',
        'https://flexboxfroggy.com/'
        ),
    new game(
        124,
        'JSRobot',
        'Learn JavaScript by playing a platform game: Control a robot to collect coins, avoid obstacles and reach the flag at the end of the level.',
        'JavaScript',
        'https://www.google.com.ar/url?sa=i&url=https%3A%2F%2Fwww.producthunt.com%2Fproducts%2Fjsrobot&psig=AOvVaw0m2zK6CIFiUpEiegFYli8Q&ust=1674569971525000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCl_7bx3fwCFQAAAAAdAAAAABAD',
        'https://lab.reaal.me/jsrobot/',
    )
]

let games=JSON.parse(localStorage.getItem('games'))||initialData

localStorage.setItem('games',JSON.stringify(games))

//new Date().getTime()