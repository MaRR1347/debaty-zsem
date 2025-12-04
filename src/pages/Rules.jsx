import React from "react";
import "./rules.scss";

import Background from "../components/background.jsx";
import Navbar from "../components/nav.jsx";
import Footer from "../components/footer.jsx";

export default function Rules() {
    return (
        <>
            {/* <Background /> */}
            <Navbar />

            <main>
                <section className="general-rules">
                    <h2>Informacje ogólne</h2>
                    <section className="rule-card">
                        <img src="/debaty-zsem/icons/people.png" alt="people" />
                        <p>W debatach rywalizują ze sobą 2 drużyny, każda składająca się z 3 osób. </p>
                        <img src="/debaty-zsem/icons/people.png" alt="people" />
                    </section>

                    <section className="rule-card">
                        <img src="/debaty-zsem/icons/user-avatar.png" alt="lider" />
                        <p>W każdej drużynie znajduje się lider, który reprezentuje swój zespół w rozmowach z organizatorami</p>
                        <img src="/debaty-zsem/icons/user-avatar.png" alt="lider" />
                    </section>

                    <section className="rule-card">
                        <p>Po wysłuchaniu tematu, uczestnicy mają minutę, by wybrać stanowisko - propozycję lub opozycję. (Propozycja - broni tezy zadanej w temacie
                            Opozycja - zaprzecza tej tezie)</p>
                    </section>

                    <section className="rule-card">
                        <p>
                            W przypadku braku zgody pomiędzy drużynami - ich stanowiska będą wyłaniane poprzez rzut monetą tuż przed rozpoczęciem debaty!
                        </p>
                    </section>
                    <section className="rule-card">

                    </section>

                </section>
                <section className="specific-rules">
                    <h2>Przebieg debaty</h2>
                    <section className="stage-card">
                        <h3>Wprowadzenie</h3>
                        <section>
                            <h4>Kolejność mówców</h4>
                            <section className="flex-row-align">
                                <ul>
                                    <li>Mówca 1 propozycji</li>
                                    <li>Mówca 1 opozycji</li>
                                </ul>
                                <p>Starają się zapoznać widownię i jury z tematem i wymienić po krótce argumenty</p>
                            </section>
                            <hr />

                            <section className="flex-row-align">
                                <ul>
                                    <li>Mówca 2 propozycji</li>
                                    <li>Mówca 2 opozycji</li>
                                </ul>
                                <p>Rozwijają wymienione argumenty</p>
                            </section>
                            <hr />

                            <section className="flex-row-align">
                                <ul>
                                    <li>Mówca 3 propozycji</li>
                                    <li>Mówca 3 opozycji</li>
                                </ul>
                                <p>Rozwijają dalsze argumenty i kontrują argumenty oponentów</p>
                            </section>
                        </section>
                    </section>
                    <section className="stage-card">
                        <p>Ciąg dalszy nastąpi</p>
                    </section>
                    <section className="stage-card">

                    </section>
                    <section className="stage-card">

                    </section>
                    <section className="stage-card">

                    </section>
                    <section className="stage-card">

                    </section>
                </section>
            </main>

            <Footer />
        </>
    )
}