//TO DO: 
//Make images clickable
//Have imgs actually save info about image

import './ArtPage.css'

function Img({img, title, onImgClick, val}) {
    
    return (
        <>
        <img src={img} alt={title} width="100%" onClick={onImgClick}></img>
        </>
    );
}

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
    const col0 = []
    const col1 = []
    const col2 = []
    const col3 = []

    function onImgClick() {

    }

    for (let i = 0; i < artIll.length; i++) {
        // Put in correct container/ sorting imgs into containers
        if (i % 4 == 0)
        {
            col0.push(<img src={artIll[i].img} alt={artIll[i].title} width="100%" onClick={onImgClick}/>);
        }
        if (i % 4 == 1)
        {
            col1.push(<img src={artIll[i].img} alt={artIll[i].title} width="100%" />);
        }
        if (i % 4 == 2)
        {
            col2.push(<img src={artIll[i].img} alt={artIll[i].title} width="100%" />);
        }
        if (i % 4 == 3)
        {
            col3.push(<img src={artIll[i].img} alt={artIll[i].title} width="100%" />);
        }
    }

    //FOR FUTURE ME: say you want to find info from main array about an img use formula
    //( row * 4) + col # = array pos 

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






        {/*Below works
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

        {*/}
        </>


    );
}

export default Gallery;