//state 변수 1단계
import { useState } from 'react';
import data from './dataFrcst.json';
import './Frcst.css';
import style from './Frcst.module.css';

const Frcst = () => {
    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"]; //키를 배열로 짰음. map을 사용할 수 있음.

    dtKey.map((item) => console.log('dt', data[item]));

    const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"]; //map은 배열에서 하나씩 가지고와서 새로운 배열에 넣어주는 것.
    cnKey.map((item) => console.log('cnt', data[item]))

    let dtcn = {}; //object(객체 생성)
    dtKey.map((item, idx) => dtcn[data[item]] = data[cnKey[idx]]);
   // console.log(dtcn);


    //상세정보
    //let bodyTag;

    //state변수 2단계: 변수 선언
    const [bodyTag, setBodyTag] = useState('');
    const [selDt, setSelDt] = useState();
    const detail = (k) => {
        //console.log(k, dtcn[k]);
        //tempTag =dtcn[k];

        //글자 쪼개기     
        let dtcnItem = dtcn[k].split(',');
        setSelDt(k);
        dtcnItem = dtcnItem.map((item) => item.split(':'));        
        console.log(dtcnItem);
        dtcnItem = dtcnItem.map((item) => 
                        <div key ={item[0]}>
                            <span className={style.sp1}>{item[0]}</span>
                            {item[1].trim() === '낮음' ? <span className={style.sp21}>{item[1]}😍</span>
                                : item[1].trim() === '보통' ? <span className={style.sp22}>{item[1]}😉</span>
                                    :<span className={style.sp23}>{item[1]}🤬</span>}
                        </div>)
        

        //state변수 3단계: 값 변경
        setBodyTag(dtcnItem);
    }   
    let dtTag = [];
    dtTag = Object.keys(dtcn).map((item, idx) =>
                        <div role ='button' className = {selDt === item ? style.bt1: style.bt} 
                        key={idx}
                        onClick={() => detail(item)}>
                            {item}                        
                        </div>
                        );
    // console.log(data);

    return (
        <main className='container'>
            <article>
                <header>
                    <h1>❤초미세먼지 주간예보❤</h1>
                    <div className='grid'>
                        {dtTag}
                    </div>                    
                </header>
                <div className='grid'>
                    {bodyTag}
                </div>
            </article>
        </main>
    );
}
export default Frcst;