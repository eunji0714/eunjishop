import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import NotFound from "./pages/notFound";
import Home from "./pages/home";
import AllProducts from "./pages/allProducts";
import NewProduct from "./pages/newProduct";
import ProductDetail from "./pages/productDetail";
import MyCart from "./pages/myCart";
import NewBrand from "./pages/newBrand";
import LogIn from "./pages/logIn";
import SignUp from "./pages/signUp";

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
                path: "/brand/new",
                element: <NewBrand />,
            },
            {
                path: "/products/:id",
                element: <ProductDetail />,
            },
            {
                path: "/carts",
                element: <MyCart />,
            },
            {
                path: "/login",
                element: <LogIn />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            }
        ]
    }
])

export default router