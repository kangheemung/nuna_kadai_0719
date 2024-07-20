
    const API_KEY = "#";
    const city = "seoul";
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
    const SeoulNowtemp = document.getElementById("SeoulNowtemp");
    const SeoulLowtemp = document.getElementById("SeoulLowtemp");
    const SeoulHightemp= document.getElementById("SeoulHightemp");

    // sidebar要素を取得する
    const head_top = document.querySelector(".head_top");
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

SeoulNowtemp.innerText = `현재온도는:  ${celsiusTemp.toFixed(2)}°C`; // data.main.temp로 현재 기온을 가져올 수 있음

SeoulIcon.innerText= `${city}의 날씨는?`;

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

            } catch (error) {
                console.error(error.message);
            }
        };


        // Call functions here or add more logic as needed
        getNews();