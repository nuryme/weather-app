const apiKey = '76eebfdde4edf74f3273cb8b765a3f72';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=matric&q=';
const search = document.getElementById('search-btn');
const inputField = document.getElementById('input-field');
const weatherImg = document.getElementById('Weather-img');
const contentContainer = document.getElementById('content-container')
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404) {
        alert('Invalid City Name');
        contentContainer.classList.add('hidden')
        return;
    }
    else {
        let data = await response.json();
        console.log(data);
        document.getElementById('city').innerHTML = data.name;
        document.getElementById('temp').innerHTML = Math.round(data.main.temp) + `<sup>o</sup>C`;
        document.getElementById('humidity').innerHTML = data.main.humidity + ' %';
        document.getElementById('windSpeed').innerHTML = data.wind.speed + ' km/h';
        document.getElementById('condition').innerHTML = data.weather[0].main;

        if (data.weather[0].main === "Clouds") {
            weatherImg.src = 'https://img.icons8.com/?size=100&id=JIexMBJppAj8&format=png&color=000000'
        }
        else if (data.weather[0].main === "Clear") {
            weatherImg.src = 'https://img.icons8.com/?size=100&id=CTt0KHBuppnA&format=png&color=000000'
        }
        else if (data.weather[0].main === "Haze") {
            weatherImg.src = 'https://img.icons8.com/?size=100&id=YMbVUNVCGRqg&format=png&color=000000'
        }
        else if (data.weather[0].main === "Rain") {
            weatherImg.src = 'https://img.icons8.com/?size=100&id=Ct0cFMZgoFWp&format=png&color=000000'
        }
        else if (data.weather[0].main === "Drizzle") {
            weatherImg.src = 'https://img.icons8.com/?size=100&id=81739&format=png&color=000000'
        }
        else if (data.weather[0].main === "Mist") {
            weatherImg.src = 'https://img.icons8.com/?size=100&id=5JFKFoWQfT74&format=png&color=000000';
        }
        contentContainer.classList.remove('hidden')
    }
}
search.addEventListener('click', function () {
    checkWeather(inputField.value);
    document.getElementById('input-field').value = '';
})