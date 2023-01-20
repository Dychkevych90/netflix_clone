import React, {useEffect, useState} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Like, Play, Plus} from "../../../constants/icons";
import {HoverWrapper} from './styled.js';

const Hover = ({ movie, setShowModal, setMovie }) => {

  return (
    <>
      <HoverWrapper>
        <div className="buttons">
          <button className="controller like" onClick={()=> { setShowModal(true); setMovie(movie) }}>
            <FontAwesomeIcon icon={Play}/>
          </button>

          <button className="controller plus">
            <FontAwesomeIcon icon={Plus}/>
          </button>

          <button className="controller like">
            <FontAwesomeIcon icon={Like}/>
          </button>
        </div>

        <div className="title">{movie?.title || movie?.name || movie?.original_name}</div>
        <div className="desc">{movie?.overview}</div>
      </HoverWrapper>
    </>
  )
}

export default Hover;
