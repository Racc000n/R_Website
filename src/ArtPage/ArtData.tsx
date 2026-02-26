// Author: Vic
// File Name: ArtData.tsx
// Project: R_wesbite
// Creation date: 10/2/2026
// Modified date: 
// Description: Keeps the array data of all art 
    interface Art {
        type: string;
        img: string;
        title: string;
        medium: string;
        desc: string;
    }

    //Main array where all Illustration arts will be put?
    //Will keep track of all information too 
    const artIll: Art[] = [
        {type: "Ch", img: "/src/ArtPage/Assets/Aiko24.jpg", title: "Yearly Sketch", medium: "Watercolour", desc: ""},
        {type: "Ch", img: "/src/ArtPage/Assets/AngelLaurent.jpg", title: "Half a Contract", medium: "Digital", desc: ""},
        {type: "Ill", img: "/src/ArtPage/Assets/BellTree.jpg", title: "Bell Tree", medium: "Digital", desc: ""},
        {type: "Ill", img: "/src/ArtPage/Assets/BlueJack.jpg", title: "Wizard", medium: "Digital", desc: ""},
        {type: "St", img: "/src/ArtPage/Assets/BrownStillLife.jpg", title: "Still Life", medium: "Watercolour", desc: ""},
        {type: "Ch", img: "/src/ArtPage/Assets/CupidTulip.jpg", title: "Overgrowing", medium: "Watercolour", desc: ""},
        {type: "Ill", img: "/src/ArtPage/Assets/DistantTravels.jpg", title: "Traveling to Distant Lands", medium: "Acrylic", desc: ""},
        {type: "Ill", img: "/src/ArtPage/Assets/DreamKin.jpg", title: "Kingdom of Dreams", medium: "Pencil", desc: ""},
        {type: "Ill", img: "/src/ArtPage/Assets/Dreamland.jpg", title: "Where Do All Our Lost Items Go?", medium: "Watercolour", desc: ""},
        {type: "Ill", img: "/src/ArtPage/Assets/FinalEscort.jpg", title: "Final Escort Concept", medium: "Digital", desc: ""},
        {type: "Ill", img: "/src/ArtPage/Assets/FireBird.jpg", title: "The Law of the Fire Bird Hunter", medium: "Oil", desc: ""},
        {type: "St", img: "/src/ArtPage/Assets/GreenStill.jpg", title: "Green Still Life", medium: "Oil", desc: ""},
        {type: "Ill", img: "/src/ArtPage/Assets/IllustConcepts.png", title: "Final Escort - Landmark Concepts", medium: "Digital", desc: ""},
        {type: "Ch", img: "/src/ArtPage/Assets/Kiju23.jpg", title: "Star Knight", medium: "Digital", desc: ""},
        {type: "Ch", img: "/src/ArtPage/Assets/Knights.jpg", title: "Knights", medium: "Watercolour", desc: ""},
        {type: "Ch", img: "/src/ArtPage/Assets/Princess.png", title: "Final Escort - Princess", medium: "Digital", desc: ""},
        {type: "Ill", img: "/src/ArtPage/Assets/RiverOfLife.jpg", title: "River of Life", medium: "Watercolour", desc: ""},
        {type: "Ill", img: "/src/ArtPage/Assets/Star.png", title: "I Can Make Stars", medium: "Digital", desc: ""},
        {type: "Ch", img: "/src/ArtPage/Assets/ThistleJack.jpg", title: "Last Time", medium: "Watercolour", desc: ""},
        {type: "Ill", img: "/src/ArtPage/Assets/ThreeGaurdians.jpg", title: "The Three Guardians", medium: "Watercolour", desc: ""},
        {type: "St", img: "/src/ArtPage/Assets/ThreeLilies.jpg", title: "Three White Lilies", medium: "Acrylic", desc: ""},
        {type: "St", img: "/src/ArtPage/Assets/WhiteStill.jpg", title: "White Still Life", medium: "Oil", desc: ""},
        {type: "Ch", img: "/src/ArtPage/Assets/Xavier.jpg", title: "Xavier", medium: "Digital", desc: ""},
        {type: "Ill", img: "/src/ArtPage/Assets/XavierGame.PNG", title: "Forest of Memories", medium: "Digital", desc: ""},
        {type: "Ch", img: "/src/ArtPage/Assets/YAC.jpg", title: "Character Line Up Sketch", medium: "Digital", desc: ""},
    ]


export default artIll;
