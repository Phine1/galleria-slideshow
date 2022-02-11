const mainSection = document.getElementById('main')

fetch("../../data.json")
  .then((response) => response.json())
  .then((data) => {
      console.log(data)
      mainSection.innerHTML = `
      <div class='column-1'>

      <div class="title">
      <h1>${data[6].name}</h1>
      <p>${data[6].artist.name}</p>
      </div>

      <img class='main-image' src="../../${data[6].images.hero.small}" alt='main image'>
      <div class='view'><a href='../../${data[6].images.hero.large}' target='_top'>VIEW IMAGE</a></div>
      <img class='thumbnail' src='../../${data[6].artist.image}' alt='antique'>

      </div>


      <div class='text'>
      <h1>${data[6].year}</h1>
      <p class='description'>${data[6].description}</p>
      <a href='${data[6].source}'>GO TO SOURCE</a>
      </div>
      `
  })