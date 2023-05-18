import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import xy from './getxy.json';

const FcstMain = () => {

    const [whlist, setWhlist] = useState();
    console.log('whilst', whlist);

    //getXY에서 들고 와서 배열로 만들어야 함
    const ops = xy.map((item) => 
        <option value={item["행정구역코드"]} key={item["행정구역코드"]}>{item["1단계"]}</option>);
    console.log(xy);

    //날짜 입력창
    const dt = useRef();

    useEffect(() => {
        let day = new Date();
    });

    //날짜 선택
    const getDt = (day) => {
        day = dt.current.value();
    }

    return (
        <main>
            <article>
                <form>
                    <header><h1>단기예보 선택</h1></header>

                    <div className="grid">
                        <div>
                            <input ref={dt} type="date" id="dt" name="dt" onChange={() => getDt()} />
                            {/* <input type="text" id="text1" name="text1" readOnly /> */}
                        </div>
                        <div>
                            <select id="sel" name="sel">
                                <option value=''>선택</option>
                                {ops}
                            </select>
                        </div>
                    </div>
                    <footer>
                        <div className="grid">
                            <Link to='/ultra' role='button'>초단기예보</Link>
                            <Link to='/vilage' role='button'>단기예보</Link>
                        </div>
                    </footer>
                </form>
            </article>
        </main >
    );


}
export default FcstMain;