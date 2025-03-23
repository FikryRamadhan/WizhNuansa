import Detail from "../pages/Detail";
import Home from "../pages/Home";

const Routers = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/trip/:slug",
        element: <Detail />
    },
]

export default Routers