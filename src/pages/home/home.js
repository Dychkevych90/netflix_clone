import React, {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

import Banner from "../../components/banner/banner";
import List from "../../components/list/list";

import requests from "../../utils/requests";
import {setMyList, setSearch} from "../../redux-store/action";

const Home = () => {
  const [ratedMovies, setRatedMovies] = useState([]);
  const [trendingNow, setTrendingNow] = useState([]);
  const [actionMovies, setActionMovie] = useState([]);
  const [comedyMovies, setComedyMovie] = useState([]);
  const [horrorMovies, setHorrorMovie] = useState([]);
  const [romanceMovies, setRomanceMovie] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const arr = [];
    const movies = arr.concat(ratedMovies, trendingNow, actionMovies, comedyMovies, horrorMovies, romanceMovies, documentaries);
    dispatch(setSearch(movies))
  }, [ratedMovies, trendingNow, actionMovies, comedyMovies, horrorMovies, romanceMovies, documentaries]);


  const myList = useSelector((state) => state.list);
  const currentUser = useSelector((state) => state.user)

  useEffect(() => {
    const getMovies = async () => {
      await axios.get(requests.fetchTrending)
        .then((res) => setTrendingNow(res.data.results))
        .catch((err) => console.error(err));

      await axios.get(requests.fetchTopRated)
        .then((res) => setRatedMovies(res.data.results))
        .catch((err) => console.error(err));

      await axios.get(requests.fetchActionMovies)
        .then((res) => setActionMovie(res.data.results))
        .catch((err) => console.error(err));

      await axios.get(requests.fetchComedyMovies)
        .then((res) => setComedyMovie(res.data.results))
        .catch((err) => console.error(err));

      await axios.get(requests.fetchHorrorMovies)
        .then((res) => setHorrorMovie(res.data.results))
        .catch((err) => console.error(err));

      await axios.get(requests.fetchRomanceMovies)
        .then((res) => setRomanceMovie(res.data.results))
        .catch((err) => console.error(err));

      await axios.get(requests.fetchDocumentaries)
        .then((res) => setDocumentaries(res.data.results))
        .catch((err) => console.error(err));

      const userId = currentUser._id;
      if(userId){
        await axios.get(`${process.env.REACT_APP_BFF_API}myList/users/${userId}/favorite-movies`)
          .then((res) => dispatch(setMyList(res.data)))
          .catch((err) => console.error(err));
      }
    }

    getMovies();
  }, [])

  return (
    <>
      <Banner/>
      <List title={'Top Rated'} list={ratedMovies}/>
      <List title={'Trending Now'} list={trendingNow}/>
      {
        myList && myList.length !== 0 && (
          <List title={'My List'} list={myList}/>
        )
      }
      <List title={'Action Thrillers'} list={actionMovies}/>
      <List title="Comedies" list={comedyMovies}/>
      <List title="Scary Movies" list={horrorMovies}/>
      <List title="Romance Movies" list={romanceMovies}/>
      <List title="Documentaries" list={documentaries}/>
    </>
  )
}

export default Home;
