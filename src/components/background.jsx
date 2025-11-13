import React, { useState } from "react";
import "./background.scss";

export default function Background() {
    const SVGS = ['/background/arrow.svg', '/background/circle.svg', '/background/circle-dashed.svg', '/background/line.svg', '/background/plus.svg', '/icons/people.png', '/icons/speaker.png', '/icons/user-avatar.png'];
    const cols = Math.ceil((window.innerWidth) / 100);
    const rows = Math.ceil((window.innerHeight) / 100);
    let svgArray = [];

    function RandomSVG() {
        for (let i = 1; i <= cols * rows; i++) {
            let r = Math.floor(Math.random(1) * SVGS.length * 3);
            svgArray[i] = r;
        }
    }
    return (
        <>
            <div id="background-container" style={{
                'gridTemplateColumns': `repeat(${cols}, 1fr)`,
                'gridTemplateRows': `repeat(${rows}, 1fr)`
            }}>
                {RandomSVG()}
                {svgArray.map(function (val, key) {
                    if (val < SVGS.length) {
                        let r = Math.round(Math.random() * 7) * 45;
                        return (
                            <section key={key} style={{
                                gridArea: `${Math.ceil((key + 1) / cols)} / ${(key % cols) + 1}`,
                                '--rotation': `${r}deg`
                            }}
                            draggable="false">
                                <img src={SVGS[val]} draggable="false"/>
                            </section>
                        );
                    }
                })}

            </div>
        </>
    )
}
