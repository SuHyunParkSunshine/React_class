import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { CntAtoms, CntAtomsTwice } from "./CntAtoms";

const CntDisp = () => {
    //set함수가 필요 없는 경우에는 value만 가져다가 쓸수 있는 useRecoilValue가 있음
    const n = useRecoilValue(CntAtoms);
    //n2 is selector
    const n2 = useRecoilValue(CntAtomsTwice);

    return (
        <article>
            <h2>
                입력값 : {n},  입력값 2배 : {n2}
            </h2>
            <footer>
                <Link to='/'>입력화면이동</Link>
            </footer>
        </article>
    );
}
export default CntDisp;