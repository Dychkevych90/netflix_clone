import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {SingleMoviePage, MainScreen, SeriesCast, Recomendations} from './styled.js';
import axios from "axios";
import requests from "../../utils/requests";
import List from "../../components/list/list";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Play} from "../../constants/icons";
import TrailerModal from "../../components/modals/trailer/trailerModal";

const About = () => {
  const location = useLocation();

  const [movie, setMovie] = useState({});
  const [moviePoster, setMoviePoster] = useState('');
  const [movieBackground, setMovieBackground] = useState('');
  const [genres, setGenres] = useState([])
  const [actors, setActors] = useState([]);
  const [trendingNow, setTrendingNow] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const movie = location.state.movie;
    setMovie(movie);
  }, [location]);

  useEffect(() => {
    if (movie) {
      const url = `${process.env.REACT_APP_BASE_URL}${movie?.poster_path || movie?.backdrop_path}`;
      const background = `${process.env.REACT_APP_BASE_URL}${movie?.backdrop_path}`;
      setMoviePoster(url);
      setMovieBackground(background);
    }
  }, [movie])

  useEffect(() => {
    const getMovieGenres = async () => {
      await axios.get(`https://api.themoviedb.org/3/${movie?.media_type === 'tv' ? 'tv' : 'movie'}/${movie?.id}?api_key=${process.env.REACT_APP_THEMOVIEDB_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`)
        .then((response) => {
          const data = response.data;
          if (!response) {
            return
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

  useEffect(() => {
    const getSeriesCast = async () => {
      await axios.get(`https://api.themoviedb.org/3/movie/${movie?.id}/credits?api_key=${process.env.REACT_APP_THEMOVIEDB_PUBLIC_API_KEY}&language=en-US`)
        .then(res => {
          const popular = res.data.cast.sort((a, b) => {
            return a.popularity - b.popularity
          }).reverse();
          const items = popular.slice(0, 5).map(item => item);
          console.log(items)
          setActors(items);
        })
        .catch((err) => console.error(err));
    }
    getSeriesCast();
  }, [movie]);

  useEffect(() => {
    const getRecomendations = async () => {
      await axios.get(requests.fetchNetflixOriginals)
        .then((res) => setTrendingNow(res.data.results))
        .catch((err) => console.error(err));
    }
    getRecomendations();
    }, []);

    return (
      <>
        <SingleMoviePage>
          <MainScreen img={movieBackground}>
            <div className="container">
              <img src={moviePoster} className="poster"/>
              <div className="info">
                <div className="title">{movie?.title || movie?.name || movie?.original_name}</div>

                <button className="play" onClick={() => setShowModal(!showModal)}>
                  <FontAwesomeIcon className="icon" icon={ Play } />
                  <span>Play trailer</span>
                </button>

                <div className="release">Release date: {movie?.release_date}</div>

                <div className="genres">
                  <div className='genres_type'>{movie?.media_type}</div>
                  {
                    genres.map(item => (
                      <div key={item.name} className='genres_item'>{item.name}, </div>
                    ))
                  }
                </div>

                <div className="overview">
                  <div className="overview_title">Overview:</div>

                  <div className="overview_desc">{movie?.overview}</div>
                </div>
              </div>
            </div>
          </MainScreen>

          <SeriesCast>
            <div className="container">
              <div className="title">Series Cast</div>
              <div className="actors_section">
                {
                  actors.map(item => (
                    <div key={item.cast_id} className='actor'>
                      <img className='photo' src={`${process.env.REACT_APP_BASE_URL}${item.profile_path}`} alt="profile"/>
                      <div className="name">{item.name || item.original_name}</div>
                      <div className="character">{item.character}</div>
                    </div>
                  ))
                }
              </div>
            </div>
          </SeriesCast>

          <Recomendations>
            <div className="container">
              <div className="caption">Recommendations</div>

              <List title={'Netflix original'} list={trendingNow}/>
            </div>
          </Recomendations>
        </SingleMoviePage>
        {
          showModal && (
            <TrailerModal movie={ movie } setShowModal={ setShowModal }/>
          )
        }
      </>
    )
  }

  export default About;
