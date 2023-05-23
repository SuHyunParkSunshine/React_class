import FcstTable from './FcstTable';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import codeData from './getcode.json';

const UltraSrtFcst = () => {

    const [data, setData] = useState("");
    const [sel, getSel] = useState();

    const ultraCode = codeData.filter((item) => item["예보구분"] === "초단기예보");

    const ops = ultraCode.map((code) =>
        (<option value={code["항목값"]} key={code["항목값"]}>
            {code["항목명"]}({code["항목값"]})
        </option>)
    );

    const dt = useParams().dt;
    const area = useParams().area;
    const x = useParams().x;
    const y = useParams().y;

    useEffect(() => {
        
                let apikey = `r%2B7JR%2BXtXErsZsZZCgNeSBf4bw%2FM4yGmFAcHjkkZtlDuhRLDWHJ96572cUNxSiQc4nAXzixNxvX%2Bpmbddl3%2F8A%3D%3D`;
        
                let urlCho = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?';
        
                urlCho = urlCho + `serviceKey=${apikey}`;
                urlCho = urlCho + `&numOfRows=60`;
                urlCho = urlCho + `&pageNo=1`;
                urlCho = urlCho + `&base_date=${dt}`;
                urlCho = urlCho + `&base_time=0630`;
                urlCho = urlCho + `&nx=${x}`;
                urlCho = urlCho + `&ny=${y}`;
                urlCho = urlCho + `&dataType=JSON`;
        
                console.log('urlCho', urlCho);
        
                fetch(urlCho)
                    .then((resp) => resp.json())
                    .then((data) => setData(data.response.body.items.item))
                    .catch((err) => console.log(err))
      
    }, []);
    

    useEffect(()=>{
        console.log('sel', sel);
    }, [sel]);

    return (

        <article>
            <header>
                <h1>UltraSrtFcst</h1>
                <select onChange={(e) => getSel(e.target.value)}><option value=''>선택</option>
                    {ops}
                </select>
            </header>
            {data && <FcstTable data={data} sel={sel} codeData={ultraCode} />}
        </article>

    );
}
export default UltraSrtFcst;