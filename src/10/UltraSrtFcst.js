import FcstTable from './FcstTable';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import codeData from './getcode.json';

const UltraSrtFcst = () => {

    const [datas, setDatas] = useState();

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
            .then((data) => setDatas(data.response.body.items))
            .catch((err) => console.log(err))
    }, []);

    return (
        <article>
            <header>
                <div className='grid'>
                    <p>{area} 초단기예보</p>
                    {/* <select><option value=''>선택</option></select> */}
                </div>
            </header>

            {datas && <FcstTable datas={datas} gubun="초단기예보" />}
        </article>
    );
}
export default UltraSrtFcst;