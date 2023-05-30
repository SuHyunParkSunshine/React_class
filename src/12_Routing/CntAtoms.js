import { atom, selector } from "recoil";

//atom함수 사용법
export const CntAtoms = atom({
    key : 'CntAtoms',
    default : 0
});

//atom이 변경이 되면 selector가 호출이 되서 자동으로 변경이 됨
export const CntAtomsTwice = selector({
    key : 'CntAtomsTwice',
    get : ({get}) => {
        return get(CntAtoms) * 2;
    }
});