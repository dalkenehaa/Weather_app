// const url = "https://national-weather-service.p.rapidapi.com/zones/%7Btype%7D/%7BzoneId%7D/forecast";
// const options = {
// 	method: "GET",
// 	headers: {
// 		"X-RapidAPI-Key": "9c6a9fb9c7mshd62bf703490fa3fp1b1151jsnbfff2a3919ad",
// 		"X-RapidAPI-Host": "national-weather-service.p.rapidapi.com"
// 	}
// };

// try {
// 	const response = async function fetch(url, options)
// 	const result = await response.text()
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

const url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=";
const options = {
    method: "GET",
    headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "763c810bdfmshb9f4669b80c3925p18d818jsn3db5be365864",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
    }
};

const getWeather = (city)=>{
    cityName.innerHTML =city
fetch(url+city, options)
    .then(response => response.json())
    .then((response) => {


        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML= response.humidity
        humidity2.innerHTML= response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}
 submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
 })
 getWeather("Delhi")




// cloud_pct = response.cloud_pct
// temp = response.temp
// feels_like = response.feels_like
// humidity = response.humidity
// min_temp = response.min_temp
// max_temp = response.max_temp
// wind_speed = response.wind_speed
// wind_degrees = response.wind_degrees
// sunrise = response.sunrise
// sunset = response.sunset
