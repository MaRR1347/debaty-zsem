import React from "react";
import "./ladder.scss";

import Background from "../components/background.jsx";
import Navbar from "../components/nav.jsx";
import Footer from "../components/footer.jsx";

export default function Ladder() {
    return (
        <>
            <Background />
            <Navbar />
            <p>Harmonogram zostanie umieszczony po zakończeniu rejestracji</p>
            <Footer />
        </>
    )
}