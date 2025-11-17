import React from "react";
import "./info.scss";

import Background from "../components/background.jsx";
import Navbar from "../components/nav.jsx";
import Footer from "../components/footer.jsx";

export default function Info() {
    return (
        <>
            <Background />
            <Navbar />

            <main className="info-main">
                <section className="info-links">
                    <a href='/regulamin.pdf' className="red-underline">
                        <img src="/icons/form.png" alt="form icon" />
                        <p>Regulamin</p>
                    </a>
                    <a href='' className="red-underline">
                        <img src="/icons/form.png" alt="form icon" />
                        <p>Karta Jury</p>
                    </a>
                    <a href='' className="red-underline">
                        <img src="/icons/form.png" alt="form icon" />
                        <p>Karta Techniczna</p>
                    </a>
                </section>
            </main>

            <footer className="footer">
                <Footer />
            </footer>
        </>
    )
}