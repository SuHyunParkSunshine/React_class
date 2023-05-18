import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteHome from './RouteHome';
import RouteNav from './RouteNav';
import RoutePage1 from './RoutePage1';
import RoutePage2 from './RoutePage2';

const RouteMain = () => {

    return (
        //BrowserRouter 이 페이지에서는 routing 기능이 들어갈거라는 것을 알려주는 것, 이게 잇어야지 route를 쓸수 있음
        <BrowserRouter> 
            <main className="container">
                <RouteNav />
                {/* route되는 정보들을 묶는 것이 routes */}
                <Routes> 
                    <Route path ='/' element={<RouteHome />}/>
                    {/*item을 파라미터 형식으로 넘기는 것, Nav에서 useParams로 넘긴 파라미터를 받아 써야한다 */}
                    <Route path ='/page1/:item/:item2' element={<RoutePage1 />}/>
                    <Route path ='/page2' element={<RoutePage2 />}/>
                </Routes>
            </main>
        </BrowserRouter>
    );
}
export default RouteMain;