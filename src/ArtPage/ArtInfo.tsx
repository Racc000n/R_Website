import './ArtInfo.css'
import { useParams } from 'react-router-dom';
import artIll from './ArtData.tsx'; 
import {Link} from "react-router-dom"


function Img({data, artId}) {

    return (
        <>
        <div> 
        <img src={data.img} alt={data.title} width="100%" />
        </div>
        </>
    );
}

function ArtInfo() {

    const params = useParams(); 
    const id = params.artId;
    const data = artIll[id];

    window.scrollTo(0, 0);

    return (
        <>
        <div className="container"> 
        <div className="info"> 
        <Link to={"/"}> 
        <button> Go Back </button>
        </Link>
        <h2> Title: {data.title} </h2>
        <h2> Medium: {data.medium} </h2>
        <h2> Description: {data.desc} </h2>
        </div>

        <div className="img"> 
        <Img data= {data} artId={id}/> 
        </div>
        </div> 
        </>

        
    );
}

export default ArtInfo;