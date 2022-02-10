const mainSection = document.getElementById('main')

fetch("../../data.json")
  .then((response) => response.json())
  .then((data) => {
      console.log(data)
      mainSection.innerHTML = `
      <div class='column-1'>

      <div class="title">
      <h1>${data[2].name}</h1>
      <p>${data[2].artist.name}</p>
      </div>

      <img class='main-image' src="../../${data[2].images.hero.small}" alt='main image'>
      <div class='view'><a href='../../${data[2].images.hero.large}' target='_top'>VIEW IMAGE</a></div>
      <img class='thumbnail' src='../../${data[2].artist.image}' alt='antique'>

      </div>


      <div class='text'>
      <h1>${data[2].year}</h1>
      <p class='description'>${data[2].description}</p>
      <a href='${data[2].source}'>GO TO SOURCE</a>
      </div>
      `
  })