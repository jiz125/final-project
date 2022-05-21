let returnData;
let button;
let input;
let url;
let result;
let one = document.querySelector("#image1");
let two = document.querySelector("#image2");
let three = document.querySelector("#image3");
let four = document.querySelector("#image4");
let oneText = document.querySelector("#text1");
let twoText = document.querySelector("#text2");
let threeText = document.querySelector("#text3");
let fourText = document.querySelector("#text4");
button = document.getElementById('searchBar');
let arrResults = [];
let arrText = [];

button.addEventListener('click', function () {
  //   input = document.getElementById('typingBar').value;
  //   console.log(input);
  arrResults = [];
  arrText = [];
  searchData();
})
button.addEventListener('mouseover', function (event) {
  //   input = document.getElementById('typingBar').value;
  //   console.log(input);
  event.target.style.color = "orange";
})

button.addEventListener('mouseout', function (event) {
  //   input = document.getElementById('typingBar').value;
  //   console.log(input);
  event.target.style.color = "white";
})

function searchData() {
  url = `https://api.unsplash.com/search/photos?page=1&per_page=30&query=window&client_id=8dkORdw6VplzVIPOG7J1nNjfUeRvg7sZgkvNp1qGuKs`;
  console.log(url)
  fetch(url)
    .then(response => {
      return response.json()
    })
    .then(jsonData => {
      console.log(typeof (jsonData.results));
      for (i = 0; i < 29; i++) { //randomly fetch window images and display on the screen 
        results = jsonData.results[i].urls.regular;
        text = jsonData.results[i].alt_description;
        console.log(results);
        arrResults.push(results);
        arrText.push(text);
      }
      let randA = Math.floor(Math.random() * 28);
      one.src = arrResults[randA];
      oneText.innerHTML = arrText[randA];
      let randB = Math.floor(Math.random() * 28);
      two.src = arrResults[randB];
      twoText.innerHTML = arrText[randB];
      let randC = Math.floor(Math.random() * 28);
      three.src = arrResults[randC];
      threeText.innerHTML = arrText[randC];
      let randD = Math.floor(Math.random() * 28);
      four.src = arrResults[randD];
      fourText.innerHTML = arrText[randD];
    })
    .catch(err => {
      console.log("there was an error");
      document.getElementById("resultsList").innerHTML = "This is not a city, Try again!";
    });
}





image1.addEventListener("mouseenter", function (event) {
  event.target.style.opacity = 0;
  text1.style.opacity = 100;
})
image1.addEventListener("mouseleave", function (event) {
  event.target.style.opacity = 100;
  text1.style.opacity = 0;
})



image2.addEventListener("mouseenter", function (event) {
  event.target.style.opacity = 0;
  text2.style.opacity = 100;
})
image2.addEventListener("mouseleave", function (event) {
  event.target.style.opacity = 100;
  text2.style.opacity = 0;
})

image3.addEventListener("mouseenter", function (event) {
  event.target.style.opacity = 0;
  text3.style.opacity = 100;
})
image3.addEventListener("mouseleave", function (event) {
  event.target.style.opacity = 100;
  text3.style.opacity = 0;
})


image4.addEventListener("mouseenter", function (event) {
  event.target.style.opacity = 0;
  text4.style.opacity = 100;
})

image4.addEventListener("mouseleave", function (event) {
  event.target.style.opacity = 100;
  text4.style.opacity = 0;
})



