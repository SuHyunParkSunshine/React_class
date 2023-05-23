import FcstTable from './FcstTable';

const VilageFcst = () => {

    // const getData = () => {

    //     let apikey = `r%2B7JR%2BXtXErsZsZZCgNeSBf4bw%2FM4yGmFAcHjkkZtlDuhRLDWHJ96572cUNxSiQc4nAXzixNxvX%2Bpmbddl3%2F8A%3D%3D`;       

    //     let urlDan = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?';

    //     urlDan = urlDan + `serviceKey${apikey}`;
    //     urlDan = urlDan + `&numOfRows=${num}`;
    //     urlDan = urlDan + `&pageNo=${no}`;
    //     urlDan = urlDan + `&base_date=${seldt}`;
    //     urlDan = urlDan + `&base_time=0630`;
    //     urlDan = urlDan + `&nx=${x}`;
    //     urlDan = urlDan + `&nx=${y}`;
    //     urlDan = urlDan + `&_type=json`;

    //     console.log('urlDan', urlDan);


    // }

    return (

        <article>
            <header><h1>VilageFcst</h1></header>
            
            <FcstTable />
        </article>

    );
}
export default VilageFcst;