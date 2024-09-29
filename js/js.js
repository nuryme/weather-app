const weatherData = [
    {
        area: "New York",
        temperature: 75, // in Fahrenheit
        condition: "Sunny",
        src: 'https://img.icons8.com/?size=100&id=CTt0KHBuppnA&format=png&color=000000',
        humidity: 60, // in percentage
        windSpeed: 10 // in mph
    },
    {
        area: "Los Angeles",
        temperature: 80,
        condition: "Cloudy",
        src: 'https://img.icons8.com/?size=100&id=JIexMBJppAj8&format=png&color=000000',
        humidity: 50,
        windSpeed: 7
    },
    {
        area: "Chicago",
        temperature: 68,
        condition: "Rainy",
        src: 'https://img.icons8.com/?size=100&id=Ct0cFMZgoFWp&format=png&color=000000',
        humidity: 70,
        windSpeed: 12
    },
    {
        area: "Miami",
        temperature: 85,
        condition: "Sunny",
        src: 'https://img.icons8.com/?size=100&id=CTt0KHBuppnA&format=png&color=000000',
        humidity: 80,
        windSpeed: 15
    },
    {
        area: "Dallas",
        temperature: 90,
        condition: "Partly Cloudy",
        src: 'https://img.icons8.com/?size=100&id=-AvRr-VeLegD&format=png&color=000000',
        humidity: 40,
        windSpeed: 5
    },
    {
        area: "Seattle",
        temperature: 60,
        condition: "Rainy",
        src: 'https://img.icons8.com/?size=100&id=Ct0cFMZgoFWp&format=png&color=000000',
        humidity: 85,
        windSpeed: 8
    }
];

document.getElementById('search-btn').addEventListener('click', function() {
    const inputValue = document.getElementById('input-field').value.toLowerCase();
    const contentContainer = document.getElementById('content-container');
    for(const data of weatherData) {
        const dataName = data.area.toLowerCase();
        if(inputValue === dataName) {
            const div = document.createElement('div');
            contentContainer.innerHTML = `
                <img src="${data.src}" alt="">
                <h2 class="text-2xl text-white font-bold capitalize text-center mt-4">${data.condition} </h2>
                <h1 class="text-6xl font-bold text-white text-center mt-8">${data.temperature}<sup>o</sup>F</h1>
                <h1 class="text-4xl text-white font-medium capitalize text-center mt-4">${data.area}</h1>
                <p class="text-center">New York,Los Angeles, Chicago, Miami,Dallas, Seattle</p>
                <div class="flex items-center justify-between w-full absolute bottom-0 p-6">
                    <div class="flex items-center gap-2">
                        <img src="https://img.icons8.com/?size=100&id=18585&format=png&color=000000" alt=""
                        class="w-12">
                        <div>
                            <h2 class="text-2xl text-white font-medium capitalize text-center">${data.humidity}</h2>
                            <h2 class="text-xl text-white font-normal capitalize text-center">humidity</h2>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <img src="https://img.icons8.com/?size=100&id=NVDH376Ybnwv&format=png&color=000000" alt="" class="w-12">
                        <div>
                            <h2 class="text-2xl text-white font-medium capitalize text-center">${data.windSpeed} km/h</h2>
                            <h2 class="text-xl text-white font-normal capitalize text-center">wind speed</h2>
                        </div>
                    </div>
                </div>
            `
            // contentContainer.append(div)
        }
    }
    document.getElementById('input-field').value = ''
})