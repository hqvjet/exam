import React from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"

//components
import Home from "./page/Home";
import Result from "./page/Result";
import User from "./page/Ebook";

export default function Router() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/result' element={<Result/>}/>
                    <Route path='/ebook/:id' element={<User/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )

}