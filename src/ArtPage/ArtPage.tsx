//TO DO: 
//MAKE BLUR WHEN HOVERING OVER IMAGE
//Make title appear over blurr?

import './ArtPage.css'

//component that contains information about the image
function Img({data}) {

    //when clicked say title
    function onImgClick() {
    console.log(data.title)
    }

    return (
        <>
        <img src={data.img} alt={data.title} width="100%" onClick={ () => onImgClick()}/>
        </>
    );
}

//container for images
function Col({imgs}) {

    return (
        <> 
        <div className="column"> 
                {imgs}
        </div>
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

    //Main array where all Illustration arts will be put?
    //Will keep track of all information too 
    const artIll: Art[] = [
        { type: "Ill", img: "src/ArtPage/Assets/XavierGame.PNG", title: "Misty setps", medium: "Digital", desc: "Digital piece, made as a backdrop for a game I have in the making."},
        { type: "Ill", img: "src/ArtPage/Assets/Dreamland.jpg", title: "Three Pines", medium: "Watercolour", desc: "Digital piece, made as a backdrop for a game I have in the making."},
        { type: "Ill", img: "src/ArtPage/Assets/DreamKin.jpg", title: "Dream Land", medium: "Digital", desc: "Digital piece, made as a backdrop for a game I have in the making."},
        { type: "Ill", img: "src/ArtPage/Assets/Star.png", title: "How Stars are Born", medium: "Digital", desc: "Digital piece, made as a backdrop for a game I have in the making."},
        { type: "Ill", img: "src/ArtPage/Assets/DreamKin.jpg", title: "Dream Land", medium: "Digital", desc: "Digital piece, made as a backdrop for a game I have in the making."},
        { type: "Ill", img: "src/ArtPage/Assets/XavierGame.PNG", title: "Misty setps", medium: "Digital", desc: "Digital piece, made as a backdrop for a game I have in the making."},
        { type: "Ill", img: "src/ArtPage/Assets/Dreamland.jpg", title: "Three Pines", medium: "Watercolour", desc: "Digital piece, made as a backdrop for a game I have in the making."},
        { type: "Ill", img: "src/ArtPage/Assets/Star.png", title: "How Stars are Born", medium: "Digital", desc: "Digital piece, made as a backdrop for a game I have in the making."},
        { type: "Ill", img: "src/ArtPage/Assets/DreamKin.jpg", title: "Dream Land", medium: "Digital", desc: "Digital piece, made as a backdrop for a game I have in the making."},
        { type: "Ill", img: "src/ArtPage/Assets/Star.png", title: "How Stars are Born", medium: "Digital", desc: "Digital piece, made as a backdrop for a game I have in the making."},
    ]

    //containers for each img 
    let col0 = []
    let col1 = []
    let col2 = []
    let col3 = []

    for (let i = 0; i < artIll.length; i++) {
        // Put in correct container/ sorting imgs into containers
        if (i % 4 == 0)
        {
            col0.push(<Img data={artIll[i]}/>); 
        }
        if (i % 4 == 1)
        {
            col1.push(<Img data={artIll[i]}/>);
        }
        if (i % 4 == 2)
        {
            col2.push(<Img data={artIll[i]}/>);
        }
        if (i % 4 == 3)
        {
            col3.push(<Img data={artIll[i]}/>);
        }
    }

    return (
        <>
        <div> 
            <h3> Illustration </h3>
            <p>London is the capital city of England.</p>

            <div className="row" id="Ill">
                <Col imgs={col0}/> 
                <Col imgs={col1}/>
                <Col imgs={col2}/>
                <Col imgs={col3}/>
            </div>
        </div>
        </>


    );
}

export default Gallery;