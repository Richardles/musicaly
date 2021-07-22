import { useState, useEffect } from "react"
import ArtistBox from "../../components/artist box/ArtistBox"
import './SearchPage.css'

function SearchPage(){
    const [albums, setAlbum] = useState([])
    const [artist, setArtist] = useState([])
    const [inputValue, setInputValue] = useState('')
    
    useEffect(() => {
        fetch(`https://spotify-rest.up.railway.app/artist?query=${encodeURI(inputValue)}`)
        .then(res => res.json())
        .then(data => {
            if(data.data){
                console.log(data);
                setAlbum(data.data.albums)
                setArtist(data.data)
            }
        })
    }, [inputValue])

    function updateInputValue(e){
        setInputValue(e.target.value)
    }

    function getInput(){
        console.log(inputValue);
    }

    if(albums.length === 0){
        return(
            <div className="search-bar">
                <div>
                    <input type="text" placeholder="Artist" value={inputValue} onChange={(e) =>{updateInputValue(e)}}/>
                    <button onClick={getInput}><i className="fa fa-search"></i></button>
                </div>
                <div>
                    Looking for some artist?
                </div>
            </div>
        )
    }

    return(
        <div>
            <div className="search-bar">
                <div>
                    <input type="text" placeholder="Artist" value={inputValue} onChange={(e)=>{updateInputValue(e)}}/>
                    <button onClick={getInput}><i className="fa fa-search"></i></button>
                </div>
            </div>
            <div className="artist-box">
                {albums?.map(album=>{
                    return(
                        <ArtistBox album={album} artist={artist} key={album.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchPage