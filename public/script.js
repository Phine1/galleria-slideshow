const one = document.getElementById("anchor-1");
const two = document.getElementById("anchor-2");
const three = document.getElementById("anchor-3");
const four = document.getElementById("anchor-4");
const five = document.getElementById("anchor-5");
const six = document.getElementById("anchor-6");
const seven = document.getElementById("anchor-7");
const eight = document.getElementById("anchor-8");
const nine = document.getElementById("anchor-9");
const ten = document.getElementById("anchor-10");
const eleven = document.getElementById("anchor-11");
const twelve = document.getElementById("anchor-12");
const thirteen = document.getElementById("anchor-13");
const fourteen = document.getElementById("anchor-14");
const fifteen = document.getElementById("anchor-15");
// one.textContent = ''
console.log(one)

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    one.innerHTML = ` 
        <div class="image_text">
            <h2 class="heading">${data[0].name}</h2>
            <p class="subhead">${data[0].artist.name}</p>
        </div>
        <img class="grid" src="${data[0].images.thumbnail}" alt="${data[0].name}, author ${data[0].artist.name}">
            
          `;
    two.innerHTML = ` 
        <div class="image_text">
            <h2 class="heading">${data[4].name}</h2> 
            <p class="subhead">${data[4].artist.name}</p>
        </div>  
        <img class="grid" src="${data[4].images.thumbnail}" alt="${data[4].name}, author ${data[4].artist.name}">
          
 `;
    three.innerHTML = `
        <div class="image_text">
            <h2 class="heading">${data[8].name}</h2>
            <p class="subhead">${data[8].artist.name}</p>
        </div>
        <img class="grid" src="${data[8].images.thumbnail}" alt="${data[8].name}, author ${data[8].artist.name}">
        
`;
    four.innerHTML = `
        <div class="image_text">
            <h2 class="heading">${data[11].name}</h2>
            <p class="subhead">${data[11].artist.name}</p>
        </div>
        <img class="grid" src="${data[11].images.thumbnail}" alt="${data[11].name}, author ${data[11].artist.name}">
    
 `;
    five.innerHTML = `
        <div class="image_text">
            <h2 class="heading">${data[1].name}</h2>
            <p class="subhead">${data[1].artist.name}</p>
        </div>
        <img class="grid" src="${data[1].images.thumbnail}" alt="${data[1].name}, author ${data[1].artist.name}">
    
`;
    six.innerHTML = ` 
        <div class="image_text">
            <h2 class="heading">${data[5].name}</h2>
            <p class="subhead">${data[5].artist.name}</p>
        </div>
        <img class="grid" src="${data[5].images.thumbnail}" alt="${data[5].name}, author ${data[5].artist.name}">
  `;
    seven.innerHTML = `
        <div class="image_text">
            <h2 class="heading">${data[9].name}</h2>
            <p class="subhead">${data[9].artist.name}</p>
        </div>
        <img class="grid" src="${data[9].images.thumbnail}" alt="${data[9].name}, author ${data[9].artist.name}">
 `;
    eight.innerHTML = `
        <div class="image_text">
            <h2 class="heading">${data[12].name}</h2>
            <p class="subhead">${data[12].artist.name}</p>
        </div>
        <img class="grid" src="${data[12].images.thumbnail}" alt="${data[12].name}, author ${data[12].artist.name}">
      
  `;
    nine.innerHTML = `
        <div class="image_text">
            <h2 class="heading">${data[2].name}</h2>
            <p class="subhead">${data[2].artist.name}</p>
        </div>
        <img class="grid" src="${data[2].images.thumbnail}" alt="${data[2].name}, author ${data[2].artist.name}">
    
 `;
    ten.innerHTML = `
        <div class="image_text">
            <h2 class="heading">${data[6].name}</h2>
            <p class="subhead">${data[6].artist.name}</p>
        </div>
        <img class="grid" src="${data[6].images.thumbnail}" alt="${data[6].name}, author ${data[6].artist.name}">
    
`;
    eleven.innerHTML = `
        <div class="image_text">
            <h2 class="heading">${data[13].name}</h2>
            <p class="subhead">${data[13].artist.name}</p>
        </div>
            <img class="grid" src="${data[13].images.thumbnail}" alt="${data[13].name}, author ${data[13].artist.name}">
   
 `;
    twelve.innerHTML = ` 
        <div class="image_text">
            <h2 class="heading">${data[3].name}</h2>
            <p class="subhead">${data[3].artist.name}</p>
        </div>
        <img class="grid" src="${data[3].images.thumbnail}" alt="${data[3].name}, author ${data[3].artist.name}">
`;
    thirteen.innerHTML = `
        <div class="image_text">
            <h2 class="heading">${data[7].name}</h2>
            <p class="subhead">${data[7].artist.name}</p>
        </div>
        <img class="grid" src="${data[7].images.thumbnail}" alt="${data[7].name}, author ${data[7].artist.name}">
    
`;
    fourteen.innerHTML = `
        <div class="image_text">
            <h2 class="heading">${data[10].name}</h2>
            <p class="subhead">${data[10].artist.name}</p>
        </div>
        <img class="grid" src="${data[10].images.thumbnail}" alt="${data[10].name}, author ${data[10].artist.name}">
    
`;
    fifteen.innerHTML = `
        <div class="image_text">
            <h2 class="heading">${data[14].name}</h2>
            <p class="subhead">${data[14].artist.name}</p>
        </div>
        <img class="grid" src="${data[14].images.thumbnail}" alt="${data[14].name}, author ${data[14].artist.name}">
    
`;
  });
