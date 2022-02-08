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
      

        })});