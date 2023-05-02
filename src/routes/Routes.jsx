import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/Blogs/Blog";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Recipes from "../pages/Recipes/Recipes";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: "*",
                element: <Error></Error>
            },
            {
                path: "/recipes/:id",
                element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
                loader: ({params}) => fetch(`https://chef-recipe-hunter-server-side-shuvakarmakar.vercel.app/recipes/${params.id}`)
            }
        ]
    },
]);

export default router;