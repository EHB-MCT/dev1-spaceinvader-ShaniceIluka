"use strict";

alert("Draw your space invader here");
drawLine();

function drawLine(){

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");



context.beginPath();

context.fillStyle = "black" ;
context.fillRect (0, 0, 300, 300);
context.rect(30, 80, 50, 90);
context.rect(125,30,50,90);
context.rect(220, 80, 50, 90);
context.rect(30,220,240,50); 


context.fillStyle = "#00cc00";
context.fill();
context.closePath();

} 
