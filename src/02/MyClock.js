import MyClockTime from "./MyClockTime";
import MyClockImg from "./MyClockImg";

const MyClock = () => {

    return (
        <main className="container">
            <article data-theme="dark">
                <MyClockImg />
                <MyClockTime />
            </article>
        </main>
    );
  
}
export default MyClock;