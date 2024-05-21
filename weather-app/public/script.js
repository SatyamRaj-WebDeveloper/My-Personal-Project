

const APIkey = '7cf8eed5ca96038479971e6388039c50';
const url = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';
const search = document.querySelector('#search')
search.addEventListener('click',()=>{
  const input =document.querySelector('#input');
const cityname = input.value
 
  fetch(url + `&q=${cityname}`+ `&appid=${APIkey}`)
  .then(response => response.json())
    .then(data => {
      if(!cityname)
        {
          const display = document.querySelector('#display')
          display.style.display = 'block';
           display.classList.add('empty-div');
          display.textContent = `Please Enter a CityName to Search`
         
        }else{
          weatherData(data)  
}
})
})

input.addEventListener('keydown',(e)=>{
  if(e.key==="Backspace"){
    const display = document.querySelector('#display')
    display.textContent = ' ';
  }else if(e.key === "Enter"){
    const input =document.querySelector('#input');
const cityname = input.value
    fetch(url + `&q=${cityname}`+ `&appid=${APIkey}`)
  .then(response => response.json())
    .then(data =>{
     weatherData(data)
    })
  }

})

let typingeffect = new Typed (".weather",{
  strings : ["Weather App", "Satyam Raj"],
  loop : true,
  typeSpeed : 150,
  backSpeed : 100,
  backDelay : 1500
})




function weatherData(data){
  
  const display = document.querySelector('#display')
  display.style.display = 'block';
  display.classList.add('display-div');

  const name= document.createElement("p")
  name.textContent = `Name : ${data.name}`;
  

  const country= document.createElement("p")
  country.textContent = `Country : ${data.sys.country}`;
  

  const desp = document.createElement("p")
  desp.textContent = data.weather[0].main;
  

  const temp =document.createElement('p')
  temp.appendChild(desp)
  temp.innerHTML =`Temprature : ${data.main.temp} , ${desp.textContent}`;
  

  const humid =document.createElement('p')
  humid.innerHTML =`Humidity : ${data.main.humidity}`;
  
  
  const description  =document.createElement('p')
  description.innerHTML =`Description : ${data.weather[0].description}`;
  

  const wind  =document.createElement('p')
  wind.innerHTML =`Wind_speed : ${data.wind.speed}`;
  

  const array = [name,country,temp,humid,description]
  array.forEach(item =>{
    display.appendChild(item)})
}