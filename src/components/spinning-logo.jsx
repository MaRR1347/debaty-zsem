import React from "react";
import "./spinning-logo.scss";

export default function SpinningLogo() {

    return (
        <>
            <div className="logo-container">
                <img className="logo-gear" src="/logos/logo_zsem_gear.png" alt="ni ma go"/>
                <img className="logo-content" src="/logos/logo_zsem_content.png" alt="ukradli logo"/>
            </div>
        </>
    );
}