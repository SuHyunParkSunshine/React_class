import FcstMain from "./FcstMain";
import FcstNav from "./FcstNav";
import Ultra from "./Ultra";
import Village from "./Village";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const Fcst = () => {

    return (
        <BrowserRouter>
            <main className="container">
            <FcstNav />
                <Routes>
                    <Route path="/" element={<FcstMain/>}/>
                    <Route path="/ultra" element={<Ultra />} />
                    <Route path="/village" element={<Village />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}
export default Fcst;