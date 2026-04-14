//TODO: 
//1. Make background image for info 

import './ArtInfo.css'
import { useParams } from 'react-router-dom';
import artIll from './ArtData.tsx'; 
import {Link} from "react-router-dom"

    interface Art {
        type: string;
        img: string;
        title: string;
        medium: string;
        desc: string;
    }

function Img({data}: {data : Art}) {

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
    //@ts-ignore
    const data = artIll[id];

    window.scrollTo(0, 0);

    return (
        <>
        <div className="idkimg">
        <div className="container"> 
        <div className="info"> 
        <Link to={"/artpage"}> 
        <button> Go Back </button>
        </Link>
        <h2> Title: {data.title} </h2>
        <h2> Medium: {data.medium} </h2>
        <h2> Description: {data.desc} </h2>
        </div>

        <div className="img"> 
        <Img data= {data}/> 
        </div>
        </div> 
        </div>
        </>

        
    );
}

export default ArtInfo;