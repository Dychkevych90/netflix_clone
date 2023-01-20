import React, {useEffect, useState} from 'react';
import axios from "axios";
import ReactPlayer from 'react-player/lazy'

import {
  TrailerOverlay
} from './styled.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Close, Muted, Play, Volume, Plus, Check, Like} from '../../../constants/icons';

const TrailerModal = ({ movie, setShowModal }) => {
  const [trailer, setTrailer] = useState('');
  const [genres, setGenres] = useState([])
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    if (!movie) return

    const fetchMovie = async () => {
      await axios.get(`https://api.themoviedb.org/3/${movie?.media_type === 'tv' ? 'tv' : 'movie'}/${movie?.id}?api_key=${process.env.REACT_APP_THEMOVIEDB_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`)
        .then((response) => {
          const data = response.data;

          if (data?.videos) {
            const index = data.videos.results.findIndex(( element ) => element.type === 'Trailer')
            setTrailer(data.videos?.results[index]?.key)
          }
          if (data?.genres) {
            setGenres(data.genres)
          }
        })
        .catch((err) => console.log(err));
    }

    fetchMovie()
  }, [ movie ])

  return (
    <TrailerOverlay>
      <div className="wrapper">
        <button className="close" onClick={() => setShowModal( false )}>
          <FontAwesomeIcon icon={ Close }/>
        </button>

        <div className="playerWrapper">
          <ReactPlayer
            url={`www.youtube.com/embed/${trailer}`}
            width="100%"
            height="100%"
            playing
            muted={ muted }
            volume={ 0.5 }

          />

          <div className="buttons">
            <div className="controllers">
              <button className="play">
                <FontAwesomeIcon className="icon" icon={ Play } />
                <span>Play</span>
              </button>

              <button className="controller plus">
                <FontAwesomeIcon icon={ Plus } />
              </button>

              <button className="controller like">
                <FontAwesomeIcon icon={ Like } />
              </button>
            </div>

            <button className="controller muted" onClick={() => setMuted( !muted )}>
              { muted ? (
                <FontAwesomeIcon icon={ Muted } />
              ) : (
                <FontAwesomeIcon icon={ Volume } />
              )}
            </button>
          </div>
        </div>

        <div className="info_block">
          <div className="left">
            <div className="release">Release date: { movie?.release_date || movie?.first_air_date }</div>

            <div className="desc">{ movie?.overview }</div>
          </div>
          <div className="right">
            <div className="fake" />

            <div className="genres">
              <span>Genres:</span>{' '}
              { genres.map((genre) => genre.name).join(', ') }
            </div>

            <div className="lang">
              <span>Original language:</span>{' '}
              { movie?.original_language }
            </div>

            <div className="votes">
              <span>Total votes:</span>{' '}
              { movie?.vote_count }
            </div>
          </div>
        </div>
      </div>
    </TrailerOverlay>
  )
}

export default TrailerModal;
