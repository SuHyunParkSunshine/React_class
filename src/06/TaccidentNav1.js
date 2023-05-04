import style from './Taccident.module.css';

const TaccidentNav1 = ({c1, sel1, setSel1}) => {

    // const show = (item) => {
    //     console.log(item)
    // }
    const btTag = c1.map((item) =>
        <li key = {item}>
            <button onClick = {() => setSel1(item)} className = {sel1 === item ? style.bt1: style.bt} >{item}</button>
        </li>        
    );

    return (

        <nav>
            <ul>
                <li><strong>사고유형 대분류</strong></li>
            </ul>
            <ul>
                {btTag}
            </ul>
        </nav>

    );
}
export default TaccidentNav1;