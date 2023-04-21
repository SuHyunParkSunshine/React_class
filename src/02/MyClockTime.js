const MyClockTime = () => {

    let myTime = new Date().toLocaleTimeString();
    let myDate = new Date().toDateString();

    return (
        <footer>
            <h1>{myTime}</h1>
            <h1>{myDate}</h1>
        </footer>
    );

}
export default MyClockTime;