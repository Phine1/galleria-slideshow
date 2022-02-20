const mainSection = document.getElementById('main')

fetch("../../data.json")
  .then((response) => response.json())
  .then((data) => {
      console.log(data)
      mainSection.innerHTML = `
      <div class='column-1'>

      <div class="title">
      <h1>${data[4].name}</h1><br> 
      <p>${data[4].artist.name}</p>
      </div>

     
    <div class="gallery">
    <img class='main-image' src="../../${data[4].images.hero.small}" alt='main image'>
    <a class='expand' href='../../${data[4].images.hero.small}'  data-lightbox="mygallery" target='_top'><div class='view'><img src="https://img.icons8.com/ios-glyphs/24/ffffff/expand--v1.png"/><p>VIEW IMAGE</p></div></a>
    <img class='thumbnail' src='../../${data[4].artist.image}' alt='antique'>
    </div>
      </div>


      <div class='text'>
      <h1>${data[4].year}</h1>
      <p class='description'>${data[4].description}</p>
      <a href='${data[4].source}'>GO TO SOURCE</a>
      </div>
      `
  })