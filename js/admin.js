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

const myModal = new bootstrap.Modal(document.getElementById('editGameModal'))