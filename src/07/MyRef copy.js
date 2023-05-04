import { useState, useRef } from "react";

const MyRef = () => {

    let cnt1 = 1;
    const [cnt2, setCnt2] = useState(1);
    const cnt3 = useRef(1);

    const showCnt = () => {
        console.log('cnt1 =', cnt1, 'cnt2 =', cnt2, 'cnt3 =', cnt3.current)
    }

    const showCnt1 = () => { //내부적으로는 바뀌지만 화면에는 표시되지 않음(component)
        cnt1++;
        showCnt();
    }

    const showCnt2 = () => { //바뀔때마다 랜더링이 계속 실시간으로 일어나서 화면에 바로 표시가 됨(State)
        setCnt2(cnt2 + 1);
        showCnt();
    }

    const showCnt3 = () => { //내부적으로 변화를 하지만 실시간으로 화면에 반영되지는 않지만 어떤 조건에 의해 재랜더링이 되면 화면에 표시가 된다.(Ref)
       cnt3.current = cnt3.current + 1;
        showCnt();
    }

    return (
        <main className="container">
            <article>
                <header>
                    <div className="grid">
                        <div><h1>컴포넌트 변수 : {cnt1}</h1></div> 
                        <div><h1>State 변수 : {cnt2}</h1></div>
                        <div><h1>Ref 변수 : {cnt3.current}</h1></div>
                    </div>
                </header>
                <div className="grid">
                    <button onClick={() => showCnt1()}>컴포넌트 변수</button>
                    <button onClick={() => showCnt2()}>State 변수</button>
                    <button onClick={() => showCnt3()}>Ref 변수</button>
                </div>
            </article>
        </main>
    );
}

export default MyRef;