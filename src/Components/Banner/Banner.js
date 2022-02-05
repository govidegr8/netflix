import React, { useEffect, useState } from 'react';
import axios from '../../axios'
import './Banner.css'
import { apiKey,imageUrl } from '../../Constants/constants';

function Banner() {
  const [movie, setMovie] = useState('');
  useEffect(()=>{
      axios.get(`/trending/all/day?api_key=${apiKey}`).then((response)=>{
        setMovie(response.data.results[0])
  })
  },[])
  // here when the page renders movie doesn't have any value once the return component is mounted useEffect is triggered and movies state changes
  return (<div
  style={{backgroundImage:`url(${ movie ? imageUrl+movie.backdrop_path : " " })`}}
   className='banner'>
      <div className='content'>
          <h1 className='title'>{ movie ? movie.name : "Movie Name"  }</h1>
          <div className='banner_button'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
          </div>
          <div className='description'>{movie ? movie.overview: "Description" }</div>
          <div className="fade"></div>
      </div>
  </div>
  );
}


export default Banner
