import React from "react";
import Footer from "./footer/footer";
import Header from "./header/header";

interface Props {
    children: React.ReactNode
}

const AppLayout: React.FC<Props> = ({children}) => {
    return <div className="app-layout">
        <Header/>
        <main> {children} </main>
        <Footer/>
    </div>
}

export default AppLayout;