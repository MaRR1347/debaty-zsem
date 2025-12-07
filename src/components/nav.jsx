import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";

export default function Navbar(activePage) {
    activePage = activePage.activePage;

    function toggleVisibility(name) {
        document.querySelector(`.${name}`).classList.toggle("visible");
    }
    
    document.ontouchend = () => {
        if (document.querySelector(`.nav-links`).classList.contains("visible")) {
            setTimeout(() => {
                document.querySelector(`.nav-links`).classList.remove("visible");
            }, 10
            )
        }
    }

    return (
        <>
            <section className="nav-container">
                <section className="nav-outline" onClick={() => toggleVisibility("nav-links")} />
                <section className="nav-content">
                    <section className="nav-home">
                        <Link to="/debaty-zsem/" className={`${activePage == "home" ? "active" : ""}`}><span className="oswald-font font-700">Debaty</span>{'\u00A0'}<span className="oswald-font font-400">ZSEM</span></Link>
                    </section>
                    <nav className="nav-links">
                        <Link className={`${activePage == "register" ? "active" : ""}`} to="/debaty-zsem/rejestracja">Rejestracja</Link>
                        <Link className={`${activePage == "ladder" ? "active" : ""}`} to="/debaty-zsem/harmonogram">Harmonogram</Link>
                        <Link className={`${activePage == "rules" ? "active" : ""}`} to="/debaty-zsem/zasady">Zasady</Link>
                        <Link className={`${activePage == "info" ? "active" : ""}`} to="/debaty-zsem/regulamin">Regulamin</Link>
                    </nav>
                </section>
            </section>
        </>
    );
}
