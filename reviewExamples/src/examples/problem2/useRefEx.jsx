import { useRef, useState } from "react";

function UseRefEx() {
    const [updateNum, setUpdateNum] = useState(0);
    let nonRef;
    console.log("nonRef의 값은", nonRef);
    const inputRef = useRef("");
    console.log("inputRef의 값은", inputRef.current.value);
    function forceUpdate() {
        setUpdateNum(updateNum + 1);
    }
    function onClickSubmit(e) {
        e.preventDefault();
        nonRef = e.target.noUseRef.value;
        console.log("제출한 nonRef의 값은", nonRef);
        console.log("제출한 inputRef의 값은", inputRef.current.value);
    }

    return (
        <>
            <form onSubmit={onClickSubmit}>
                <input name="noUseRef" placeholder="useRef 미사용"></input>
                <input
                    name="UseRef"
                    placeholder="useRef 사용"
                    ref={inputRef}
                ></input>
                <button>제출</button>
            </form>

            <div>
                <div>useRef 안 쓴 input: {nonRef}</div>
                <div>useRef 쓴 input: {inputRef.current.value}</div>
            </div>
            <button onClick={forceUpdate}>리렌더</button>
        </>
    );
}

export default UseRefEx;
