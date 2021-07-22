import { Link } from "react-router-dom";

function ArtistBox(props){
    let album = props.album
    let artist = props.artist

    return(
        <div className="album-box">
            <Link to={`/detail/${album.id}`} className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={album.image} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{artist.name}</h5>
                        <p className="card-text">{album.name}</p>
                        <p className="card-text"><small className="text-muted">Album ID : {album.id}</small></p>
                    </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ArtistBox