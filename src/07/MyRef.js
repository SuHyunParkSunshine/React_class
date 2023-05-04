import { useState, useRef, useEffect } from "react";

const MyRef = () => {

    const txtref = useRef();

    const itemArr =useRef([]);
    const[itemTag, setItemTag] = useState();

    //입력을 받을 곳에 커서 깜빡이게 하기 처음 페이지 들어가서 랜더링 될때 커서 깜빡이게하기!!
    useEffect(() => {
        txtref.current.focus();
    }, []);

    const addItem = (e) => {
        e.preventDefault();
        itemArr.current = [...itemArr.current, txtref.current.value];
        itemArr.current = new Set(itemArr.current)
        console.log("addItem=", itemArr.current); //cnt3찍은거랑 같음, 값이 변화하는지 확인하기 위해서 console찍은겨
    };
    const resetItem = (e) => {
        e.preventDefault();
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
            </article>
        </main>
    );
}

export default MyRef;