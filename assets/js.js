var submitButton = document.getElementById('submit-button');
var firstText = document.getElementById('card1');
var searchVar = document.getElementById('searchCard');
var apiKey= '2c4ad6b204a17feaa8527bcc62401e85';
var inputText = document.getElementById('yourCity');
var searchCardButton= document.getElementById('searchCard');
var sectionID= document.getElementById('sectionContainer');

var city = JSON.parse(localStorage.getItem("city"));
if (city=== null){
    city = []
    localStorage.setItem("city", JSON.stringify(city))
}

let enteredCity= inputText.value;

function getData(){
    let enteredCity= inputText.value;
    console.log(enteredCity);
    if (enteredCity){
        city.push(enteredCity);
        localStorage.setItem("city", JSON.stringify(city));
        var requestUrl= 'https://api.openweathermap.org/data/2.5/forecast?q=' + enteredCity + '&appid=' + apiKey;
        fetch(requestUrl)
            .then(function(response){
                return response.json();
            })
            .then(function(data){
                var iterables = ['0']
                for (let value of iterables){
                    console.log(data)
                    console.log(data.list[value]);
                    firstText.children[0].innerHTML= data.list[value].dt_txt;
                    firstText.children[1].children[0].src = "https://openweathermap.org/img/wn/" +data.list[value].weather[0].icon+ "@2x.png"
                    firstText.children[1].children[1].innerHTML = data.list[value].main.temp;
                    firstText.children[1].children[2].innerHTML = data.list[value].wind.speed + " MPH";
                    firstText.children[1].children[3].innerHTML = data.list[value].main.humidity +" %";
                }
               
                $('#sectionContainer').empty();
                var iterables = ['8','16','24','32','39']
                for (let value of iterables){
                    const newDiv1 = document.createElement("div");
                    newDiv1.className= "card bg-light mb-3"
                    newDiv1.style= "max-width: 18rem;"
                    newDiv1.id="card2";
                    sectionID.append(newDiv1);
                    const newDiv2 = document.createElement("div");
                    newDiv2.innerHTML= data.list[value].dt_txt;
                    sectionID.append(newDiv2);
                    const newDiv3 = document.createElement("div")
                    sectionID.append(newDiv3);
                    const newimg = document.createElement("img")
                    newimg.src="https://openweathermap.org/img/wn/" +data.list[value].weather[0].icon+ "@2x.png"
                    newDiv3.appendChild(newimg);
                    const para1 = document.createElement("p");
                    para1.className="temp"
                    para1.innerHTML="Temp:"+ data.list[value].main.temp;
                    newDiv3.appendChild(para1);
                    const para2 = document.createElement("p");
                    para2.className="wind"
                    para2.innerHTML="Wind:" + data.list[value].wind.speed + " MPH";
                    newDiv3.appendChild(para2);
                    const para3 = document.createElement("p");
                    para3.className="humidity"
                    para3.innerHTML="Humidity:" + data.list[value].main.humidity +" %";
                    newDiv3.appendChild(para3);

                }
                // function searchHistoryCards(){
                //     var h3tag= document.querySelector("h3")
                //     const newDiv1 = document.createElement("div");
                //     newDiv1.class= "d-flex position-relative";
                //     h3tag.append(newDiv1);
                //     const newDiv2 = document.createElement("div");
                //     const newH5= document.createElement("h5");
                //     newH5.class= "mt-0";
                //     newH5.id="searchCard";
                //     newH5.text= enteredCity.value;
                //     newDiv2.append(newH5);
                //     var a = document.createElement('a');
                //     a.setAttribute('href','#yourCity');
                    
                // }
                })
            
}}

// function searchHistoryCards(){
//     var h3tag= document.querySelector("h3")
//     const newDiv1 = document.createElement("div");
//     newDiv1.class= "d-flex position-relative";
//     h3tag.append(newDiv1);
//     const newDiv2 = document.createElement("div");
//     const newH5= document.createElement("h5");
//     newH5.class= "mt-0";
//     newH5.id="searchCard";
//     newH5.text=enteredCity;
//     newDiv2.append(newH5);
//     var a = document.createElement('a');
//     a.setAttribute('href','#yourCity');
    
// }


submitButton.addEventListener('click', getData);
searchCardButton.addEventListener('click', getData);

