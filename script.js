const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "69b5c25eecmsh72d9f07fc3dfc60p148098jsn8c6634af6304",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city)=>{
    cityname.innerHTML=city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
  
      cloud_pct.innerHTML = data.cloud_pct;
      temp.innerHTML = data.temp;
      feels_like.innerHTML = data.feels_like;
      humidity.innerHTML = data.humidity;
      min_temp.innerHTML = data.min_temp;
      max_temp.innerHTML = data.max_temp;
      wind_speed.innerHTML = data.wind_speed;
      wind_degrees.innerHTML = data.wind_degrees;
      sunrise.innerHTML = data.sunrise;
      sunset.innerHTML = data.sunset;
    })
    .catch((error) => console.error(error));
  
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value)
})

getWeather("Delhi")


  
  const Weather = (city) => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
  
        document.getElementById('cloud_pct_' + city).innerHTML = data.cloud_pct;
        document.getElementById('temp_' + city).innerHTML = data.temp;
        document.getElementById('feels_like_' + city).innerHTML = data.feels_like;
        document.getElementById('humidity_' + city).innerHTML = data.humidity;
        document.getElementById('min_temp_' + city).innerHTML = data.min_temp;
        document.getElementById('max_temp_' + city).innerHTML = data.max_temp;
        document.getElementById('wind_speed_' + city).innerHTML = data.wind_speed;
        document.getElementById('wind_degrees_' + city).innerHTML = data.wind_degrees;
        document.getElementById('sunrise_' + city).innerHTML = data.sunrise;
        document.getElementById('sunset_' + city).innerHTML = data.sunset;
      })
      .catch((error) => console.error(error));
  };
  
  const cities = ["Shanghai", "Boston", "Lucknow", "Kolkata"];
  cities.forEach(city => Weather(city));
  
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value;
    Weather(city);
  });
  