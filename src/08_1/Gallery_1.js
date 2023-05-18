/*
한국관광공사_관광사진갤러리 키워드 검색 목록 조회
https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=RMZOE5nxYetqyMQfyEMjbhv0YOxMX7mj%2B8ucPjopU%2FTHy%2BF2x3UjmB9kqdqtEqvO8mYBMx04W3%2BTmxwNF0sJmw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%9e%90%ea%b0%88%ec%b9%98&_type=json
*/
import { useState, useEffect, useRef } from 'react';
import styles from './Gallery_1.module.css';
import GalleryView_1 from './GalleryView_1';
import style from './Gallery_1.module.css';

const Gallery_1 = () => {

    //State변수
    const [items, setItems] = useState();

    //input 제어 -> form을 제어하기 위해서 사용
    const txt1 = useRef(); //변수값을 핸들링할때 사용할 수 있음

    //componant가 처음 랜더링되었을 때 한번 실행
    useEffect(() => {
        //input에 포커스 맞추기
        txt1.current.focus();
    }, []);

    //componant 해당하는 state변수가 변경이 될 때마다 실행
    useEffect(() => {        
        console.log('useEffect items', items);
    }, [items]);

    //사용자 정의 함수
    const getData = (kw, num, no) => {
        let apikey = `RMZOE5nxYetqyMQfyEMjbhv0YOxMX7mj%2B8ucPjopU%2FTHy%2BF2x3UjmB9kqdqtEqvO8mYBMx04W3%2BTmxwNF0sJmw%3D%3D`

        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?'

        url = url + `serviceKey=${apikey}`;
        url = url + `&numOfRows=${num}`;
        url = url + `&pageNo=${no}`;
        url = url + `&MobileOS=ETC`;
        url = url + `&MobileApp=AppTest`;
        url = url + `&arrange=A`;
        url = url + `&keyword=${kw}`;
        url = url + `&_type=json`;

        console.log(url);

        fetch(url)
        .then((resp) => resp.json()) //내가 볼수 있는 데이터로 보기 위해서 json으로 가지고 오겠다.
        .then((data) => setItems(data.response.body.items.item))
        .catch((err) => console.log(err))

    }

    const show = (e) => {
        e.preventDefault();
        //공백체크(공백이면 할일이 없다는 걸 알려줌)
        // if (txt1.current.value === '') {
        //     //키워드를 입력하라고 공지가 뜨는 역할을 하게 됨 alert
        //     alert('키워드를 입력해주세요.')
        //     txt1.current.focus();
        //     return;
        // }
        //인코딩한 키워드(한글), 검색할 단어(ex.영도)
        const kw = encodeURI(txt1.current.value);
        getData(kw);
        console.log(kw, 10, 1);
    }

    const showClear = (e) => {
        e.preventDefault();
    }

    return (
        <main className="container">
            <form>
                <article>
                    <header>
                        <h1>한국관광공사_관광사진 정보</h1>
                    </header>
                    <div className="grid">
                        <div>
                            <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요." required />
                        </div>
                        <div className={styles.btDiv}>
                            <button onClick={(e) => show(e)}>확인</button>
                            <button onClick={(e) => showClear(e)}>취소</button>
                        </div>
                    </div>
                </article>
            </form>
            {/* 폴시연산 items가 있어야 실행을 하겠다는 소리, items가 없으면 실행하지 않겟다. */}
            {items && <GalleryView_1 content = {items} />}
        </main>
    );
}

export default Gallery_1;