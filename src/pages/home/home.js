import React, {useEffect, useState} from "react";
import axios from "axios";
import {useSelector} from "react-redux";

import Banner from "../../components/banner/banner";
import List from "../../components/list/list";

import requests from "../../utils/requests";

const Home = () => {
  const [ratedMovies, setRatedMovies] = useState([]);
  const [trendingNow, setTrendingNow] = useState([]);
  const [actionMovies, setActionMovie] = useState([]);
  const [comedyMovies, setComedyMovie] = useState([]);
  const [horrorMovies, setHorrorMovie] = useState([]);
  const [romanceMovies, setRomanceMovie] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);

  const list = useSelector((state) => state.list);

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
    }

    getMovies();
  }, [])

  return (
    <>
      <Banner/>
      <List title={'Top Rated'} list={ratedMovies}/>
      <List title={'Trending Now'} list={trendingNow}/>
      {
        list && list.length !== 0 && (
          <List title={'My List'} list={list}/>
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
