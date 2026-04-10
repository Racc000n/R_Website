import './ArtTab.css'
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

function Gallery({cat}) {

    const star = ["/src/ArtPage/Assets/stars/Star1.png", 
                    "/src/ArtPage/Assets/stars/Star2.png",
                    "/src/ArtPage/Assets/stars/Star3.png",
                    "/src/ArtPage/Assets/stars/Star4.png",
                    "/src/ArtPage/Assets/stars/Star5.png",
                    "/src/ArtPage/Assets/stars/Star6.png"
    ];  

    //containers for each img 
    let col0 = []
    let col1 = []
    let col2 = []
    let col3 = []


    let col = 0; 
    let j = 0; 

    for (let i = 0; i < artIll.length; i++){
    
        if ( artIll[i].type == cat ||  cat == "all")
        {
            console.log(i); 
        // Put in correct container/ sorting imgs into containers
            if (col % 4 == 0)
            {
                if(j % 3 != 0)
                {
                    col0.push(<Img data={artIll[i]} artId={i} />); 
                }
                else{
                    col0.push(<img src={star[0]} width="100%" />);
                    i--;
                }
                   
            }
            if (col % 4 == 1)
            {
                if(j % 3 != 0)
                {
                    col1.push(<Img data={artIll[i]} artId={i} />);
                }
                else {
                    col1.push(<img src={star[1]} width="100%" />);
                    i--;
                }
                
            }
            if (col % 4 == 2)
            {
                if(j % 3 != 0)
                {
                    col2.push(<Img data={artIll[i]} artId={i} />);
                }
                else {
                    col2.push(<img src={star[2]} width="100%" />);
                    i--;
                }
                
            }
            if (col % 4 == 3)
            {
                if(j % 3 != 0)
                {
                    col3.push(<Img data={artIll[i]} artId={i} />);
                }
                else {
                    col3.push(<img src={star[3]} width="100%" />);
                    i--;
                }
            }
            col++; 
            j++; 
        }
    }

    return (
        <>
        <div className="gallery"> 

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