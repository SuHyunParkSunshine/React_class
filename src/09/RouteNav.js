//routing을 걸었을때는 a태그를 쓸 수 없기 때문에 Link를 들고 와야한다.
import { Link } from "react-router-dom";

const RouteNav = ()=> {

    return(

        <nav>
            <ul>
                <li><Link to='/' role="button">Home</Link></li>
                <li><Link to='/page1/🍎/🥑' role="button">Page1</Link></li>
                <li><Link to='/page2?item=🍉&item2=🥦' role="button">Page2</Link></li>
            </ul>
        </nav>
    );
}
export default RouteNav;