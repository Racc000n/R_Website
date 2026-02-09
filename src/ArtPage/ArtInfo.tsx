import './ArtInfo.css'

export function Name({name}) {

    return (
        <>
        <h2> {name}</h2>
        </>
    )

}

function ArtInfo() {

    return (
        <>
        <h1> test </h1>
        <Name/> 
        </>
    );
}

export default ArtInfo;