"use strict";
let crown;
let visor;

document.addEventListener("DOMContentLoaded", start);


let currentColor = "yellow";


async function start(){
    let response = await fetch("assets/cap-01.svg");
    let mySvgData = await response.text();
    document.querySelector("section").innerHTML = mySvgData;
    startManipulationTheSvg();
}


function startManipulationTheSvg() {
    crown = document.querySelector("#crown");
    visor = document.querySelector("#visor");
    console.log("crown", crown);
    console.log("visor", visor);
    console.log("startManipulationTheSvg");
    init();
}


function setColor(element, colorString) {
    console.log("setColor", element);
    console.log(element);
    console.log("colorString",colorString);
    element.style.fill = colorString;
}



function init() {
    console.log("init");
    setColor(crown, "hsl(350, 100%, 17%)");
    setColor(visor, "hsl(350, 100%, 15%)");

    crown.addEventListener("click", (event) => {
        setColor(event.target, currentColor);
        console.log(event.target);
    })

    visor.addEventListener("click", (event) => {
        setColor(event.target, currentColor);
        console.log(event.target);

    })

    document.querySelectorAll(".color-selector").forEach(element => {
        element.addEventListener("click", event => {
            currentColor = event.target.style.backgroundColor;
        })
    })

};

