import { useState, useEffect } from "react"
import FcstTable from "./FcstTable";

const Ultra = () => {
    //useStateq변수 :변수값이 변경되면 재랜더링, 컴포넌트에서만 변경가능
    const [items, setItems] = useState();


    useEffect(() => {

        let url = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
        url = url + "serviceKey=r%2B7JR%2BXtXErsZsZZCgNeSBf4bw%2FM4yGmFAcHjkkZtlDuhRLDWHJ96572cUNxSiQc4nAXzixNxvX%2Bpmbddl3%2F8A%3D%3D";
        url = url + "&numOfRows=60&pageNo=1";
        url = url + "&base_date=20230525";
        url = url + "&base_time=0600";
        url = url + "&nx=55&ny=127";
        url = url + "&dataType=json"
        console.log(url);

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItems(data.response.body.items.item))
            .catch((err) => console.log(err));
    }, []);



    return (
        <>
            {items && <FcstTable items = {items} gubun = '초단기예보' />}
        </>
    );
}
export default Ultra;