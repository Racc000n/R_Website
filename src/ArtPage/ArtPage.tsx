//TO DO: 
//Think of a way to computationally add images from a list into corresponding columns instead of 
//manually doing it all yourself!! 

import './ArtPage.css'
import { useRef } from 'react';

import React, { useState } from 'react';

function Img({img, title, medium, desc}) {
    return (
        <>
        <img src={img} width="100%"></img>
        </>
    );
}

function Col({img}) {
    return (
        <>
        <div className="column">{img} </div>
        </>
    );
}

function Gallery() {

    interface Art {
        type: string;
        img: string;
        title: string;
        medium: string;
        desc: string;
    }

    const artIll: Art[] = [
        { type: "Ill", img: "./Assets/XavierGame.PNG", title: "Misty setps", medium: "Digital", desc: "Digital piece, made as a backdrop for a game I have in the making."},
        { type: "Ill", img: "./Assets/Dreamland.jpg", title: "Three Pines", medium: "Watercolour", desc: "Digital piece, made as a backdrop for a game I have in the making."},
        { type: "Ill", img: "./Assets/DreamKin.jpg", title: "Dream Land", medium: "Digital", desc: "Digital piece, made as a backdrop for a game I have in the making."},
        { type: "Ill", img: "./Assets/Star.png", title: "How Stars are Born", medium: "Digital", desc: "Digital piece, made as a backdrop for a game I have in the making."},
    ]

    //create images and add to 
  for (let j = 0; j < artIll.length; j++) {

    const currArt = artIll[j];

    let img = document.createElement('img');
            img.src = currArt.img;
            img.style.width = "100%";
            img.title = currArt.title;
            //img.medium = currArt.medium; 
            //img.desc = currArt.desc;
            //img.addEventListener('click', PopOver);
            //img.addEventListener('mouseover', Blur);
            //img.addEventListener('mouseout', BlurOff);
            //document.getElementById("Ill").children[j % 4].appendChild(img);

  }

    return (
        <>
        <div>
        <h3> Illustration </h3>
        <p>London is the capital city of England.</p>

        <div className="row" id="Ill">
            <div className="column"> 
                <img src="src/ArtPage/Assets/XavierGame.PNG" alt="Girl in a jacket" width="100%"></img>
            </div>
            <div className="column"> 
                <img src="src/ArtPage/Assets/XavierGame.PNG" alt="Girl in a jacket" width="100%"></img>
            </div>
            <div className="column"> 
                <img src="src/ArtPage/Assets/XavierGame.PNG" alt="Girl in a jacket" width="100%"></img>
            </div>
            <div className="column"> 
                <img src="src/ArtPage/Assets/XavierGame.PNG" alt="Girl in a jacket" width="100%"></img>
            </div>
        </div>

        </div>




        </>


    );
}

export default Gallery;