import React,{useEffect, useState} from 'react';
import {API_KEY, imgUrl} from '../../constants/contants'
import axios from '../../constants/axios' 
import './Banner.css'

function Banner() {

    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`/trending/all/day?api_key=${API_KEY}`).then((response)=>{
            var x = randomRange(0,20)
            console.log(x);
            setMovie(response.data.results[x])
        }) 
    }, [])

    function randomRange(l,h){
        var range = (h-l);
        var random = Math.floor(Math.random()*range);
        if (random === 0){random+=1;}
        return l+random;
    }

    return (
        <div style={{backgroundImage:`url(${movie? imgUrl+movie.backdrop_path:""})`}}
        className='banner'>
           <div className='content' >
               <h1 className='title'>{movie ? movie.title : ""}</h1>
               <div className='banner_buttons' >
                   <button className='button' >Play</button>
                   <button className='button' >My list</button>
               </div>
               <h1 className='description'>{movie ? movie.overview : ""}</h1>
           </div>
       <div className="fade_bottom"></div>
       </div>
    )
}

export default Banner
