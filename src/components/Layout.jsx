import React from 'react'
import { Footer, Navbar, CopyRight } from ".";

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