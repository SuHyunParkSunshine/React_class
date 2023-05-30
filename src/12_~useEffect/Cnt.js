import { useState, useEffect } from "react";
import CntDisp from "./CntDisp";
import CntInput from "./CntInput";


const Cnt = () => {
    //const [n, SetN]  : [변수명, set변수명] : set변수명을 통해 변경함.
    //초기값을 0으로 default시킴
    const [n, setN] = useState(0);
   
    useEffect(() => {
        console.log('n', n)
    }, [n])


    return (
        <main className="container">
            <CntInput n={n} setN={setN}/>
            <CntDisp n={n} />
        </main>
    );
}
export default Cnt;