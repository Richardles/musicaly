import { useEffect, useState } from 'react';
import favBtnOff from '../../assets/favorite off.png'
import favBtnOn from '../../assets/favorite on.png'

function FavouritesPage(){
    const [tracks, setTracks] = useState(JSON.parse(localStorage.getItem('myFavMusic')))
    let counter = 0

    function toggleFav(id){
        let init = []
        let insert = true
        let tmp = JSON.parse(localStorage.getItem('myFavMusic'))
        if(!tmp){
            init.push(id)
            localStorage.setItem('myFavMusic', JSON.stringify(init))
            console.log("1");
        }else{
            tmp.forEach((element,index) => {
                if(element.id === id.id){
                    console.log(index, element);
                    insert = false
                    console.log(tmp.splice(index, 1))
                }else{
                    console.log('nein');
                }
            });
            if(insert === true){
                tmp.push(id)
            }
            localStorage.setItem('myFavMusic', JSON.stringify(tmp))
        }

        setTracks(JSON.parse(localStorage.getItem('myFavMusic')))
    }

    return(
        <div>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Song</th>
                </tr>
            </thead>
            {tracks?.map(track=>{
                return(
                    <tbody key={track.id}>
                        <tr>
                        <th scope="row">{counter+1}</th>
                        <td>{track.name}</td>
                        <td className="audio-action">
                            <audio controls loop>
                                <source src={track.preview_url}></source>
                            </audio>
                            <div className="fav-btn">
                                <img src={favBtnOn} alt="favorite" onClick={()=>toggleFav(track)}></img>
                            </div>
                        </td>
                        </tr>
                    </tbody>
                )
            })}
            </table>
        </div>
    )
}

export default FavouritesPage