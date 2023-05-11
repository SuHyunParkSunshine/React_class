import './Box.css';
// import BoxRows from "./BoxRows";
import BoxRows1 from './BoxRows1';
import { useRef, useState, useEffect } from 'react';

const Box = () => {

    //박스오피스 리스트 배열 들고 와서 변수로 선언
    const [mvlist, setMvlist] = useState();
    let seldt;
    //console.log(mvlist);

    //날짜 입력창
    const dt1 = useRef();

    //어제 날짜로 디폴트
    useEffect(() => {
        //어제날짜 만들기(http://ko.javascript.info/date)
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        seldt = yesterday.getFullYear();
        let month = yesterday.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;
        let day = yesterday.getDate();
        day = day < 10 ? `0${day}` : day;
        seldt = `${seldt}${month}`;
        seldt = `${seldt}${day}`;
        console.log('yesterday=', seldt);
        dt1.current.value = `${yesterday.getFullYear()}-${month}-${day}` //어제 날짜를 디폴트로 기입하는 코드
        getData(seldt);

    }, []);


    //날짜 선택
    const getDt = () => {
        console.log("dt1 = ", dt1.current.value);
        seldt = dt1.current.value.replaceAll('-', '');
        console.log("seldt=", seldt);
        getData(seldt);

    }

    //데이터 가져오기(fetch)
    const getData = (sd) => {

        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';
        url = url + sd;
        console.log("url=", url);

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setMvlist(data.boxOfficeResult.dailyBoxOfficeList))
            .catch((err) => console.log(err));

    }

    return (
        <main className="container">
            <article>
                <header>
                    <nav>
                        <ul><li><h1>일일박스오피스</h1></li></ul>
                        <ul><li><input ref={dt1} type="date" id="dt1" name="dt1" onChange={() => getDt()} /></li></ul>
                    </nav>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">순위</th>
                            <th scope="col">영화명</th>
                            <th scope="col">매출액</th>
                            <th scope="col">증감</th>
                        </tr>
                    </thead>
                    {mvlist && <BoxRows1 mv={mvlist} />}
                    <tfoot>

                    </tfoot>
                </table>
            </article>
        </main>
    );
}
export default Box;