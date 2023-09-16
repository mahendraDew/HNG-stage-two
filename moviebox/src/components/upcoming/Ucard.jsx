import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Ucard = ({ item }) => {

  const [currentMovieItem, setCurrentMovieItem] = useState()

  useEffect(() => {
      getData()
      window.scrollTo(0,0)
  }, [])

  const getData = () => {
      fetch(`https://api.themoviedb.org/3/movie/${item.id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
      .then(res => res.json())
      .then(data => setCurrentMovieItem(data))
  }

  return (
    <>

      <Link to={`/movies/${item.id}`} style={{ textDecoration: "none", color: "white" }}>
        <div className='MovieBox'>
          <div className='img'>
            <img className="cards__img" src={`https://image.tmdb.org/t/p/original${item ? item.poster_path : ""}`} alt="img" />
          </div>
          <div className='text'>
            <div className='content flex'>
              <div className='details row'>
                <div className="releaseDate">
                  <p>{item.release_date}</p>
                </div>
                <div className="tittle">
                  <h1 >{item.original_title}</h1>
                </div>
                <div className='rating flex'>
                  <div className="posterImage__rating">
                    <div className='imdb_rating'>
                      <img src="./images/assests/imdb.png" alt="IMDB" />
                      <span className='votes'>
                        {item ? item.vote_average : ""}/10
                      </span>
                    </div>
                    <div className='rt_rating'>
                      <img src="./images/assests/rottentomattos.png" alt="IMDB" />
                      <span className='votes'>
                        {item ? item.vote_average : ""}/10
                      </span>
                    </div>
                  </div>
                </div>
                <div className='category'>
                   {/* {console.log(item)} */}
                  <div className="movie_genres">
                    {
                      currentMovieItem && currentMovieItem.genres
                        ?
                        currentMovieItem.genres.map(genre => (
                          <><span className="movie_genre" id={genre.id}>{genre.name}</span></>
                          
                        ))
                        :
                        ""
                    }
                  </div>
                  <h4>
                    {/* <span>Action Adventure </span> */}
                  </h4>
                </div>

              </div>
            </div>
            {/*</Link>*/}
          </div>
        </div>
      </Link>
    </>
  )
}

export default Ucard
