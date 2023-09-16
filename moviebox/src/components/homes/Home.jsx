import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HomeCard from "./HomeCard"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i class='fa fa-chevron-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i class='fa fa-chevron-left'></i>
      </button>
    </div>
  )
}
const Home = () => {

  
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))
  }, [])

  const slicePopularMovies = popularMovies.slice(0, 10);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <>
      {/* <div className='homeContainer'>
        <Slider {...settings}>
          {items.map((item) => {
            return (
              <>
                <HomeCard key={item.id} item={item} />
              </>
            )
          })}
        </Slider>
      </div> */}
       <>
      <div className="poster">
        <Carousel showThumbs={false} autoPlay={true} transitionTime={3} infiniteLoop={true} showStatus={false}>
          {
            slicePopularMovies.map(movie => (
              <Link style={{ textDecoration: "none", color: "white" }} to={`/movies/${movie.id}`}>
                <div className="posterImage">
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                  <div className="posterImage__rating">
                    <div className='imdb_rating'>
                      <img src="./images/assests/imdb.png" alt="IMDB" />
                      <span className='votes'>
                        {movie ? movie.vote_average : ""}/10
                      </span>
                    </div>
                    <div className='rt_rating'>
                      <img src="./images/assests/rottentomattos.png" alt="IMDB" />
                      <span className='votes'>
                        {movie ? movie.vote_average : ""}/10
                      </span>
                    </div>
                  </div>
                  <div className="posterImage__description">
                    {movie ? movie.overview : ""}
                  </div>
                  <div className="posterImage__Trailer">
                    <button className='trailerBtn' > <i className="fa fa-play play" /> Watch Trailer</button>
                  </div>
                </div>
              </Link>
            ))
          }
        </Carousel>
      </div>
    </>
    </>
  )
}

export default Home
