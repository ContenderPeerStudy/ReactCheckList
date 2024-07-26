import logo from "./logo.svg";
import "./App.css";
import StateEx from "./examples/problem2/useStateEx";
import UseRefEx from "./examples/problem2/useRefEx";
import UseEffectEx from "./examples/problem2/useEffectEx";
import { RouterProvider } from "react-router-dom";
import router from "./libs/router/router";
function App() {
    console.log("review 실행");
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
