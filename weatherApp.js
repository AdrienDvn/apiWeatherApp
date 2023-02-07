let city = "Tokyo";

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
function getTemperature(city) {

const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=YOURAPIHERE&units=metric'

  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'json';
  request.send();

  request.onload = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
      if(request.status === 200) {
        let result = request.response;
        console.log(result);
        let temp =result.main.temp;
        let city = result.name;
        console.log(city, temp);
        document.querySelector('#temperature_label').textContent = temp
        document.querySelector('#ville').textContent = city



      }

      }
      else{
        alert("An error has occured, please come back later.");
      }
    }
  }
  getTemperature(city);

  //get a new city
  let btn = document.getElementById('changer')
  btn.addEventListener('click', () => {
  console.log('click detected');
  let choosenCity = prompt("Type another city here :)")
  console.log(choosenCity);
  getTemperature(choosenCity);
  // document.getElementById("changer").innerHTML = "Hello World";
})


// let updatedValue = setInterval(getPrice, 5000)
// console.log(updatedValue);


// console.log(getLocation());
// let updatedValue = setInterval(getPrice, 5000)
// console.log(updatedValue);
