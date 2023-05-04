import style from './Taccident.module.css';

const TaccidentNav2 = ({c2, sel1, sel2, setSel2}) => {

    const c2Arr = c2.filter((item) => item[0] === sel1);
    //console.log('c2Arr', c2Arr);

    const btArr = c2Arr.map((item) =>
    <li key = {item}>
        <button onClick = {() => setSel2(item)} className = {sel2 === item ? style.bt2: style.bt}>{item[1]}</button>
    </li>        
);

    return (

        <nav>
            <ul>
                <li><strong>사고유형 중분류</strong></li>
            </ul>
            <ul>
                {btArr}
            </ul>
        </nav>

    );
}
export default TaccidentNav2;