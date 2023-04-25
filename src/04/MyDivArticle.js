//const MyDivArticle = (probs) => {

//state변수 사용 1단계
import { useState } from 'react';
//전역으로 적용
import './MyDiv.css';
//component에 스타일 적용
import style from './MyDiv.module.css';

//매개변수probs를 사용하지 않고 오브젝트에 매개변수명을 넣어서 사용
const MyDivArticle = ({ aname }) => {
    //const aname = probs.aname;
    let n = (aname === undefined) ? '0' : aname.slice(-1);
    // let cnt = 0;
    console.log(n);

    //state변수 사용 2단계: 변수선언(배열임)
    const [cnt, setCnt] = useState(0);

    //click 이벤트 처리, 함수 따로 정의
    const like = ()=> {
        // cnt = cnt + 1; 
    //state변수 사용 3단계: 변수 내용 변경
    setCnt(cnt + 1);
        console.log(cnt)
    };

    return (
        <article>
            <header><h1 className={style.mah1}>{aname || 'MyDiv0'}</h1></header>
            <ul className={style.aul}>
                <li className={style.ali}>{n === '0' ? 'MyDiv0' : 'MyDiv' + n}1</li>
                <li>{'MyDiv' + n}2</li>
            </ul>
            {n === '1' &&
                <footer>
                    <h2><span onClick = {()=>like()}>❤</span>{cnt}</h2>
                </footer>
            }
        </article>
    );
}

export default MyDivArticle;