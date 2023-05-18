import { useLocation } from "react-router-dom";
import qs from 'query-string';

const RoutePage2 = () => {

    const loc = useLocation().search;
    //?item=%F0%9F%8D%89&item2=%F0%9F%A5%A6를 쿼리스트링이 아이콘으로 변환을 해줌
    console.log('loc', loc);

    const item = qs.parse(loc).item;
    const item2 = qs.parse(loc).item2;
    console.log('item', item);
    console.log('item2', item2);

    //쿼리스트링 사용하지 않을 시 하나하나 하기의 코드처럼 나눠서 사용해야함
    // let loc2 = loc.replace('?', '');
    // loc2 = loc2.split('&');
    // loc2 = loc2.map((i) => i.split('='))
    // console.log(loc2);

    return(
        <article>
        <header><h1>RoutePage2</h1></header>
    </article>
    );
}
export default RoutePage2;