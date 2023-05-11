/* 한국관광공사_관광사진갤러리 키워드
https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=r%2B7JR%2BXtXErsZsZZCgNeSBf4bw%2FM4yGmFAcHjkkZtlDuhRLDWHJ96572cUNxSiQc4nAXzixNxvX%2Bpmbddl3%2F8A%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%98%81%eb%8f%84&_type=json*/

import style from './Gallery.module.css';
import { useState, useEffect, useRef } from 'react';
import GalleryView from './GalleryView';

const Gallery = () => {

    //키워드 input
    const txt1 = useRef();

    //component가 맨 처음 랜더링 되면
    useEffect(() => {

        txt1.current.focus();

    }, []);



    //확인버튼
    const show = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return;

        let kw = encodeURI(txt1.current.value);
        console.log(txt1.current.value, kw);
        getData(kw);
    }

    //취소버튼
    const showClear = (e) => {
        e.preventDefault();
    }

    const [data, setData] = useState();

    //확인용(data가 랜더링 될때마다 잘 나오는지)
    useEffect(() => {

        console.log('data', data)

    }, [data]);

    const getData = (kw) => {
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=r%2B7JR%2BXtXErsZsZZCgNeSBf4bw%2FM4yGmFAcHjkkZtlDuhRLDWHJ96572cUNxSiQc4nAXzixNxvX%2Bpmbddl3%2F8A%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${kw}&_type=json`;
        console.log("url=", url);

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setData(data.response.body.items.item))
            .catch((err) => console.log(err))

    }

    return (
        <main>
            <article>
                <header>
                    <h1>한국관광공사_관광사진 정보</h1>
                </header>
                <form>
                    <div className="grid">
                        <input ref={txt1} type="text" id="txt1" name="txt1" required placeholder='키워드를 입력하세요' />

                        <div className="grid">
                            <button onClick={(e) => show(e)}>확인</button>
                            <button onClick={(e) => showClear(e)}>취소</button>
                        </div>
                    </div>
                </form>
            </article>
            {data && <GalleryView data={data} />}
        </main>
    );
}
export default Gallery;