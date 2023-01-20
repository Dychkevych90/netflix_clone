import React, {useEffect, useState} from 'react';

import Hover from "../modals/hover/hover";

import { ListWrapper } from './styled.js';

const ListItem = ({ index, item, setShowModal, setMovie }) => {
  const [moviePoster, setMoviePoster] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if( item ) {
      const url = `${process.env.REACT_APP_BASE_URL}${item?.backdrop_path || item?.poster_path}`
      setMoviePoster( url );
    }
  }, [ item ])

  return (
    <>
      <ListWrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={ moviePoster } alt="poster"/>

        {
          isHovered && (
            <Hover movie={ item } setShowModal={ setShowModal } setMovie={ setMovie } />
          )
        }
      </ListWrapper>
    </>
    )
  }

      export default ListItem;
