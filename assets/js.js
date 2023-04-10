var submitButton = document.getElementById('submit-button');
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
            var iterables = ['0','8','16','24','32']
            for (let value of iterables){
                console.log(data.list[value].dt_txt);
                console.log(data.list[value].main.temp);
                console.log(data.list[value].wind.speed + " MPH");
                console.log(data.list[value].main.humidity +" %");
            }
        })
}




submitButton.addEventListener('click', getData);