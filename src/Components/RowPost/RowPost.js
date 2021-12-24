import React,{useEffect, useState} from 'react'
import './RowPost.css'
import YouTube from 'react-youtube';
import axios from '../../constants/axios'
import {imgUrl,API_KEY} from '../../constants/contants'

function RowPost(props) {

    const [movies, setMovies] = useState([])
    const [UrlId, setUrlId] = useState()

    useEffect(()=>{
        axios.get(props.link).then((response)=>{
            setMovies(response.data.results);
        }).catch((err)=>{
            alert("error")
        })
    },[])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };


      const handleMovie = (id)=>{
        axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setUrlId(response.data.id)
            console.log(response.data);
            // if (response.data.results.length!==0) {
            //     setUrlId(response.data.results[0]);
            // } else {
            //     console.log("no video");   
            // }
        })
      }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movies.map((obj)=><img onClick={()=>{handleMovie(obj.id)}} className={props.isSmall ? 'small-poster' : 'poster'} alt='poster' src={`${imgUrl+obj.backdrop_path}`}/>)}
            </div>
            { UrlId && <YouTube videoId={UrlId} opts={opts} /> }
            <YouTube videoId='71446' opts={opts} />
        </div> 
    )
}

export default RowPost