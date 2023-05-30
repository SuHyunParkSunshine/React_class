//probs로 받는 법
// const CntDisp = (probs) => {
//     const n = probs.n;
//오브젝트로 받는 법
const CntDisp = ({n}) => {

    return (
        <article>
            <h2>
                입력값 : {n} ,  입력값 2배 : {n * 2}
            </h2>
        </article>
    );
}
export default CntDisp;