import React, { useEffect, useState } from 'react'
import { Home } from '../components/home/Home'
import { FeaturedMovie } from '../components/featured/FeaturedMovie'

export const HomePage = () => {
    const [items, setItems] = useState([])
    // const [popularMovies, setPopularMovies] = useState([])


  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then(res => res.json())
      .then(data => console.log(data.results))
  }, [])
  return (
    <>
        <Home />
        <FeaturedMovie items = {items} title='Featured Movie'/>
    </>
  )
}
