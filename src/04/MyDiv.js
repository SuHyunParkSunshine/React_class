import MyDivArticle from "./MyDivArticle";
// import './MyDiv.module.css'

const MyDiv = () => {

    return (
        <main className="container">      
            <MyDivArticle /> {/*aname이라는 속성을 가지게 된다*/}
            <MyDivArticle aname='MyDiv1'/>
            <MyDivArticle aname='MyDiv2'/>
        </main>
    );
}

export default MyDiv;