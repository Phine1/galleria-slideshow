const mainSection = document.getElementById('main')

fetch("../../data.json")
  .then((response) => response.json())
  .then((data) => {
    
      mainSection.innerHTML = `
      <div class='column-1'>

      <div class="title">
      <h1>${data[14].name}</h1>
      <p>${data[14].artist.name}</p>
      </div>

      <img class='main-image' src="../../${data[14].images.hero.small}" alt='main image'>
      <div class='view'><a href='../../${data[14].images.hero.large}' target='_top'>VIEW IMAGE</a></div>
      <img class='thumbnail' src='../../${data[14].artist.image}' alt='antique'>

      </div>


      <div class='text'>
      <h1>${data[14].year}</h1>
      <p class='description'>${data[14].description}</p>
      <a href='${data[14].source}'>GO TO SOURCE</a>
      </div>
      `
  })