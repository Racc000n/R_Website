import './ArtPage.css'
import Gallery from './ArtTab.tsx';

import {useState} from "react"; 

function ArtPage() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index : any) => {
        setToggleState(index);
    }

    return (
        <>

        <div className="idk">

        <div className="c">

        <h2>Art</h2>
        <p>Which constellation should we explore?</p>

        </div>

            <div className="bloc-tabs">

                {/*<img className="line" src={"/src/ArtPage/Assets/tabs/line.png"} width="50%" /> */} 

                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                 onClick={() => toggleTab(1)}>     
            
                 <img src={"/R_Website/src/ArtPage/Assets/tabs/star1.png"} width="150%" />
                 <img className="h" src={"/R_Website/src/ArtPage/Assets/tabs/star1_hover.gif"} width="150%"/>
                 <p>All</p>
                 </div>

                <div className={toggleState === 2? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}>

                <img src={"/R_Website/src/ArtPage/Assets/tabs/star2.png"} width="70%" />
                <img className="h" src={"/R_Website/src/ArtPage/Assets/tabs/star2_hover.gif"} width="70%"/>
                 <p>Illustration</p>
                </div>

                <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                 onClick={() => toggleTab(3)} >

                <img src={"/R_Website/src/ArtPage/Assets/tabs/star3.png"} width="70%" />
                <img className="h" src={"/R_Website/src/ArtPage/Assets/tabs/star3_hover.gif"} width="70%"/>
                 <p>Character</p>
                 </div>

                <div className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                 onClick={() => toggleTab(4)} > 

                <img src={"/R_Website/src/ArtPage/Assets/tabs/star4.png"} width="100%" />
                <img className="h" src={"/R_Website/src/ArtPage/Assets/tabs/star4_hover.gif"} width="100%"/>
                 <p>Study</p>
                </div>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-content" : "content"}>
                    <Gallery cat={"all"}/>
                </div>

                <div className={toggleState === 2 ? "content active-content" : "content"}>
                    <Gallery cat={"Ill"}/>
                </div>

                <div className={toggleState === 3 ? "content active-content" : "content"}>
                    <Gallery cat={"Ch"}/>
                </div>

                <div className={toggleState === 4 ? "content active-content" : "content"}>
                    <Gallery cat={"St"}/>
                </div>

            <div/>
        </div> 
        </div> 
        </>
    );
}

export default ArtPage;