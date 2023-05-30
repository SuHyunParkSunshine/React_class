const CntInput = ({n, setN}) => {

    const downN = (e) => {
        e.preventDefault();
        //state값을 변경할때는 무조건 set변수명을 통해 기술해야함.
        if (n - 1 <= 0) {
            setN(0);
        }
        else { setN(n - 1); }
    }
    const upN = (e) => {
        e.preventDefault();
        if (n + 1 > 10) setN(10);
        else setN(n + 1);
    }

    return (
        <article>
            <form className="grid">
                <div>
                    <button onClick={downN}>🔻</button>
                </div>
                <div>
                    <input type="text" id="txt1" name="txt1" readOnly value={n}></input>
                    {/* value = {n}은 값을 표출시키기 위해 적음 */}
                </div>
                <div>
                    <button onClick={(e) => upN(e)}>🔺</button>
                </div>
            </form>
        </article>
    );
}
export default CntInput;