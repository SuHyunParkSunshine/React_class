import { useState } from "react";
import './Box.css';
//const BoxRows = (probs) => {
const BoxRows1 = ({ mv }) => {
    //const mvlist = [...probs.mv] //앞의 mvlist랑 전혀 다른것!! probs 사용할라면 변수에 parametre를 받을 수 있도록 적어줘야한다.
    console.log("boxrows", mv)

    //상세정보
    const [detail, setDetail] = useState('');
    //클릭된 자료 확인
    const [footTag, setFootTag] = useState(' ');
    const showMv = (row) => {
        //jsx 방법
        // let tempTag =`[${row.movieCd} ${row.movieNm} 개봉일 : <span className = 'tempsp'>${row.openDt}</span>]`;
        
        console.log(row);
        // setFootTag(row.movieCd);

        //문자열 방법
        setFootTag("[" + row.movieCd + "] " + row.movieNm + " 개봉일 : " + row.openDt);
    }


    let trTags = []; // 빈 배열 10개의 tr이 만들어져야한다.
    for (let row of mv) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);
        let icon;
        let intent = parseInt(row.rankInten);
        if (intent == 0) icon = '⏺';
        else if (intent < 0) icon = '🔽'
        else icon = '🔼'
        trTags.push(
            <tr className="mytr" key={row.movieCd} onClick={() => showMv(row)}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td>{parseInt(row.salesAmt).toLocaleString()}</td>
                <td>{icon}{Math.abs(intent)}</td>

            </tr>
        );
    }
    console.log(trTags);
  

    return (
        <>
            <tbody className="fontcolour">
                {trTags} {/*배열을 만들어서 10개를 가지고 오는 변수 */}
            </tbody>
            <tfoot>
                <tr>
                    <td id='trfoot' colSpan={4}>{footTag}</td> {/*4개를 합쳐가지고 하나로 만들도록 하겠다.*/}
                </tr>
            </tfoot>
        </>
    );
}
export default BoxRows1;