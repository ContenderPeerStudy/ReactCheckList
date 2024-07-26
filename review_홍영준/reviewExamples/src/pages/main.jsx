import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    const onClickButtonNavigate = (event) => {
        const problemNum = Number(event.target.name);
        navigate(`/problem${problemNum}`);
    };
    return (
        <>
            <button name="2" onClick={onClickButtonNavigate}>
                문제 2번
            </button>
            <button name="3">문제 3번</button>
            <button name="4" onClick={onClickButtonNavigate}>
                문제 4번
            </button>
        </>
    );
};

export default Main;
