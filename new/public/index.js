
const div = document.createElement('div');
fetch("./dishes.json")
.then((response)=>response.json())
.then((data)=>data.forEach(item => {
   
    const card = document.createElement("div")
    card.classList.add('crad-props')

    const image = document.createElement('img')
    image.src = item.image;
    card.appendChild(image)

    const para=document.createElement('span')
    para.textContent= item.name;
    card.appendChild(para)

    const para2 = document.createElement('p')
    para2.textContent = item.description;
    card.appendChild(para2);

    // div.appendChild(card)
    document.querySelector('#dish-para').appendChild(card)
}));



const card = document.createElement("div")
