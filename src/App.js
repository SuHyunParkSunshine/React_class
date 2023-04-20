import logo from './logo.svg';
import './App.css';
//사용자 정의 태그!! 앞 첫 글자 대문자 <App /> 반드시 return이 있는 함수를 만들어야 함, 이때까지 배운 태그들은 소문자로 적어줘야댄다.
function App() {
  return (
    <div className="App">
      <header className="App-header"> {/*html에서 class랑 같은것*/}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
