import DetailProduct from "../pages/DetailProduct";
import Home from "../pages/Home";

const Routers = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/trip/:slug",
        element: <DetailProduct />
    },
    {
        path: "/paket-trip/:slug",
        element: <Home />
    }
]

export default Routers