import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/main";
import Problem2 from "../../pages/problem2";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
    },
    {
        path: "/problem2",
        element: <Problem2></Problem2>,
    },
]);

export default router;
