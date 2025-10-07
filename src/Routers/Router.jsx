import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Root/Root';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPages/ErrorPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [{
            index: true,
            path: "/",
            element: <Home></Home>
        }]
    },
]);

