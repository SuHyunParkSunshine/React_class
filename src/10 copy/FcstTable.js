import { useEffect, useState } from "react";

const FcstTable = ({ data, sel, codeData }) => {
    console.log('data', data);
    console.log('sel',sel);
    console.log('codeData',codeData);
    const [tData, setTData] = useState();

    useEffect(() => {
        setTData(data.filter((item) => item.sel === sel ));

    }, []);

    useEffect(() =>{
        console.log("tData",tData);
    }, [tData]);

    return (

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
                {tData && 
                    tData.map((item, idx) => {
                        return (
                            <tr key={item.fcstValue + item.fcstTime + idx}>
                                <td>
                                    {codeData.filter((code) => code.항목값 === item.sel)[0]["항목명"]}
                                </td>
                                <td>
                                    {item.fcstValue}
                                </td>
                                <td>
                                    {item.fcstTime}
                                </td>
                                <td>
                                    {codeData.filter((code) => code.항목값 === item.sel)[0]["단위"]}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}
export default FcstTable;