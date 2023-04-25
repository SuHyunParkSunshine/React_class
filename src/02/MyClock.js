import MyClockTime from "./MyClockTime1";
import MyClockImg from "./MyClockImg";
import MyClockTime1 from "./MyClockTime1";

const MyClock = () => {

    return (
        <main className="container">
            <article data-theme="dark">
                <MyClockImg />
                {/* <MyClockTime /> */}
                <MyClockTime1 />

            </article>
        </main>
    );
  
}
export default MyClock;