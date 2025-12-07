import React from "react";
import "./ladder.scss";

import Background from "../components/background.jsx";
import Navbar from "../components/nav.jsx";
import Footer from "../components/footer.jsx";

export default function Ladder() {
    return (
        <>
            <Background />
            <Navbar activePage="ladder" />

            <main className="ladder-main">
                <h3>Harmonogram zostanie umieszczony po zakończeniu rejestracji</h3>
            </main>

            <Footer />
        </>
    )
}