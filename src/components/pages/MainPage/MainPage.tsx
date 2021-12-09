import React from "react";
import { About } from "../../About/About";
import { Coins } from "../../Coins/Coins";
import { Footer } from "../../Footer/Footer";
import { Header } from "../../Header/Header";
import { Hero } from "../../Hero/Hero";

export const MainPage = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Hero />
                <About />
                <Coins />
            </main>
            <Footer />
        </>
    )
}