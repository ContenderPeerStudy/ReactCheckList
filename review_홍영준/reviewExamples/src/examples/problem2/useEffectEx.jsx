import { useEffect, useState } from "react";

const UseEffectEx = () => {
    const [updateNum, setUpdateNum] = useState(0);
    const [effectNum, setEffectNum] = useState(0);
    useEffect(() => {
        console.log("첫 렌더 시에만 실행");
    }, []);
    useEffect(() => {
        console.log("첫 렌더, effectNum이 바뀔 때 마다 실행");
    }, [effectNum]);
    useEffect(() => {
        console.log("리렌더 할 때 마다 실행");
    });
    const onClickChangeEffectNum = () => {
        setEffectNum(effectNum + 1);
    };
    const forceUpdate = () => {
        setUpdateNum(updateNum + 1);
    };
    return (
        <>
            <div>현재 숫자: {effectNum}</div>
            <div></div>
            <div></div>
            <button onClick={onClickChangeEffectNum}>숫자 값 변경</button>
            <button onClick={forceUpdate}>리렌더</button>
        </>
    );
};
export default UseEffectEx;
