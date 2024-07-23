
    const API_KEY = "3c13cc157319649e269e65600cd04117";
    let city = "seoul";
    const catnum = 200;
    const lang = "kr"; // 언어 설정 추가
    const url = new URL(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang={lang}&appid=${API_KEY}`);
    const urlcat = new URL(`https://http.cat/${catnum}`);
    const searchTextBox = document.getElementById("search_text_box");
    const searchButton = document.getElementById("search_text_button");
    const outputElement = document.getElementById("output");
    const hamburgers = document.querySelectorAll(".hamburger"); // 複数の要素を取得するためquerySelectorAllを使用// 複数の要素を取得するためquerySelectorAllを使用
    const sidebar = document.querySelector(".sidebar");
    const close = document.getElementById("close");
    const citySelect = document.getElementById("inputGroupSelect03");
    const curent_weather = document.getElementById("curent_weather");

    const SeoulLowtemp = document.getElementById("SeoulLowtemp");
    const SeoulHightemp= document.getElementById("SeoulHightemp");
    const weathericonUrl= document.getElementById("weather_img");

    // sidebar要素を取得する
    const head_top = document.querySelector(".head_top");
    citySelect.addEventListener("change", function() {
      city = this.value.toLowerCase();// 선택한 도시명으로 city 변수 업데이트
        console.log("Selected City:", city); // 선택한 도시명을 확인
        // 여기서 getNews 함수를 호출하여 선택한 도시의 날씨 정보를 가져올 수 있습니다
        url.href = `http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${API_KEY}`;

    getNews();
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
        console.log(data);
        // Make sure set_cloud function is called after getting weather data
        set_cloud(data);

        // Other code...
    } catch (error) {
        console.error(error.message);
    }
};

// 서울의 현재 기온을 SeoulNowtemp 요소에 출력
const SeoulNowtemp = document.querySelector(".SeoulNowtemp");
const kelvinTemp = `${data.main.temp}`
// Kelvin에서 Celsius로 변환하는 함수
function kelvinToCelsius(kelvin) { //섭씨 온도 계산
    return kelvin - 273.15; // Kelvin 값을 Celsius로 변환
}
const celsiusTemp = kelvinToCelsius(kelvinTemp); // 섭씨로 변환된 온도 값
const Hightemp= kelvinToCelsius(data.main.temp_min);
const celsiusTempMin = kelvinToCelsius(data.main.temp_max);
const weatherInfo = data.weather[0];
console.log("Description:", weatherInfo.description);
console.log("Main:", weatherInfo.main);

const iconUrl = '<img src="http://openweathermap.org/img/wn/' + data.weather[0].icon + '.png" alt="' + data.weather[0].description + '"/>';
// 이미지를 SeoulIcon 요소에 삽입

// 첫글자 대문자로 바꾸기

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//날씨 아이콘
function set_cloud(data) {
    let weather = data.weather[0].main;
    console.log(weather);

    html.classList.remove(...html.classList);
    descriptionIcon.classList.remove(...descriptionIcon.classList);

    const SeoulIcon = document.getElementById('SeoulIcon'); // Get the <h3> element by id

    if (weather === 'Clouds') {
        html.classList.add('weather-clouds');
        descriptionIcon.classList.add('fas', 'fa-cloud-sun');
        SeoulIcon.classList.add('fas', 'fa-cloud-sun'); // Add cloud-sun icon class to SeoulIcon
    } else if (weather === 'Thunderstom') {
        html.classList.add('weather-thunderstorm');
        descriptionIcon.classList.add('fas', 'fa-bolt');
        SeoulIcon.classList.add('fas', 'fa-bolt'); // Add bolt icon class to SeoulIcon
    } else if (weather === 'Drizzle') {
        html.classList.add('weather-drizzle');
        descriptionIcon.classList.add('fas', 'fa-water');
        SeoulIcon.classList.add('fas', 'fa-water'); // Add water icon class to SeoulIcon
    } else if (weather === 'Rain') {
        html.classList.add('weather-rain');
        descriptionIcon.classList.add('fas', 'fa-umbrella');
        SeoulIcon.classList.add('fas', 'fa-umbrella'); // Add umbrella icon class to SeoulIcon
    } else if (weather === 'Snow') {
        html.classList.add('weather-snow');
        descriptionIcon.classList.add('fas', 'fa-snowflake');
        SeoulIcon.classList.add('fas', 'fa-snowflake'); // Add snowflake icon class to SeoulIcon
    } else if (weather === 'Atmosphere') {
        html.classList.add('weather-atmosphere');
        descriptionIcon.classList.add('fas', 'fa-smog');
        SeoulIcon.classList.add('fas', 'fa-smog'); // Add smog icon class to SeoulIcon
    } else {
        html.classList.add('weather-clear');
        descriptionIcon.classList.add('fas', 'fa-cloud');
        SeoulIcon.classList.add('fas', 'fa-cloud'); // Add cloud icon class to SeoulIcon
    }
}


SeoulIcon.innerText = capitalizeFirstLetter(city);

weatherInfo.innerText = weatherInfo;
curent_weather.innerText = data.weather[0].main;
// Update this line to set the innerText of curent_weather to the weather description
document.querySelector('.SeoulIcon').innerHTML = iconUrl;
SeoulNowtemp.innerText = `${Math.floor(celsiusTemp)}°C`;
 // data.main.temp로 현재 기온을 가져올 수 있음
SeoulIcon.innerText = capitalizeFirstLetter(city);
SeoulLowtemp.innerText = `최저 기온은 ${celsiusTempMin.toFixed(2)}°C 입니다.`;
SeoulHightemp.innerText = `최대 기온은 ${Hightemp.toFixed(2)}°C 입니다.`;

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



        getNews();