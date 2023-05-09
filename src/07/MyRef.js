import style from './MyRef.module.css';

import { useState, useRef, useEffect } from "react";

const MyRef = () => {

    const txtref = useRef(); //1. ref 변수로 사용하는 경우 2. form태그를 제어하는 용도

    const itemArr =useRef([]); //값이 바뀔때 마다 랜더링이 일어나지는 않지만 랜더링이 일어나는 순간에 값이 반영 된다.
    const[itemTag, setItemTag] = useState(); //state변수가 변경이 되면 제랜더링이 일어나기때매 itemTag라는 state변수를 사용

    //입력을 받을 곳에 커서 깜빡이게 하기 처음 페이지 들어가서 랜더링 될때 커서 깜빡이게하기!!
    useEffect(() => {
        txtref.current.focus();
    }, []); //dependency '[]'가 있으면 맨 처음 한번 일어난다는 의미-> 페이지 열렷을때 커서를 과일/채소에 뜨겠끔

    const addItem = (e) => {
        e.preventDefault(); //계속 재랜더링이 되는 것을 막기 위해서!!
        itemArr.current = [...itemArr.current, txtref.current.value];
        itemArr.current = new Set(itemArr.current); //중복되지 않게 set을 사용함 set은 map으로 사용불가 다시 배열로 만들어주어야 댄다
        itemArr.current = [...itemArr.current];
        let tempTag = itemArr.current.map((item, idx) => <span key={'sp'+idx} className={style.sp}>{item}</span>);
        setItemTag(tempTag);
        resetItem();        
        console.log("addItem=", itemArr.current); //cnt3찍은거랑 같음, 값이 변화하는지 확인하기 위해서 console찍은겨
    };
    const resetItem = (e) => {
        //e.preventDefault();
        txtref.current.value = '';
        txtref.current.focus();
        console.log("resetItem");
    };

    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <div>
                                <label htmlFor="txt1">과일/채소 입력</label>
                                <input ref={txtref} type="text" id="txt1" name="txt1" required />
                            </div>

                            <div>
                                <button onClick={(e) => addItem(e) }>등록</button>
                                <button onClick={(e) => resetItem(e)}>취소</button>
                            </div>
                        </div>                        
                    </form>
                </header>
                <div>
                    {itemTag}
                </div>
            </article>
        </main>
    );
}

export default MyRef;