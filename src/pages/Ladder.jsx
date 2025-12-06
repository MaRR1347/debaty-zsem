import React from "react";
import "./ladder.scss";

import Background from "../components/background.jsx";
import Navbar from "../components/nav.jsx";
import Footer from "../components/footer.jsx";

export default function Ladder() {
    return (
        <>
            <Background />
            <Navbar activePage="ladder"/>

            <main>
                <p>Harmonogram zostanie umieszczony po zakończeniu rejestracji</p>
            </main>

            <section className='footer-sticky'>
            <Footer />
            </section>
        </>
    )
}