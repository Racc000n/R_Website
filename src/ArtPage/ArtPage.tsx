//TO DO: 
//MAKE BLUR WHEN HOVERING OVER IMAGE
//Make title appear over blurr?

import './ArtPage.css'
import { BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
import artIll from './ArtData.tsx'; 

//component that contains information about the image
function Img({data, artId}) {
    const navigate = useNavigate();

    //when clicked say title
    function onImgClick() {
    console.log(artId);
    navigate(`/artpage/${artId}`); 
    }

    const onImgEnter = (evt) => {
    evt.currentTarget.firstElementChild.classList.add('blur'); 
    evt.currentTarget.lastElementChild.classList.add("unhide");

    }

    const onImgLeave = (evt) => {
    evt.currentTarget.firstElementChild.classList.remove('blur');  
    evt.currentTarget.lastElementChild.classList.remove("unhide");
    }

    return (
        <>
        <div className="img-container" onClick={ () => onImgClick() } onMouseEnter={onImgEnter} onMouseLeave={onImgLeave}> 
        <img src={data.img} alt={data.title} width="100%" />
            <h1 className="centered hide"> {data.title}</h1>
        </div>
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
    //containers for each img 
    let col0 = []
    let col1 = []
    let col2 = []
    let col3 = []

    for (let i = 0; i < artIll.length; i++) {
        // Put in correct container/ sorting imgs into containers
        if (i % 4 == 0)
        {
            col0.push(<Img data={artIll[i]} artId={i} />); 
        }
        if (i % 4 == 1)
        {
            col1.push(<Img data={artIll[i]} artId={i} />);
        }
        if (i % 4 == 2)
        {
            col2.push(<Img data={artIll[i]} artId={i} />);
        }
        if (i % 4 == 3)
        {
            col3.push(<Img data={artIll[i]} artId={i} />);
        }
    }

    return (
        <>
        <div className="gallery"> 
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