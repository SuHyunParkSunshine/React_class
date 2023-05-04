import TaccidentNav1 from './TaccidentNav1';
import TaccidentNav2 from './TaccidentNav2';
import TaccidentDetail from './TaccidentDetail';
import dataT from './dataTaccident.json';
import { useState, useEffect } from 'react';

const Taccident = () => {

    // console.log(dataT['data']);
    //console.log(dataT.data);

    const data = dataT.data; //사고 건수 obj배열(15) data가 배열
    //console.log(data);

    // let c1 = data.map((item) => item['사고유형_대분류']);
    let c1 = data.map((item) => item.사고유형_대분류);
    c1 = new Set(c1); //Set안에 들어오면 중복되는 값이 없음, 집합(Set)
    c1 = [...c1]; //"..." spread연산자 -> 배열로 변경시켜주는 연산자

    //map을 사용하는 방법
    const c2 = data.map((item) => [item.사고유형_대분류, item.사고유형_중분류]);

    //map을 사용하지 않는 방법
    // const c2 = [];
    // for (let item of data) {
    //     let temp = [item.사고유형_대분류, item.사고유형_중분류];
    //     temp.push(item.사고유형_대분류);
    //     temp.push(item.사고유형_중분류);
    //     c2.push(temp);
    // }

    //console.log(c1);
    //console.log(c2);


    const [sel1, setSel1] = useState(0); //대분류선택
    const [sel2, setSel2] = useState([]); //중분류선택
    const [selData, setSelData] = useState();

    useEffect(() => {
        //console.log('Taccident sel1 useEffect []', sel1);
    }, []);

    useEffect(() => {
        //console.log('Taccident sel1 useEffect sel1', sel1);
    }, [sel1]);

    useEffect(() => {
       // console.log('Taccident sel2 useEffect sel2', sel2);
        let temp = data.filter((item) => item.사고유형_대분류 === sel2[0] && item.사고유형_중분류 === sel2[1]);
        setSelData(temp[0]);
    }, [sel2, data]);

    useEffect(() => {
        //console.log('Taccident selData useEffect selData', selData)
    }, [selData]);

    useEffect(() => {
        //console.log('Taccident sel1 useEffect', sel1);
        //console.log('Taccident sel2 useEffect', sel2);
    });

    return (
        <main className='container'>
            <article>
                <header>
                    <TaccidentNav1 c1={c1} sel1={sel1} setSel1={setSel1} />
                    <TaccidentNav2 c2={c2} sel1={sel1} sel2={sel2} setSel2={setSel2} />
                </header>
                {selData && <TaccidentDetail selData = {selData}/>}
            </article>
        </main>
    );
}
export default Taccident;