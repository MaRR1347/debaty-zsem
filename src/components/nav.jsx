import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
        <>
            <div className="nav-container">
                <div> 
                    <Link to="/debaty-zsem/"><span className="oswald-font font-700">Debaty</span><span className="oswald-font font-400">ZSEM</span></Link>
                </div>
                <nav>
                    <span><Link to="/debaty-zsem/rejestracja">Rejestracja</Link></span>
                    <span><Link to="/debaty-zsem/harmonogram">Harmonogram</Link></span>
                    <span><Link to="/debaty-zsem/zasady">Zasady</Link></span>
                    <span><Link to="/debaty-zsem/regulamin">Regulamin</Link></span>
                </nav>
            </div>
        </>
    );
}
