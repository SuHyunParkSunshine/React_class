//사용자 정의 태그 component를 만드는 기본 구조, 자바스크립트 함수를 만드는 거라고 생각하면 된다.
import logo from '../logo.svg';
import './Hello.css';
import MyClockImg from '../02/MyClockImg';

const Hello = () => {
    let name = '박수현';
    let git = 'https://github.com/SuHyunParkSunshine';
    return (
        <main className='container'>
            <article data-theme="dark">
                <div>
                <img src={logo} className='App-logo' alt='logo' />
                </div>
                <MyClockImg />
                <footer>
                    <hgroup>
                    <h1>{name}</h1>
                    <h2><a href={git}>{git}</a></h2>
                    </hgroup>
                </footer>
            </article>
        </main>

    );
}

export default Hello; // 이게 반드시 들어가야 한다. 내보내주기!!