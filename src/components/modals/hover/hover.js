import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

import CircleProgressBar from "../../circleProgressBar/circleProgressBar";

import {useDispatch, useSelector} from "react-redux";
import {setMyList} from "../../../redux-store/action";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Info, Play, Plus, Minus} from "../../../constants/icons";
import {HoverWrapper} from './styled.js';

const Hover = ({movie, setShowModal, setMovie}) => {
  const currentUser = useSelector((state) => state.user);
  const list = useSelector((state) => state.list);
  console.log('list', list, 'movie', movie)

  const [releaseDate, setReleaseDate] = useState(null);

  useEffect(() => {
    setReleaseDate(movie.release_date && movie.release_date.split("-")[0]);
  }, [movie]);

  const dispatch = useDispatch();

  const addMovieToMyList = async (item) => {
    const userId = currentUser._id;

    try {
      const response = await axios.post(`myList/users/${userId}/favorite-movies`, item);

      dispatch(setMyList([...list, response.data]))
    } catch (error) {
      console.error(error);
    }
  }

  const deleteMovieFromList = async (favoriteMovieId) => {
    const userId = currentUser._id;

    try {
      const response = await axios.delete(`myList/users/${userId}/favorite-movies/${favoriteMovieId}`);
      console.log('delete', response.data)
      const index = list.findIndex((movie) => movie.id === response.data.id);
      const newData = [...list.slice(0, index), ...list.slice(index + 1)];

      dispatch(setMyList(newData))
    } catch (error) {
      console.error(error);
    }
  }

  const isMovieInFavorite = list.find((item) => item.id === movie.id);

  return (
    <>
      <HoverWrapper>
        <div className="buttons">
          <button className="controller like" onClick={() => {
            setShowModal(true);
            setMovie(movie)
          }}>
            <FontAwesomeIcon icon={Play}/>
          </button>

          {
            isMovieInFavorite ? (
              <button className="controller plus" onClick={() => deleteMovieFromList(movie.id)}>
                <FontAwesomeIcon icon={Minus}/>
              </button>
            ) : (
              <button className="controller plus" onClick={() => addMovieToMyList(movie)}>
                <FontAwesomeIcon icon={Plus}/>
              </button>
            )
          }

          <Link to='/movie' state={{movie}} className="controller like">
            <FontAwesomeIcon icon={Info}/>
          </Link>
        </div>

        <div className="info">
          <CircleProgressBar progress={movie.vote_average} strokeWidth={5} size={'35'}/>

          <div className="date">{releaseDate}</div>

          <div className="title">{movie?.title || movie?.name || movie?.original_name}</div>
        </div>
      </HoverWrapper>
    </>
  )
}

export default Hover;
