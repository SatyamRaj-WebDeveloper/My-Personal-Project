const input = document.querySelector('#input-dish')
const search = document.querySelector('#search-button')
// const value = input.value;
search.addEventListener('click',(e)=>{
  var value = input.value.toLowerCase();
  // console.log(value)

  fetch('./dishes.json')
  .then(response=>response.json())
  .then(data=> {
    const filterData = data.filter(dish => dish.name.toLowerCase() === value.toLowerCase())
    console.log(filterData)
    const dishesdiv = document.querySelector('.dishes')
    dishesdiv.classList.remove('card')
    dishesdiv.innerHTML = '';
    const result = document.createElement('div')
    result.classList.add('card')


    const image =document.createElement('img');
    image.src = filterData[0].image;
    result.appendChild(image);

    const name = document.createElement('h2');
    name.innerText = filterData[0].name;
    result.appendChild(name);

    const description = document.createElement('p');
    description.innerText = filterData[0].description;
    result.appendChild(description);
    
   const price = document.createElement('span');
   price.innerText = filterData[0].price;
   result.appendChild(price); 

   document.querySelector('.dishes').appendChild(result)

  }   
  )
}
)





try {
    fetch('./dishes.json')
    .then(response=>response.json())
    .then(data => {document.querySelector('.dishes');
    data.forEach(dish => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image =document.createElement('img');
        image.src = dish.image;
        card.appendChild(image);

        const name = document.createElement('h2');
        name.innerText = dish.name;
        card.appendChild(name);

        const description = document.createElement('p');
        description.innerText = dish.description;
        card.appendChild(description);
        
       const price = document.createElement('span');
       price.innerText = dish.price;
       card.appendChild(price); 

    document.querySelector('.dishes').appendChild(card)
    });
       }); 
    

} catch (error) {
    document.querySelector('.dishes').innerHTML = "An Error was found during loading the contents";
    console.log("an error was found in loading the content")
}





const num = document.querySelector('#Mobile');

const enteredNum = num.addEventListener('keydown',(e)=>{
   
  if(e.key === 'Enter'){
    const value = num.value;
    if(isNaN(value)||(value.length)>10 ){
        const span = document.createElement('div')
        span.innerHTML = `!Please Enter A Valid Number`
        const phone = document.querySelector('#Phone-div')
        phone.appendChild(span)
       
    }
  }   
})