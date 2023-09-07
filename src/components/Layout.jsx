import React from 'react'
import { Footer, Navbar, CopyRight } from "./index";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
            <CopyRight/>
        </div>
    )
}

export {Layout}