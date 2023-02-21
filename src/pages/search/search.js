import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import {SearchPageWrapper} from './styled.js';
import ListItem from "../../components/listItem/ListItem";
import TrailerModal from "../../components/modals/trailer/trailerModal";

const SearchPage = () => {
  const search = useSelector((state) => state.search);

  const [result, setResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState({});

  useEffect(() => {
    if (searchTerm !== "") {
      const result = search.filter((item) =>
        item?.title?.toLowerCase().includes(searchTerm.toLowerCase())
        || item?.original_title?.toLowerCase().includes(searchTerm.toLowerCase()))
      setResult(result)
    } else {
      setResult([])
    }
  }, [searchTerm])

  const onChange = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <>
      <SearchPageWrapper>
        <div className="container">
          <input
            value={searchTerm}
            type="text"
            onChange={(e) => onChange(e)}
            className='search_input'
            placeholder='Search...'
          />

          <div className='list'>
            {
              result.map((item, i) => (
                  <>
                    <ListItem
                      index={i}
                      item={item}
                      key={item.id}
                      setShowModal={setShowModal}
                      setMovie={setMovie}
                    />
                  </>
                )
              )
            }
          </div>
        </div>
      </SearchPageWrapper>
      {
        showModal && (
          <TrailerModal movie={movie} setShowModal={setShowModal}/>
        )
      }
    </>
  )
}

export default SearchPage;
