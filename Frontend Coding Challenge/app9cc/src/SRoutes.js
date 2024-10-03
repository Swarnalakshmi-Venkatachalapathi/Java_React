import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CustomerMenu from "./CustomerMenu";
import Menu from "./Menu";
import UpdateBook from "./UpdateBook";

const SRoutes = () =>
{

    return(<>

    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/customer-menu" element={<CustomerMenu/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/update" element={<UpdateBook/>}/>
    </Routes>
    </>)
}
export default SRoutes;