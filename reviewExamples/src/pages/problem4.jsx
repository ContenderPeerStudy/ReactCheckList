const posts = [
    {
        id: 1,
        title: "",
        content: "",
    },
];

const Problem4 = () => {
    return posts.map((el) => {
        <div>
            <div>{el.title}</div>
            <div>{el.content}</div>
            <div>
                <button>추가</button>
                <button>수정</button>
                <button>삭제</button>
            </div>
        </div>;
    });
};
