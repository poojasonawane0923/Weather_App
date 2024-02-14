async function fetchWeatherData(cityName)
{
	let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=d42d6485b91d83ba7031f5b5d5dad931`
const response= await fetch(url)
const data= await response.json();
console.log(data)
}
// demo()
function fetchcity(){
	let cityName=document.getElementById("city_name");
	if(cityName.value===""){
		alert("enter a city name");
	}
	else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}
	}