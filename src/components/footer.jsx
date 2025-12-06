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
                        <a href="mailto:debaty@zsem.edu.pl" className="zsem_mail">debaty@zsem.edu.pl</a>
                    </div>
                </div>
                <div>
                    <div className="socials">
                        <div>
                            <span>
                                <span className="logo-background"/>
                                <img src="/debaty-zsem/logos/logo_zsem.png" alt="ZSEM" className="social-logo" />
                            </span>
                            <div className="social_card ">
                                <span>
                                    <img src="/debaty-zsem/icons/website.svg" width="16" height="16" viewBox="0 0 16 16" />
                                    <a href="https://zsem.edu.pl">Strona</a>
                                </span>
                                <span>
                                    <img src="/debaty-zsem/icons/instagram.svg" width="16" height="16" viewBox="0 0 16 16" />
                                    <a href="https://www.instagram.com/zsemns/">Instagram</a>
                                </span>
                                <span>
                                    <img src="/debaty-zsem/icons/facebook.svg" width="16" height="16" viewBox="0 0 16 16" />
                                    <a href="https://www.facebook.com/profile.php?id=100063594517495">Facebook</a>
                                </span>
                            </div>
                        </div>
                        <div>
                            <span>
                                <span className="logo-background"/>
                                <img src="/debaty-zsem/logos/logo_zsemtv.png" alt="ZSEM" className="social-logo" />
                            </span>
                            <div className="social_card ">
                                <span>
                                    <img src="/debaty-zsem/icons/instagram.svg" width="16" height="16" viewBox="0 0 16 16" />
                                    <a href="https://www.instagram.com/zsemtv/">Instagram</a>
                                </span>
                                <span>
                                    <img src="/debaty-zsem/icons/facebook.svg" width="16" height="16" viewBox="0 0 16 16" />
                                    <a href="https://www.facebook.com/profile.php?id=100063594517495">Facebook</a>
                                </span>
                                <span>
                                    <img src="/debaty-zsem/icons/youtube.svg" width="16" height="16" viewBox="0 0 16 16" />
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