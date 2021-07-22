import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './DetailPage.css'
import favBtnOff from '../../assets/favorite off.png'
import favBtnOn from '../../assets/favorite on.png'

function DetailPage(){
    let {albumId} = useParams()
    const [tracks, setTrack] = useState([])

    useEffect(()=>{
        fetch(`https://spotify-rest.up.railway.app/album?id=${albumId}`)
        .then(response => response.json())
        .then(data =>
            setTrack(data.data)
        )
    }, [albumId])
    
    function toggleFav(track, e){
        let init = []
        let insert = true
        let tmp = JSON.parse(localStorage.getItem('myFavMusic'))
        if(!tmp){
            init.push(track)
            e.target.src = favBtnOn
            localStorage.setItem('myFavMusic', JSON.stringify(init))
        }else{
            tmp.forEach((element,index) => {
                if(element.id === track.id){
                    console.log(index, element);
                    insert = false
                    console.log(tmp.splice(index, 1))
                    e.target.src = favBtnOff
                }
            });
            if(insert === true){
                tmp.push(track)
                e.target.src = favBtnOn
            }
            localStorage.setItem('myFavMusic', JSON.stringify(tmp))
        }
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
            
            {tracks?.map((track,index)=>{
                let temp = JSON.parse(localStorage.getItem('myFavMusic'))
                let favBtnSrc = favBtnOff

                temp.forEach(element => {
                    if(JSON.stringify(element) === JSON.stringify(track)){
                        favBtnSrc = favBtnOn
                    }
                });
                
                return(
                    <tbody key={track.id}>
                        <tr>
                        <th scope="row">{index+1}</th>
                        <td>{track.name}</td>
                        <td className="audio-action">
                            <audio controls loop>
                                <source src={track.preview_url}></source>
                            </audio>
                            <div className="fav-btn">
                                <img src={favBtnSrc} alt="favorite" onClick={(e)=>toggleFav(track,e)}></img>
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

export default DetailPage