import './ArtInfo.css'
import { useParams } from 'react-router-dom';
import artIll from './ArtData.tsx'; 
import img from "/src/ArtPage/Assets/XavierGame.PNG"; 


function Img({data, artId}) {

    return (
        <>
        <div> 
        <img src={img} alt={data.title} width="100%" />
        </div>
        </>
    );
}

function ArtInfo() {

    const params = useParams(); 
    const id = params.artId;
    const data = artIll[id];

    console.log(data.img); 

    return (
        <>
        <div className="container"> 
        <div className="info"> 
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