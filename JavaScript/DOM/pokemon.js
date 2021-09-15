const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

// const newImg = document.createElement("img");

// newImg.src = baseURL+"1.png";

// container.appendChild(newImg);

for(let i=1 ;i<=151;i++){
    const pokemon = document.createElement("div");
    const label =  document.createElement("span");
    label.innerText = `No. ${i}`;
    const newImg = document.createElement("img");
    newImg.src = baseURL+i+".png";
    container.appendChild(pokemon);
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
}
