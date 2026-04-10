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
        {type: "Ch", img: "/src/ArtPage/Assets/Aiko24.jpg", title: "Yearly Sketch", medium: "Watercolour", desc: "A yearly sketch I do to see how much I have improved in character drawing."},
        {type: "Ch", img: "/src/ArtPage/Assets/AngelLaurent.jpg", title: "Half a Contract", medium: "Digital", desc: "Two of my original characters."},
        {type: "Ill", img: "/src/ArtPage/Assets/BellTree.jpg", title: "Bell Tree", medium: "Digital", desc: "Concept art for a game."},
        {type: "Ill", img: "/src/ArtPage/Assets/BlueJack.jpg", title: "Wizard", medium: "Digital", desc: "Art of an original character."},
        {type: "St", img: "/src/ArtPage/Assets/BrownStillLife.jpg", title: "Still Life", medium: "Watercolour", desc: "Still life with various items."},
        {type: "Ch", img: "/src/ArtPage/Assets/CupidTulip.jpg", title: "Overgrowing", medium: "Watercolour", desc: "Experimenting with style."},
        {type: "Ill", img: "/src/ArtPage/Assets/DistantTravels.jpg", title: "Traveling to Distant Lands", medium: "Acrylic", desc: "Close your eyes, and drift off, let these soft gold clouds, carry you to the Kingdom of Dreams."},
        {type: "Ill", img: "/src/ArtPage/Assets/DreamKin.jpg", title: "Kingdom of Dreams", medium: "Pencil", desc: "I've been there many times. In the Kingdom of Dreams, you can talk to your past and your future."},
        {type: "Ill", img: "/src/ArtPage/Assets/Dreamland.jpg", title: "Where Do All Our Lost Items Go?", medium: "Watercolour", desc: "Where do all our lost items go? What about our old dwindling memories? I wish to think they travel far far away. Making home in a distant planet. I wish to visit this planet sometime and find all that was once lost."},
        {type: "Ill", img: "/src/ArtPage/Assets/FinalEscort.jpg", title: "Final Escort Concept", medium: "Digital", desc: "Concept art for a video game"},
        {type: "Ill", img: "/src/ArtPage/Assets/FireBird.jpg", title: "The Law of the Fire Bird Hunter", medium: "Oil", desc: "Let go of what you see and trust that what is yours will come."},
        {type: "St", img: "/src/ArtPage/Assets/GreenStill.jpg", title: "Green Still Life", medium: "Oil", desc: "A study in oil."},
        {type: "Ill", img: "/src/ArtPage/Assets/IllustConcepts.png", title: "Final Escort - Landmark Concepts", medium: "Digital", desc: "Concept art for a video game"},
        {type: "Ch", img: "/src/ArtPage/Assets/Kiju23.jpg", title: "Star Knight", medium: "Digital", desc: "Art of an original character."},
        {type: "Ch", img: "/src/ArtPage/Assets/Knights.jpg", title: "Knights", medium: "Watercolour", desc: "Concept sketch in sketchbook."},
        {type: "Ch", img: "/src/ArtPage/Assets/Princess.png", title: "Final Escort - Princess", medium: "Digital", desc: "Concept art of a character in a video game."},
        {type: "Ill", img: "/src/ArtPage/Assets/RiverOfLife.jpg", title: "River of Life", medium: "Watercolour", desc: "With this little boat, I will drift through the ebbs and flows of life."},
        {type: "Ill", img: "/src/ArtPage/Assets/Star.png", title: "I Can Make Stars", medium: "Digital", desc: "Art of an original character."},
        {type: "Ch", img: "/src/ArtPage/Assets/ThistleJack.jpg", title: "Last Time", medium: "Watercolour", desc: "Sketch in sketchbook."},
        {type: "Ill", img: "/src/ArtPage/Assets/ThreeGaurdians.jpg", title: "The Three Guardians", medium: "Watercolour", desc: "Art of an original character. Protected by three blue entities."},
        {type: "St", img: "/src/ArtPage/Assets/ThreeLilies.jpg", title: "Three White Lilies", medium: "Acrylic", desc: "Simple still life of lilies. "},
        {type: "St", img: "/src/ArtPage/Assets/WhiteStill.jpg", title: "White Still Life", medium: "Oil", desc: "Still life with varying items. The goal was to portray white in a unique way."},
        {type: "Ch", img: "/src/ArtPage/Assets/Xavier.jpg", title: "Xavier", medium: "Digital", desc: "Art of an original character."},
        {type: "Ill", img: "/src/ArtPage/Assets/XavierGame.PNG", title: "Forest of Memories", medium: "Digital", desc: "Concept art for a video game."},
        {type: "Ch", img: "/src/ArtPage/Assets/YAC.jpg", title: "Character Line Up Sketch", medium: "Digital", desc: "Art of original characters."},
    ]


export default artIll;
