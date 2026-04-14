import {Link} from "react-router-dom"

function NotFound() {

    return (
        <>
        <div> 
        <h1> potatoes </h1>
        <Link to={"/R_Website/"}> 
        <button> Go Back </button>
        </Link>
        </div>
        </>
    );
}

export default NotFound;