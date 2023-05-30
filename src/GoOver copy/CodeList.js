import code from '../10/getcode.json';
import { useState, useEffect } from 'react';

//probs(오브젝트 전체)로 넘기는 방법(probs.sell => value)
//const CodeList = (probs) => {
//console.log('probs value', probs.sell)

//오브젝트의 키값으로 바로 받아오는 방법
const CodeList = ({ sell }) => {
    //console.log('code', code)
    // => return이 오는데 생략가능
    let temp = code.filter((i) => i["예보구분"] === sell);
    //console.log('temp', temp);

    let opTags = temp.map((i) =>
    //동적으로 option을 달때 key값을 달라고 오류가 난다.
        <option key={i["항목값"]} value={i["항목값"]}>{i["항목명"]}({i["항목값"]})</option>);

    console.log('opTags', opTags);
    return (
        <>
            <select id='sel2' name='sel2' defaultValue=''>
                <option value=''>선택</option>
                {opTags}
            </select>
        </>
    );
}
export default CodeList;