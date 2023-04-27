//1. useState import
import { useState } from "react";

const MyClockTime1 = () => {

    // let myTime = new Date().toLocaleTimeString();
    //1. useState 변수 선언, useState를 사용하여 배열을 가지고 온다.
    let myDate = new Date().toDateString();

    let t = new Date().toLocaleDateString(); //초기값 설정
    const [mytime, setMytime] = useState(t); //useState가 받을 수 있는 변수는 2개이다.

    //3. 1초에 한번씩 useState변수 변경
    setInterval(() => setMytime(new Date().toLocaleTimeString()), 1000);

    return (
        <footer>
            <h1>{mytime}</h1>
            <h1>{myDate}</h1>
        </footer>
    );

}
export default MyClockTime1;