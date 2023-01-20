import React, { useRef, useState } from "react";

import ListItem from "../listItem/ListItem";
import TrailerModal from "../modals/trailer/trailerModal";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LeftArrow, RightArrow } from '../../constants/icons';

import { ListWrapper } from './styled.js'

export default function List({ list, title }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit] = useState(window.innerWidth / 230);
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState({});

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <>
      <ListWrapper className='list'>
        <span className="listTitle">{ title }</span>

        <div className="wrapper">
          <FontAwesomeIcon
            icon={ LeftArrow }
            className="sliderArrow left"
            onClick={() => handleClick("left")}
            style={{ display: !isMoved && "none" }}
          />

          <div className="slider_container" ref={ listRef }>
            { list.map(( item, i ) => (
              <ListItem
                index={ i }
                item={ item }
                key={ item.id }
                setShowModal={ setShowModal }
                setMovie={ setMovie } />
            ))}
          </div>

          <FontAwesomeIcon
            icon={ RightArrow }
            className="sliderArrow right"
            onClick={() => handleClick("right")}
          />
        </div>
      </ListWrapper>

      {
        showModal && (
          <TrailerModal movie={movie} setShowModal={setShowModal}/>
        )
      }
    </>
  );
}
