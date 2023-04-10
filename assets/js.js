var submitButton = document.getElementById('submit-button');
var firstText = document.getElementById('card1');
// var tempText = document.getElementById('submit-button');
// var speedText = document.getElementById('submit-button');
// var humidityText = document.getElementById('submit-button');
var searchVar = document.getElementById('searchCard');
var inputButton = document.getElementById('yourCity');
var apiKey= '2c4ad6b204a17feaa8527bcc62401e85';
var cityName= 'Sacramento';
var requestUrl= 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + apiKey;

function getData(){
    fetch(requestUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            var iterables = ['0','8','16','24','32','39']
            for (let value of iterables){
                firstText.children[0].innerHTML= data.list[value].dt_txt;
                firstText.children[1].children[0].src = "https://openweathermap.org/img/wn/" +data.list[value].weather[0].icon+ "@2x.png"
                firstText.children[1].children[1].innerHTML = data.list[value].main.temp;
                firstText.children[1].children[2].innerHTML = data.list[value].wind.speed + " MPH";
                firstText.children[1].children[3].innerHTML = data.list[value].main.humidity +" %";
            }
        })
    
    localStorage.setItem("location", cityName);
    searchVar.innerText= cityName;
}

console.log(firstText.children[1].children[0].src)



submitButton.addEventListener('click', getData);