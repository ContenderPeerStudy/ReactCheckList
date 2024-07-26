import { useState } from "react";

function StateEx() {
    const [num, setNum] = useState(0);
    function onClickRerender() {
        setNum(num + 1);
        console.log("setNum 직후 num 값은", num);
    }
    console.log("실제 num 값은", num);
    return (
        <>
            <div>state 값은 {num}</div>
            <button onClick={onClickRerender}>reRender</button>
        </>
    );
}

export default StateEx;
