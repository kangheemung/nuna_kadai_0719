//2개 이상의 api endpoint를 를 호출한다.
//- 검색이 가능하다
//- pagenation이 있다.
//- 반응형 웹페이지다.
const url = new URL(``);
const serch_text_box= document.getElementById(" serch_text_box");
const serch_text_button= document.getElementById(" serch_text_button");
//검색기능
//로직 인풋에 글을 쓴 내용을쓰고 버튼을 누르면 내용을 검색
//인풋 내용이 빈칸으로 버튼을 누를 경우 내용을 입력해주세요 표시
//버튼을 누른후 내용이 빈칸으로 돌아가게 제작한다. 

const getNews = async () => {
    try {
        const response = await fetch(url);
            console.log(url)
    } catch (error) {
        errorRender(error.message);
    }
};