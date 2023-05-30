import { useEffect, useRef, useState } from "react";

const Cnt = () => {
    
    //ref변수는 처음 랜더링 됐을때만 변화를 만들어낸다.
    const txt1 = useRef();

    useEffect(() => {
        txt1.current.focus();           
    }, [])

    // const num = txt1.current.value;

    //return값으로 2개의 값을 배열로 돌려준다. cnt는 react가 관리, setCnt라는 함수로 값을 변경 시킴.
    const [cnt, setCnt] = useState(0);
   
    const minus = (e) => {
        e.preventDefault();
        if(cnt <= 0) return;
        setCnt(cnt -1);      
    }

    const plus = (e) => {
        e.preventDefault();
        setCnt(cnt +1);
    }

    return (
        <main className="container">
            <article>                
                <form className="grid">
                    <div></div>
                    <div><button onClick={(e) => minus(e)}>-</button></div>
                    <div><input ref={txt1} type="text" id="txt1" name="txt1" value={cnt} readOnly></input></div>
                    <div><button onClick={(e) => plus(e)}>+</button></div>
                    <div></div>
                </form>
            </article>
            <article>
                <h2>입력값: {cnt} , 입력값 2배: {cnt * 2}</h2>
            </article>
        </main>
    );
}
export default Cnt;