import { createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Country from "./pages/Country";
import TuristCompanies from "./pages/TuristCompanies";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Homepage />
    },
    {
        path: '/:id',
        element: <Country />
    },
    {
        path: '/turist-companies',
        element: <TuristCompanies />
    }
   
])


export default router