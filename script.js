const div = document.getElementById("div")



 

    fetch('./data.json')
    .then((response) => response.json())
    .then((data)=> {
        data.forEach((element) => {
          div.innerHTML += `
          <section class= grid-item">
            
              <div>
                <h2>${element.name}</h2>
                <h3>${element.year}</h3>
                <p>${element.artist.name}</p>
              </div>
              <img src="${element.images.thumbnail}" alt="${element.name}, author ${element.artist.name}">
            </a>
          </section>`
      
//a feature from masonry grid for vertical alignment
const macy = Macy({
  container: '.div',
  columns: 4,
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