import { useState } from "react";

const MyClockTime1 = () => {

    let myTime = new Date().toLocaleTimeString();
    let myDate = new Date().toDateString();

    let t = new Date().toLocaleDateString();
    const [mytime, setMytime] = useState(t);

    setMytime()

    return (
        <footer>
            <h1>{myTime}</h1>
            <h1>{myDate}</h1>
        </footer>
    );

}
export default MyClockTime1;