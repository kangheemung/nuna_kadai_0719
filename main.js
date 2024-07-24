
    const API_KEY = "3c13cc157319649e269e65600cd04117";
    let city = "Seoul";
    const catnum = 200;
    const lang = "kr"; // 언어 설정 추가
    const url = new URL(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${API_KEY}`);
    const urlcat = new URL(`https://http.cat/${catnum}`);
    const searchTextBox = document.getElementById("search_text_box");
    const searchButton = document.getElementById("search_text_button");
    const outputElement = document.getElementById("output");
    const hamburgers = document.querySelectorAll(".hamburger"); // 複数の要素を取得するためquerySelectorAllを使用// 複数の要素を取得するためquerySelectorAllを使用
    const sidebar = document.querySelector(".sidebar");
    const close = document.getElementById("close");
    const citySelect = document.getElementById("inputGroupSelect03");
    const wether_city = document.getElementById("wether_city");
    const SeoulNowtemp = document.getElementById("SeoulNowtemp");
    const SeoulLowtemp = document.getElementById("SeoulLowtemp");
    const SeoulHightemp= document.getElementById("SeoulHightemp");
    const weather_wind= document.getElementById("weather_wind");
    const weather_img= document.getElementById('weather_img');
    const humidity = document.getElementById("humidity");

    // sidebar要素を取得する
    const head_top = document.querySelector(".head_top");
    citySelect.value = "seoul"; 
    citySelect.addEventListener("change", function() {
      city = this.value.toLowerCase();// 선택한 도시명으로 city 변수 업데이트
        console.log("Selected City:", city); // 선택한 도시명을 확인
        // 여기서 getNews 함수를 호출하여 선택한 도시의 날씨 정보를 가져올 수 있습니다
        url.href = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${API_KEY}`;
    getNews();
    wether_city.innerText = capitalizeFirstLetter(city);
    });
//検索
        const getKeyword = async () => {
            let keyword = searchTextBox.value.trim();
            if (keyword.trim() === "") {
                searchTextBox.placeholder = "Please enter a keyword";
                return;
            }
            outputElement.innerText = keyword;
            searchTextBox.addEventListener("keypress", function(e) {
                if (e.key === "Enter") {
                    getKeyword();
                }
            });
            searchTextBox.value = "";
        };

        searchButton.addEventListener("click", getKeyword);

 // サイドバー
 // 「close」ボタンをクリックした際の処理
 hamburgers.forEach(hamburger => {
    sidebar.style.display = "none";
});

close.addEventListener("click", () => {
    sidebar.style.display = "none";
});
    // ページ上の全てのハンバーガーメニューを非表示にする
hamburgers.forEach(hamburger => {
    hamburger.addEventListener("click", () => {
        const sidebar = document.querySelector(".sidebar");
        if (sidebar.style.display === "none" || sidebar.style.display === "") {
            sidebar.style.display = "block";
        } else {
            sidebar.style.display = "none";
        }
    });
});


//イメージクリックしたらみえるようにする
console.log(url)
        const getNews = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(response);
                console.log (data)
                //set_cloud(data);

// 서울의 현재 기온을 SeoulNowtemp 요소에 출력

const kelvinTemp = `${data.main.temp}`
// Kelvin에서 Celsius로 변환하는 함수
function kelvinToCelsius(kelvin) { //섭씨 온도 계산
    return kelvin - 273.15; // Kelvin 값을 Celsius로 변환
}
const celsiusTemp = kelvinToCelsius(kelvinTemp); // 섭씨로 변환된 온도 값
const Hightemp= kelvinToCelsius(data.main.temp_min);
const celsiusTempMin = kelvinToCelsius(data.main.temp_max);
// Set the weather icon image in SeoulIcon element
const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
weather_img.setAttribute('src', iconUrl);
weather_img.setAttribute('alt', 'Weather Icon');
weather_wind.innerHTML= `풍속은 ${data.wind.speed}m/s`
humidity.innerHTML=`습도${data.main.humidity}%`
//위치
    console.log("Description:", data.weather[0].description);
    console.log("Main:", data.main);
    console.log("iconUrl", iconUrl);
// 이미지Icon 요소에 삽입
// const weather_img = data.weather[0].icon;
 weather_img.innerHTML = `<img src="${iconUrl}" alt="Weather Icon" class="large-icon">`;

// 첫글자 대문자로 바꾸기
//날씨 아이콘
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



    // Remove existing classes to prevent duplication
  //  weatherImgElement.className = '';
    // Add classes based on weather condition

   //   if (weather === 'Clouds') {
   //       weatherImgElement.classList.add('fas', 'fa-cloud-sun');
   //   } else if (weather === 'Thunderstorm') {
   //       weatherImgElement.classList.add('fas', 'fa-bolt');
   //   } else if (weather === 'Drizzle') {
   //       weatherImgElement.classList.add('fas', 'fa-water');
   //   } else if (weather === 'Rain') {
   //       weatherImgElement.classList.add('fas', 'fa-umbrella');
    //  } else if (weather === 'Snow') {
    //      weatherImgElement.classList.add('fas', 'fa-snowflake');
    //  } else if (weather === 'Atmosphere') {
     //     weatherImgElement.classList.add('fas', 'fa-smog');
     // } else {
     //     weatherImgElement.classList.add('fas', 'fa-cloud');
     // }
 // }
wether_city.innerText = data.name;
//Update this line to set the innerText of curent_weather to the weather description

SeoulNowtemp.innerText = `${Math.floor(celsiusTemp)}°C`;
 // data.main.temp로 현재 기온을 가져올 수 있음
SeoulLowtemp.innerText = ` ${Math.floor(celsiusTempMin)} /${Math.floor(Hightemp)}°C`;
console.log("날씨는 ",data["weather"][0]["icon"],"입니다.")
// 자세한 날씨 : weather - description
console.log("날씨는 ",data["weather"][0]["description"],"입니다.")
//  현재 온도 : main - temp
console.log("현재 온도는 ",data["main"]["temp"],"입니다.")
//  체감 온도 : main - feels_like
console.log("하지만 체감 온도는 ",data["main"]["feels_like"],"입니다.")
//  최저 기온 : main - temp_min
console.log("최저 기온은 ",data["main"]["temp_min"],"입니다.")
// 최고 기온 : main - temp_max
console.log("최고 기온은 ",data["main"]["temp_max"],"입니다.")
//  습도 : main - humidity
console.log("습도는 ",data["main"]["humidity"],"입니다.")
//  기압 : main - pressure
console.log("기압은 ",data["main"]["pressure"],"입니다.")
//  풍향 : wind - deg
console.log("풍향은 ",data["wind"]["deg"],"입니다.")
//  풍속 : wind - speed
console.log("풍속은 ",data["wind"]["speed"],"입니다.")
} catch (error) {
    console.error(error.message);
}}
getNews();