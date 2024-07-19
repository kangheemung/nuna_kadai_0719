//2개 이상의 api endpoint를 를 호출한다.
//- 검색이 가능하다
//- pagenation이 있다.
//- 반응형 웹페이지다.
const url = new URL(``);
const serch_text_box= document.getElementById(" serch_text_box");
const serch_text_button= document.getElementById(" serch_text_button");
const getNews = async () => {
    try {
        const response = await fetch(url);
            console.log(url)
    } catch (error) {
        errorRender(error.message);
    }
};