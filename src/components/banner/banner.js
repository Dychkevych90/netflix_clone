import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

import requests from "../../utils/requests";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Play, Info} from '../../constants/icons';

import {
  BannerWrapp,
  MovieInfo
} from './styled.js';
import TrailerModal from "../modals/trailer/trailerModal";
import CircleProgressBar from "../circleProgressBar/circleProgressBar";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [moviePoster, setMoviePoster] = useState('');
  const [genres, setGenres] = useState([])
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getServerSideProps = async () => {
      await axios.get(requests.fetchTrending)
        .then((res) => {
          setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length)]);
        })
        .catch((err) => console.log(err));
    }

    getServerSideProps();
  }, []);

  useEffect(() => {
    if (movie) {
      const url = `${process.env.REACT_APP_BASE_URL}${movie?.backdrop_path || movie?.poster_path}`
      setMoviePoster(url);
    }
  }, [movie])

  useEffect(() => {
    const getMovieGenres = async () => {
      await axios.get(`https://api.themoviedb.org/3/${movie?.media_type === 'tv' ? 'tv' : 'movie'}/${movie?.id}?api_key=${process.env.REACT_APP_THEMOVIEDB_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`)
        .then((response) => {
          const data = response.data;
          console.log('data', data)
          if (!response) {
            return;
          } else {
            if (data?.genres) {
              setGenres(data.genres)
            }
          }
        })
        .catch((err) => console.error(err));
    }

    getMovieGenres();
  }, [movie])

  return (
    <>
      <BannerWrapp>
        <img
          className='poster'
          src={moviePoster}
          alt="poster"
        />

        <MovieInfo>
          <div className="container">
            <h1 className="title">{movie?.title || movie?.name || movie?.original_name}</h1>

            <div className="overview">{movie?.overview}</div>

            <div className="rate">
              <CircleProgressBar progress={movie?.vote_average}/>

              <div className='pills_list'>
                {
                  genres.map(item => {
                    return (
                      <div className='pill' key={item.id}>{item.name}</div>
                    )
                  })}</div>
            </div>

            <div className="buttons">
              <button className="play" onClick={() => setShowModal(!showModal)}>
                <FontAwesomeIcon className="icon" icon={Play}/>
                <span>Play</span>
              </button>

              <Link className="more" to='/movie' state={{movie}}>
                <FontAwesomeIcon className="icon" icon={Info}/>
                <span>Info</span>
              </Link>
            </div>
          </div>
        </MovieInfo>
      </BannerWrapp>
      {
        showModal && (
          <TrailerModal movie={movie} setShowModal={setShowModal}/>
        )
      }
    </>
  )
}

export default Banner;
