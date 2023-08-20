import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import NotFound from "./pages/notFound";
import Home from "./pages/home";
import AllProducts from "./pages/allProducts";
import NewProduct from "./pages/newProduct";
import ProductDetail from "./pages/productDetail";
import MyCart from "./pages/myCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <AllProducts />,
            },
            {
                path: "/products/new",
                element: <NewProduct />,
            },
            {
                path: "/products/:id",
                element: <ProductDetail />,
            },
            {
                path: "/carts",
                element: <MyCart />,
            }
        ]
    }
])

export default router