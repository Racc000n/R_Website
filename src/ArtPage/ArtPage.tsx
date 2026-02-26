import './ArtPage.css'
import { BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom';
import Gallery from './ArtTab.tsx';

import {useState} from "react"; 


function ArtPage() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <>

        <h2>Art</h2>
        <p>Which constolation should we explore?</p>

        <div className="container"/>

            <div className="bloc-tabs">
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                 onClick={() => toggleTab(1)}
                 >All</div>
                <div className={toggleState === 2? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
                > Illustration</div>
                <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                 onClick={() => toggleTab(3)}
                 > Characters</div>
                <div className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                 onClick={() => toggleTab(4)}
                 >Study</div>
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
        </>
    );
}

export default ArtPage;