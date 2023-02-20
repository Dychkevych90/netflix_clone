import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

import ListItem from "../../components/listItem/ListItem";
import TrailerModal from "../../components/modals/trailer/trailerModal";

import {setMyList} from "../../redux-store/action";

import {MyListWrapper} from './styled.js';

const MyList = () => {
  const List = useSelector((state) => state.list);
  const currentUser = useSelector((state) => state.user);

  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      const userId = currentUser._id;
      try {
        const response = await axios.get(`myList/users/${userId}/favorite-movies`);

        dispatch(setMyList(response.data))
      } catch (error) {
        console.error(error);
      }
    };

    fetchFavoriteMovies();
  }, [currentUser._id]);

  return (
    <>
      <div className='container'>
        <MyListWrapper>
          {
            List.map((item) => {
              return (
                <ListItem
                  item={item}
                  key={item.id}
                  setShowModal={setShowModal}
                  setMovie={setMovie}
                />
              )
            })
          }
        </MyListWrapper>
      </div>
      {
        showModal && (
          <TrailerModal movie={movie} setShowModal={setShowModal}/>
        )
      }
    </>
  )
}

export default MyList;
