import CodeGubun from "./CodeGubun";
import CodeList from "./CodeList";
import { RecoilRoot } from "recoil";

const CodeView = () => {

    return (
        <RecoilRoot>
            <main className="container">
                <h1>code</h1>
                <CodeGubun />
                <CodeList />
            </main>
        </RecoilRoot>
    );
}
export default CodeView;
//다른곳에서도 쓰라고 export해주는 것