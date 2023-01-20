import React, {useEffect, useState} from 'react';
import axios from "axios";

import requests from "../../utils/requests";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Play, Info } from '../../constants/icons';

import {
  BannerWrapp,
  MovieInfo
} from './styled.js';
import TrailerModal from "../modals/trailer/trailerModal";
import {Link} from "react-router-dom";

const Banner = () => {
  const [movie, setMovie] = useState({});
  const [moviePoster, setMoviePoster] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getServerSideProps = async () => {
      await axios.get(requests.fetchTrending)
        .then((res) => {
          setMovie( res.data.results[ Math.floor(Math.random() * res.data.results.length) ] );
        })
        .catch((err) => console.log(err) );
    }

    getServerSideProps();
  }, []);

  useEffect(() => {
    if( movie ) {
      const url = `${process.env.REACT_APP_BASE_URL}${movie?.backdrop_path || movie?.poster_path}`
      setMoviePoster( url );
    }
  }, [ movie ])

  return (
    <>
    <BannerWrapp>
      <img
        className='poster'
        src={ moviePoster }
        alt="poster"
      />

        <MovieInfo>
          <div className="container">
            <h1 className="title">{ movie?.title || movie?.name || movie?.original_name }</h1>

            <div className="overview">{ movie?.overview }</div>

            <div className="buttons">
              <button className="play" onClick={() => setShowModal(!showModal)}>
                <FontAwesomeIcon className="icon" icon={ Play } />
                <span>Play</span>
              </button>

              <Link className="more" to='/movie' state={{ movie }}>
                <FontAwesomeIcon className="icon" icon={ Info } />
                <span>Info</span>
              </Link>
            </div>
          </div>
        </MovieInfo>
    </BannerWrapp>
      {
        showModal && (
          <TrailerModal movie={ movie } setShowModal={ setShowModal }/>
        )
      }
    </>
  )
}

export default Banner;
