const data={
    "fechaActual": "2022-01-01",
    "eventos": [
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas7.jpg",
        "name":"Collectivities Party",
        "date":"2021-12-12",
        "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":5
      },
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas2.jpg",
        "name":"Korean style",
        "date":"2021-08-12",
        "description":"Enjoy the best Korean dishes, with international chefs and awesome events.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":10
      },
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo5.jpg",
        "name":"Jurassic Park",
        "date":"2021-11-02",
        "description":"Let's go meet the biggest dinosaurs in the paleontology museum.",
        "category":"Museum",
        "place":"Field",
        "capacity":82000,
        "assistance":65892,
        "price":15
      },
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo1.jpg",
        "name":"Parisian Museum",
        "date":"2022-11-02",
        "description":"A unique tour in the city of lights, get to know one of the most iconic places.",
        "category":"Museum",
        "place":"Paris",
        "capacity":8200,
        "estimate":8200,
        "price":3500
       },
       {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces2.jpg",
        "name":"Comicon",
        "date":"2021-02-12",
        "description":"For comic lovers, all your favourite characters gathered in one place.",
        "category":"Costume Party",
        "place":"Room C",
        "capacity":120000,
        "assistance":110000,
        "price":54
       },
       {
          "image":"https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces1.jpg",
          "name":"Halloween Night",
          "date":"2022-02-12",
          "description":"Come with your scariest costume and win incredible prizes.",
          "category":"Costume Party",
          "place":"Room C",
          "capacity":12000,
          "estimate":9000,
          "price":12
      },
      {
          "image":"https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica1.jpg",
          "name":"Metallica in concert",
          "date":"2022-01-22",
          "description":"The only concert of the most emblematic band in the world.",
          "category":"Music Concert",
          "place":"Room A"
          ,"capacity":138000,
          "estimate":138000,
          "price":150
      },
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica2.jpg",
        "name":"Electronic Fest",
        "date":"2021-01-22",
        "description":"The best national and international DJs gathered in one place.",
        "category":"Music Concert",
        "place":"Room A",
        "capacity":138000,
        "assistance":110300,
        "price":250
        },
      {
          "image":"https://amazingeventsapi.herokuapp.com/api/img/Maraton3.jpg",
          "name":"10K for life",
          "date":"2021-03-01",
          "description":"Come and exercise, improve your health and lifestyle.",
          "category":"Race",
          "place":"Campo de Futb????l",
          "capacity":30000,
          "assistance":25698,
          "price":3
      },
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Maraton1.jpg",
        "name":"15K NY",
        "date":"2021-03-01",
        "description":"We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
        "category":"Race",
        "place":"New York",
        "capacity":3000000,
        "assistance":2569800,
        "price":3
        },
      {
          "image":"https://amazingeventsapi.herokuapp.com/api/img/Libros7.jpg",
          "name":"School's book fair",
          "date":"2022-10-15",
          "description":"Bring your unused school book and take the one you need.",
          "category":"Book Exchange",
          "place":"Room D1",
          "capacity":150000,
          "estimate":123286,
          "price":1
      },
      {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Libros3.jpg",
        "name":"Just for your kitchen",
        "date":"2021-11-09",
        "description":"If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
        "category":"Book Exchange",
        "place":"Room D6",
        "capacity":130000,
        "assistance":90000,
        "price":100
       },
       {
        "image":"https://amazingeventsapi.herokuapp.com/api/img/Cine3.jpg",
        "name":"Batman",
        "date":"2021-3-11",
        "description":"Come see Batman fight crime in Gotham City.",
        "category":"Cinema",
        "place":"Room D1",
        "capacity":11000,
        "assistance":9300,
        "price":225
      },
      {
          "image":"https://amazingeventsapi.herokuapp.com/api/img/Cine7.jpg",
          "name":"Avengers",
          "date":"2022-10-15",
          "description":"Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
          "category":"Cinema",
          "place":"Room D1",
          "capacity":9000,
          "estimate":9000,
          "price":250
      }
    ]
  }

//Date.parse
/* const date = data.fechaActual;
const dateToParse = Date.parse(date);
console.log("date:", date);
console.log("dateToParse:", dateToParse);  */

//Date convertion:
//1 Date to convert
//2 Split
//3 Convert to Date 
//4 Convert to timestamp gettime
const dateToCompare = data.fechaActual;
console.log(dateToCompare);
const dateSplit = dateToCompare.split("-");
console.log(dateSplit);
const dateToCompareParsed = new Date(dateSplit[0], dateSplit[1]-1, dateSplit[2]);
console.log(dateToCompareParsed);
const dateTimeStamp = dateToCompareParsed.getTime();
console.log(dateTimeStamp);

function dateConvert(event) {
  let dateEventToCompare; 
  let dateEventSplit; 
  let dateEventParsed;
  let dateEventTimeStamp; 
  dateEventToCompare = data.eventos[event].date;
  dateEventSplit = dateEventToCompare.split("-");
  dateEventParsed = new Date(dateEventSplit[0],dateEventSplit[1]-1,dateEventSplit[2]);
  dateEventTimeStamp = dateEventParsed.getTime();
  return dateEventTimeStamp;
}

function setCards() {
    let card = ``;
    const settingCard = document.getElementById("cards");
    for (let i=0; i < data.eventos.length; i++) {
      if (dateTimeStamp < dateConvert(i)) {
        card += `
          <div class="card" id="${data.eventos[i].category.replace(" ","-").toLocaleLowerCase()}" style="width: 18rem;">
            <div class="image-card-container">
              <img src="${data.eventos[i].image}" class="card-img-top" alt="food fair">
              </div>
              <div class="card-body">
                <h5 class="card-title">${data.eventos[i].name}</h5>
                <h6 class="category-title" style="display:none;">${data.eventos[i].category.replace(" ","-").toLocaleLowerCase()}</h6>
                <p class="card-text" style="overflow:auto; height:8vh">${data.eventos[i].description}</p>
              </div>
              <div class="bottom-card"> 
                <span>Price: $${data.eventos[i].price}</span>
                <a href="./pages/details.html" class="btn btn-primary">Go somewhere</a>
              </div>
          </div>
        `;
        }
    } 
    settingCard.innerHTML = card;
}
setCards();

//Set categories------------------------------------------------------------------------------------------------
//Array without repeated categories
let arrayCategories = data.eventos.map(ev => ev.category)
const arrayCatNoRep = [... new Set(arrayCategories)];
console.log(arrayCatNoRep); 

//Render categories
const categoriesContainer = document.getElementById("categories-container")
function setCategories() {
  arrayCatNoRep.forEach(cat => {
    const divCheckbox = document.createElement("div")
    divCheckbox.classList.add("checkbox-container")
    divCheckbox.innerHTML = `
    <input type="checkbox" class="input-categories" id="${cat.replace(" ","-").toLocaleLowerCase()}" name="${cat.replace(" ","-").toLocaleLowerCase()}" value="${cat.replace(" ","-").toLocaleLowerCase()}">
    <label for="${cat.replace(" ","-").toLocaleLowerCase()}">${cat}</label>
    `;
    categoriesContainer.appendChild(divCheckbox);
  })
} 
setCategories();

//Search bar filter------------------------------------------------------------------------------------------------
const inputSearchEvent = document.getElementById("search-event");
const cardsContainer = document.getElementById("cards");
const eventCards = document.querySelectorAll(".card");
inputSearchEvent.addEventListener("keyup", (event) => {
  eventCards.forEach((eventCard) => {
    eventCard.textContent.toLowerCase().includes(event.target.value.toLowerCase())
    ? eventCard.classList.remove("hidden")
    : eventCard.classList.add("hidden")
  })
  
})

//Checkbox Filter----------------------------------------------------------------------
const checkboxesForm = document.getElementById("categories-container");
const cardCategories = document.getElementsByClassName("category-title");

checkboxesForm.addEventListener("change", () => {
  
  const checkboxesCat = document.querySelectorAll(".input-categories");
  let checkboxesCheckedValue = [];
  
  checkboxesCat.forEach((checkbox) => {
    if (checkbox.checked) 
    checkboxesCheckedValue.push(checkbox.value); 
  })

  console.log(checkboxesCheckedValue);  

for(let i=0; i<cardCategories.length; i++) {
  if (checkboxesCheckedValue.includes(cardCategories[i].textContent)){
    cardCategories[i].parentElement.parentElement.classList.remove("hidden");
    //console.log("funciono");
  }
  else if(!checkboxesCheckedValue.includes(cardCategories[i].textContent)){  
    cardCategories[i].parentElement.parentElement.classList.add("hidden");
    //console.log("no funciono");
  } 
} 

if(checkboxesCheckedValue.length === 0){
  setCards();
}

})
