import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
 

    return (
        <>
            <div className="nav-container">
                <div> 
                    <Link to="/"><span>Debaty</span>ZSEM</Link>
                </div>
                <nav>
                    <span><Link to="/rejestracja">Rejestracja</Link></span>
                    <span><Link to="/harmonogram">Harmonogram</Link></span>
                    <span><Link to="/zasady">Zasady</Link></span>
                    <span><Link to="/regulamin">Regulamin</Link></span>
                </nav>
            </div>
        </>
    );
}

async function onClick() {
    const navigationPromise = navigate('/pages/rejestracja');
    await navigationPromise;
}