import React from "react";
import "./rules.scss";

import Background from "../components/background.jsx";
import Navbar from "../components/nav.jsx";
import Footer from "../components/footer.jsx";

export default function Rules() {
    return (
        <>
            <Background />
            <Navbar activePage="rules" />

            <main className="rules-main">
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

                </section>

                <h2>Przebieg debaty</h2>

                <section className="specific-rules">
                    <section className="stage-card">
                        <section className="stage-name first-stage-name">
                            <p>ETAP 1</p>
                            <span/>
                        </section>
                        <h3>Wprowadzenie</h3>
                        <section className="stage-content">
                            <h4>Kolejność mówców</h4>
                            <section className="stage-table">
                                <ul>
                                    <li>Mówca 1 propozycji</li>
                                    <li>Mówca 1 opozycji</li>
                                </ul>
                                <p>Starają się zapoznać widownię i jury z tematem i wymienić po krótce argumenty</p>
                            </section>
                            <hr />

                            <section className="stage-table">
                                <ul>
                                    <li>Mówca 2 propozycji</li>
                                    <li>Mówca 2 opozycji</li>
                                </ul>
                                <p>Rozwijają wymienione argumenty</p>
                            </section>
                            <hr />

                            <section className="stage-table">
                                <ul>
                                    <li>Mówca 3 propozycji</li>
                                    <li>Mówca 3 opozycji</li>
                                </ul>
                                <p>Rozwijają dalsze argumenty i kontrują argumenty oponentów</p>
                            </section>
                            <p>Każda wypowiedź trwa maksymalnie 3 minuty</p>
                        </section>
                    </section>

                    <section className="stage-card">
                        <section className="stage-name">
                            <p>ETAP 2</p>
                            <span />
                        </section>
                        <h3>Pytania drużynowe</h3>
                        <section className="stage-content">
                            <p>Drużyny zadają sobie nawzajem pytania:
                                Każdy może zadać jedno pytanie i każdy może otrzymać jedno pytanie (łącznie 3 pytania od drużyny)</p>

                            <p>*Może się pojawić także czwarte pytanie (ogólne) - do odpowiedzi zgłasza się dowolny oponent</p>
                            <p>Każdy uczestnik ma:</p>
                            <ul>
                                <li>30 sekund na zadanie pytania</li>
                                <li>60 sekund na odpowiedź</li>
                                <li>20 sekund na ripostę</li>
                            </ul>
                        </section>
                    </section>

                    <section className="stage-card">
                        <section className="stage-name">
                            <p>ETAP 3</p>
                            <span />
                        </section>

                        <h3>Pytania od jury i prowadzących</h3>
                        <section className="stage-content align-center">
                            <p>Drużyny otrzymują po 3 pytania nawiązujące do ich stanowiska</p>
                            <p>Każdy mówca musi zgłosić się do jednego pytania</p>
                            <p>Czas na odpowiedź to 90 sekund</p>
                            <p>*Pytania w pierwszej kolejności zadawane są od jury, a następnie wybrane spośród pytań ankietowanych</p>
                        </section>
                    </section>

                    <section className="stage-card">
                        <section className="stage-name">
                            <p>ETAP 4</p>
                            <span />
                        </section>

                        <h3>"Familiada"</h3>
                        <section className="stage-content align-center">
                            <p>Z obu drużyn wylosowane osoby stają do pojedynku 1 na 1</p>
                            <p>Prowadzący zadaje pytanie ogólne - kto pierwszy się zgłosi, ma na odpowiedź 40 sekund </p>
                            <p>Następnie odpowiada jego przeciwnik, który ma jedynie 20 sekund </p>
                            <p>Każdy mówca bierze udział w pojedynku dokładnie raz</p>
                        </section>
                    </section>

                    <section className="stage-card">
                        <section className="stage-name">
                            <p>ETAP 5</p>
                            <span />
                        </section>

                        <h3>Pytania od publiczności</h3>
                        <p>Nie ma sztywnego limitu czasowego, lecz warto pamiętać, że czym bardziej zwięzła i konkretna odpowiedź, tym więcej punktów można uzyskać</p>
                    </section>

                    <section className="stage-card">
                        <section className="stage-name last-stage-name">
                            <p>ETAP 6</p>
                            <span />
                        </section>
                        <h3>Swobodna dyskusja</h3>
                    </section>
                </section>
            </main>

            <Footer />
        </>
    )
}