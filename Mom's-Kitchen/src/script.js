const input = document.querySelector('#input-dish')
const search = document.querySelector('#search-button')

search.addEventListener('click',(e)=>{
  var value = input.value.toLowerCase();
  fetch('./dishes.json')
  .then(response=>response.json())
  .then(data=> {
    const filterData = data.filter(dish => dish.name.toLowerCase() === value.toLowerCase())
    console.log(filterData)
    if(filterData){ const dishesdiv = document.querySelector('.dishes')
      dishesdiv.classList.remove('card')
      dishesdiv.innerHTML = '';
      const result = document.createElement('div')
      result.classList.add('farzi')
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

     const rating = document.createElement('div')
     rating.innerText=`Rating: ${filterData[0].rating}`;
     rating.classList.add('card-rating')
     result.appendChild(rating)
  
     document.querySelector('.dishes').appendChild(result)
}
   else {
const empty=document.querySelector('.farzi')
console.log(empty)
   }

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
       price.innerText = `Price : ${dish.price}`;
       card.appendChild(price); 

       const rating = document.createElement('div')
       rating.innerText=`Rating: ${dish.rating}`;
       rating.classList.add('card-rating')
       card.appendChild(rating)

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
        setTimeout(()=>{
            var span = document.createElement('div')
            span.classList.add('new-span')
            console.log(span)
            span.innerHTML = `! Please Enter A Valid Number`
            const phone = document.querySelector('#Phone-div')
            phone.appendChild(span)
        },1000) 
        
    }
  }   
})