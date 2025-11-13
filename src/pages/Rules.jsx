import React from "react";
import "./rules.scss";

import Background from "../components/background.jsx";
import Navbar from "../components/nav.jsx";
import Footer from "../components/footer.js";

export default function Rules() {
    return (
        <>
        <Background />
            <Navbar />
            <header>Zasady debat</header>
            <main>
                <section className="rule-card">
                    <img src="/icons/people.png" alt="people" />
                    <p>
                        Drużyna składa się z 3 osób
                    </p>
                    <img src="/icons/people.png" alt="people" />
                </section>
            </main>
            <Footer />
        </>
    )
}