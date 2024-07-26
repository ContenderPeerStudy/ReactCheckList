function a() {
    let b = 5;
    b++;
}

function Component() {
    const [forceRerender, setForceRerender] = useState(false);

    const b = useRef(5);

    b.current++;

    return (
        <div>
            {b}
            <button onClick={() => b.current++}> + </button>
            <button onClick={() => setForceRerender(!forceRerender)}>
                {" "}
                리랜더{" "}
            </button>
        </div>
    );
}
