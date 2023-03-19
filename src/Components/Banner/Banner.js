import React, { useEffect } from 'react'
import './Banner.css' 
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../Constants/constants'
import { useState } from 'react'

function Banner() {
  const [movie,setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/day?api_key=${API_KEY}`).then((Response)=>{
      console.log(Response.data.results[0])
      setMovie(Response.data.results[0])
    })

  },[])
  return (
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : "" }</h1>
            <div className='banner_button'>
                <button className='button'>PLAY</button>
                <button className="button">MY LIST</button>
            </div>
            <h1 className="description">{ movie ? movie.overview : ""} </h1>
        </div>
        <div className="fade_bottom"></div>
        
    </div>
  )
}

export default Banner 