import React,{ useEffect,useState} from 'react';
import Youtube from 'react-youtube'
import axios from '../../axios'
import { apiKey,imageUrl } from '../../Constants/constants';
import './Post.css'

function Post(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
    }).catch(err=>{
      alert("Network Error")
    })
  }, []);

  const [id,setId] = useState('')

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie= (id) =>{
    axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((response)=>
    { if(response.data.results.length!=0){
      setId(response.data.results[0])
    }
    }).catch(err=>{console.log("Error")})
  }
  
  return <div>
      <h2 className='row'>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
          <img onClick={()=>handleMovie(obj.id)}  className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
        )}
      </div>{
      id && <Youtube videoId={id.key} opts={opts} />
}

  </div>;
}

export default Post;
