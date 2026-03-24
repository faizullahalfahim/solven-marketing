import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layout/HomeLayout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Contract from '../pages/Contract/Contract';


const router = createBrowserRouter ([
    {
        path: '/',
        element: <HomeLayout> </HomeLayout>,
        children: [
           {
             index: true,
            element: <Home></Home>
           },
           {
            path: "/about",
            element: <About> </About>

           } ,
           {
            path: "/contact",
            element: <Contract> </Contract>
           }
        ]

    }

]) 
  


export default router;