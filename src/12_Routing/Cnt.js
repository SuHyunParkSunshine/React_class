import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CntInput from "../12_Routing/CntInput";
import CntDisp from "../12_Routing/CntDisp";

const Cnt = () => {

    return (
        <BrowserRouter>
            <main className="container">
                {/* RecoilRoot안에 들어있는 애들은 변수를 같이 사용 가능 */}
                <RecoilRoot>
                    <Routes>
                        <Route path="/" element={<CntInput />} />
                        <Route path="/disp" element={<CntDisp />} />
                    </Routes>
                </RecoilRoot>               
            </main>
        </BrowserRouter>
    );
}
export default Cnt;