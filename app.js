 // Replace with your actual API key

let searchBtn = document.querySelector(".search-button");


async function fetchData(city){
try {
    const apiKey = '1488061b41878eb765955676e4b9d963';
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    return data;
} catch (error) {
	return "error";
}
}

fetchNecessaryData = (data)=>{
    // Get all the necessary data that needs to be changed
    document.querySelector(".city-name").innerText = data.name;
    document.querySelector(".temperature").innerText = data.main.temp + "°C";
    document.querySelector(".weather-description").innerText = data.weather[0].description;
    document.querySelector(".minTemp").innerText = data.main.temp_min + "°C";
    document.querySelector(".feel-like").innerText = data.main.feels_like + "°C";
    document.querySelector(".max-temp").innerText = data.main.temp_max + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerText = data.wind.speed + " km/h";
    // let feelTemp = data.main.feels_like;
}

function errorHandler() {
    alert("City not found! Please try again.");
}

searchBtn.addEventListener('click', async () => {
    const city = document.querySelector("#city-input").value;
    const data = await fetchData(city);
    if (data === "error") {
        errorHandler();
        return;
    }
    fetchNecessaryData(data);
});