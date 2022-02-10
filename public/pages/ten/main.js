const mainSection = document.getElementById('main')

fetch("../../data.json")
  .then((response) => response.json())
  .then((data) => {
   
      mainSection.innerHTML = `
      <div class='column-1'>

      <div class="title">
      <h1>${data[9].name}</h1>
      <p>${data[9].artist.name}</p>
      </div>

      <img class='main-image' src="../../${data[9].images.hero.small}" alt='main image'>
      <div class='view'><a href='../../${data[9].images.hero.large}' target='_top'>VIEW IMAGE</a></div>
      <img class='thumbnail' src='../../${data[9].artist.image}' alt='antique'>

      </div>


      <div class='text'>
      <h1>${data[9].year}</h1>
      <p class='description'>${data[9].description}</p>
      <a href='${data[9].source}'>GO TO SOURCE</a>
      </div>
      `
  })