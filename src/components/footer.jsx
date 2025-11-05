import React from "react";
import "./footer.scss";

export default function Footer() {

    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
            if (event.target.checked) {
                event.target.nextElementSibling?.classList.add('active');
            } else {
                event.target.nextElementSibling?.classList.remove('active');
            }
        });
    });

    return (
        <>
            <footer>
                <div>
                    <p className="header">Kontakt</p>
                    <div>
                        <p>debaty@zsem.edu.pl</p>
                    </div>
                </div>
                <div>
                    {/* <p className="header">Odwiedź</p> */}
                    <div className="socials">
                        <div>
                            <img src="/logos/zsem.png" alt="ZSEM" />
                            <div className="social_card ">
                                <span>
                                    <img src="/icons/website.svg" width="16" height="16" viewBox="0 0 16 16" />
                                    <a href="https://zsem.edu.pl">Strona</a>
                                </span>
                                <span>
                                    <img src="/icons/facebook.svg" width="16" height="16" viewBox="0 0 16 16" />
                                    <a href="https://www.facebook.com/profile.php?id=100063594517495">Facebook</a>
                                </span>
                            </div>
                        </div>
                        <div>
                            <img src="/logos/logo_zsemtv.png" alt="ZSEM" />
                            <div className="social_card ">
                                <span>
                                    <img src="/icons/instagram.svg" width="16" height="16" viewBox="0 0 16 16" />
                                    <a href="https://www.instagram.com/zsemtv/">Instagram</a>
                                </span>
                                <span>
                                    <img src="/icons/facebook.svg" width="16" height="16" viewBox="0 0 16 16" />
                                    <a href="https://www.facebook.com/profile.php?id=100063594517495">Facebook</a>
                                </span>
                                <span>
                                    <img src="/icons/youtube.svg" width="16" height="16" viewBox="0 0 16 16" />
                                    <a href="https://www.youtube.com/@ZSEMTVOFFICIAL">YouTube</a>
                                </span>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </footer>
        </>
    );
}