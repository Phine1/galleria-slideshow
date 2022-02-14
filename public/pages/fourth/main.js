const mainSection = document.getElementById('main')

fetch("../../data.json")
  .then((response) => response.json())
  .then((data) => {
      console.log(data)
      mainSection.innerHTML = `
      <div class='column-1'>

      <div class="title">
      <h1>${data[3].name}</h1><br> <br><br> <br><br><br><br>
      <p>${data[3].artist.name}</p>
      </div>

     
    <div class="gallery">
    <img class='main-image' src="../../${data[3].images.hero.small}" alt='main image'>
    <div class='view'><a href='../../${data[3].images.hero.small}'  data-lightbox="mygallery" target='_top'>VIEW IMAGE</a></div>
    <img class='thumbnail' src='../../${data[3].artist.image}' alt='antique'>
    </div>
      </div>


      <div class='text'>
      <h1>${data[3].year}</h1>
      <p class='description'>${data[3].description}</p>
      <a href='${data[3].source}'>GO TO SOURCE</a>
      </div>
      `
  })