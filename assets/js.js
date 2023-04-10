var submitButton = document.getElementById('submit-button');
var apiKey= '2c4ad6b204a17feaa8527bcc62401e85';
var cityName= 'London';
// var requestUrl= 'api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + apiKey;


function getData() {
    var requestUrl = 'https://api.github.com/orgs/nodejs/repos';
    fetch(requestUrl)
        .then(function (data) {
            console.log("data",data);
        });
}



/*
lnk submit button to event listener to change var cityName
add eventlistener to submit button to execute getData function


*/

submitButton.addEventListener('click', getData);