const div = document.getElementById("div")



 

    fetch('./data.json')
    .then((response) => response.json())
    .then((data)=> {
        data.forEach((element) => {
          div.innerHTML += ` 
          <section class= "image-wrapper grid-item">
          <a class="grid-item__link" href="">
              <div class="grid-item__text">
                <h2 class="heading heading--2 white">${element.name}</h2>
                
                <p class="subhead subhead--2 white--opacity">${element.artist.name}</p>
              </div>
              <img class="grid-item__image" src="${element.images.thumbnail}" alt="${element.name}, author ${element.artist.name}">
            </a>
          </section>`
      
//a feature from masonry grid for vertical alignment
const macy = Macy({
  container: '.div',
  columns:4,
  margin: 24,
  trueOrder: false,
  breakAt: {
      1100: 3,
      840: 2,
      600: 1,
  },
  waitForImages: true,
});
macy.recalculate()
        })});