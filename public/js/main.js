const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("tempVal");
const hide = document.getElementById("hideShow");
const day = document.getElementById("day");
const today_data = document.getElementById("today_data");
let date = new Date();
const TodayDate = date.getDate();
let TodayDay;
switch (date.getDay()) {
  case 0:
    TodayDay = "Sunday";
    break;
  case 1:
    TodayDay = "Monday";
    break;
  case 2:
    TodayDay = "Tuesday";
    break;
  case 3:
    TodayDay = "Wednesday";
    break;
  case 4:
    TodayDay = "Thursday";
    break;
  case 5:
    TodayDay = "Friday";
    break;
  case 6:
    TodayDay = "Saturday";
}
let month;
switch (date.getMonth()) {
  case 0:
    month = "JAN";
    break;
  case 1:
    month = "FEB";
    break;
  case 2:
    month = "MAR";
    break;
  case 3:
    month = "APR";
    break;
  case 4:
    month = "MAY";
    break;
  case 5:
    month = "JUN";
    break;
  case 6:
    month = "JUL";
    break;
  case 7:
    month = "AUG";
    break;
  case 8:
    month = "SEP";
    break;
  case 9:
    month = "OCT";
    break;
  case 10:
    month = "NUM";
    break;
  case 11:
    month = "DEC";
    break;
}
day.innerText=TodayDay;
today_data.innerText=`${TodayDate} ${month}`;
const getInfo = async (e) => {
  e.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = "please write the city name before search";
    hide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b172cc48a1208ac541ad1aa7bcbdb336`;
      const response = await fetch(url);
      //console.log(response)  ;
      const data = await response.json();
     
      city_name.innerText = `${data.name} , ${data.sys.country}`;
      temp.innerText = data.main.temp;
      const mood = data.weather[0].main;
      if (mood == "Clear") {
        temp_status.innerHTML = '<i class="fas fa-sun" ></i>';
      } else if (mood == "Clouds") {
        temp_status.innerHTML =
          '<i class="fas fa-cloud" style="color:blue;"></i>';
      } else if (mood == "Rain") {
        temp_status.innerHTML =
          '<i class="fas fa-rain" style="color:#a40be;"></i>';
      } else {
        temp_status.innerHTML =
          '<i class="fas fa-sun" style="color:#FF0000;"></i>';
      }
      hide.classList.remove("data_hide");
      console.log(data);
      console.log(data.weather[0].main);
    } catch (error) {
      city_name.innerText = "please enter the city name properly";
      hide.classList.add("data_hide");
    }
  }
};
submitBtn.addEventListener("click", getInfo);
