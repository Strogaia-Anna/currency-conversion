import {
    createBrowserRouter
} from "react-router-dom";

import { Main } from "./components/Main";
import { HomePage } from "./components/HomePage";
import {CurrencyConverter} from "./components/CurrencyConverter";


export const router = createBrowserRouter([
    {
        path: "/currency-conversion/",
        exact: true,
        element: <Main/>,
        children: [
            {
                index: true,
                path: "/currency-conversion/HomePage",
                exact: true,
                element: <HomePage/>,
            },
            {
                path: "/currency-conversion/CurrencyConverter",
                exact: true,
                element: <CurrencyConverter/>,
            },
        ]
    },
]);