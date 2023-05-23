import { useEffect, useState } from "react";
import codeData from './getcode.json';

const FcstTable = ({ datas, gubun }) => {

    //console.log("datas =", datas);
    //console.log("gubun =", gubun);

    const getGubun = codeData.filter((item) => item["예보구분"] === gubun);
    console.log('getGubun = ', getGubun);
    const ops = getGubun.map((item) =>
        <option value={item["항목값"]} key={item["항목값"]}>
            {item["항목명"]}({item["항목값"]})
        </option>
    );

    return (
        <div>
            <select><option value=''>선택</option>
            {ops}
            </select>
            <table>
                <thead>
                    <tr>
                        <th scope="col">항목명</th>
                        <th scope="col">예측일자</th>
                        <th scope="col">예측시간</th>
                        <th scope="col">예보 값</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    );
}
export default FcstTable;