import CodeList from "./CodeList";
import { useState, useEffect } from "react";

const CodeGubun = () => {

    const [sel, setSel] = useState();

    const selItem = (e) => {
        console.log(e.target.value);
        setSel(e.target.value);
        //console.log("sel" , sel); //이 상태에서는 아직 반영이 되지 않았음, 바뀌고 난 다음에 일어나는 행위 useEffect를 찍어보면 되는데 이거는 함수
    }

    //값(sel)이 변화될때마다 재랜더링
    useEffect(() => {
        console.log("sel", sel);
    }, [sel]);

    return (
        <main className="container">
            <article>
                <form>
                    <div className="grid">
                        <div>
                            {/* select box는 option을 가지게 되어 있고 sel은 선택된 option의 값을 가진다 */}
                            <select id="sel" name="sel" onChange={selItem}>
                                <option value="">선택</option>
                                <option value="단기예보">단기예보</option>
                                <option value="초단기예보">초단기예보</option>
                            </select>
                        </div>
                        <div>
                            {/* 태그는 속성을 가질수 있고 그 속성이 sell이고 값이 useState로 만든 sel 이렇게 넘기면 키&값이 오브젝트 형태로 넘어간다*/}
                            {/* sel이 없으면 'sel &&' 값을 넘기지 않겟다. 값이 있을때만 넘기겠다, 삼항 연산도 쓸수 있다. 공백이면 값을 선택하세요를 출력하라*/}
                            {sel === '' ? <h1>값을 선택하세요.</h1> : <CodeList sell={sel} />}
                        </div>
                    </div>
                    <footer>
                        <ul>
                            <li></li>
                        </ul>
                    </footer>
                </form>
            </article>
        </main>
    );
}
export default CodeGubun;