import React, { useState } from "react";
import "./background.scss";

export default function Background() {
    const [cols, setCols] = useState(Math.ceil((window.innerWidth) / 100));
    const [rows, setRows] = useState(Math.ceil((window.innerHeight) / 100));
    const SVGS = ['/background/arrow.svg', '/background/circle.svg', '/background/circle-dashed.svg', '/background/line.svg', '/background/plus.svg'];
    let svgArray = [];

    // window.addEventListener('resize', SetGridSize);
    // RandomSVG();
    // RandomSVG();

    // function SetGridSize() {
    //     setCols((window.innerWidth) / 100);
    //     setRows((window.innerHeight) / 100);
    // }
    function RandomSVG() {
        for (let i = 1; i <= cols; i++) {
            for (let j = 1; j <= rows; j++) {
                let r = Math.floor(Math.random(1) * SVGS.length * 2);
                svgArray[i * j] = r;
            }
        }
    }
    return (
        <>
            <div id="background-container" style={{
                'gridTemplateColumns': `repeat(${cols}, 1fr)`,
                'gridTemplateRows': `repeat(${rows}, 1fr)`
            }}>
                {RandomSVG()}
                {/* {(() => {
                    if (svgArray.length == 0){
                        alert("Pusta jest jak twój łeb");
                    } else alert(svgArray[1]);
                })()} */}
                {svgArray.map(function (val, key) {
                    if (val < SVGS.length) {
                        return (
                            <img key={key} src={SVGS[val]} style={{
                                gridColumn: `${(key % cols)}`,
                                gridRow: `${Math.floor(key / cols)}`
                            }}
                            />
                        );
                    }
                })}     

            </div>
        </>
    )
}
