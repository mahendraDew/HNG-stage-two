import React, { useEffect, useState } from 'react'
import './MovieDetails.css'
import { useParams } from 'react-router'


import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';


export const MovieDetails = () => {

    const [videoURL, setVideoURL] = useState("https://youtu.be/sa9l-dTv9Gk");
    var video;
    function handleSearch() {
        handleButtonClick();
        movieTrailer(video).then((res) => {
            setVideoURL(res);
        });
    }

    const [isVisible, setIsVisible] = useState(true);
    const [isPlayBtnVisible, setIsPlayBtnVisible] = useState(true);
    const [isPlayerVisible, setIsPlayerVisible] = useState(false);

    const handleButtonClick = () => {
        setIsVisible(false);
        setIsPlayerVisible(true);
        setIsPlayBtnVisible(false)
    };



    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0, 0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(res => res.json())
            .then(data => { setMovie(data) })
    }

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results))
    }, [])
    console.log(currentMovieDetail)
    const slicePopularMovie = popularMovies.slice(0, 1);



    const [credits, setCredits] = useState(null);

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
            .then(response => response.json())
            .then(data => setCredits(data))
            .catch(error => console.error('Error fetching credits:', error));
    }, []);

    if (!credits) {
        return <div>Loading...</div>;
    }

    const director = credits.crew.find(member => member.job === 'Director');
    const casts = credits.cast.slice(0, 5); // Get the first 5 cast members
    const writers = credits.crew.filter(member => member.job === 'Screenplay' || member.job === 'Writer');




    return (

        

        <div className="movie_container">
            <div className="left-section">

                <div className="logo">
                    <img src="../images/assests/logo-black.png" alt="" className="header_logo" />
                </div>
                <div className='page-links'>
                    <div className="home-page shortcut-page-link">
                        <h1 ><i className="fa fa-home" /> <a href="/">Home</a></h1>
                    </div>
                    <div className="movies-page shortcut-page-link active">
                        <h1 ><i class="fa fa-video"></i> <a href="/">Movies</a></h1>
                    </div>
                    <div className="tvserial-page shortcut-page-link">
                        <h1><i class="fa fa-tv"></i> <a href="/">TV Serials</a></h1>
                    </div>
                    <div className="upcomming-page shortcut-page-link">
                        <h1><i class="fa fa-calendar"></i> <a href="/">Upcoming</a></h1>
                    </div>
                </div>
                <div className="quizbox">
                    <div className='heading'>
                        <h4>Play movie quizes and earn free tickets</h4>
                    </div>
                    <div className='sub-heading'>
                        <p>50k people are playing now</p>
                    </div>
                    <div className='start-ply-btn'>
                        <h5>Start Playing</h5>
                    </div>
                </div>
                <div className="logout shortcut-page-link">
                    <h1><i class="fa fa-arrow-right"></i> <a href="/">Log out</a></h1>
                </div>
            </div>
            <div className="right-section">
                <div className="trailerBox">
                    <div className="movie__posterBox">
                        {isVisible && <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />}
                    </div>
                    {isPlayBtnVisible && <div className="trailer-ply-btn">
                        <button className='trailer-button' onClick={() => { handleSearch() }}><i class="fa fa-play"></i></button>
                    </div>}
                    {isPlayerVisible && <div className="player">
                        <ReactPlayer className='react-player' url={videoURL} controls={true} width={'1198px'} height={'449px'} playing={true} />
                    </div>}

                </div>
                <div className="box">
                    <div className="movie-details">
                        <div className="movie-content">
                            <div className="movie-detail-header">
                                <div className="movie__name"><h2>{currentMovieDetail ? currentMovieDetail.original_title : ""} . </h2></div>
                                {video = currentMovieDetail ? currentMovieDetail.original_title : ""}
                                <div className="movie__releaseDate movie-header-info"><h2>{currentMovieDetail ? currentMovieDetail.release_date : ""} . </h2></div>
                                <div className='movie_age_rating movie-header-info'><h2>PG-13 . </h2></div>
                                <div className="movie__runtime movie-header-info"><h2>{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</h2></div>
                                <div className="movie__genres movie-header-info"><h2>
                                    {/* {console.log(currentMovieDetail)} */}
                                    {
                                        currentMovieDetail && currentMovieDetail.genres
                                            ?
                                            currentMovieDetail.genres.map(genre => (
                                                <><span className="movie__genre" id={genre.id}>{genre.name}</span></>
                                            ))
                                            :
                                            ""
                                    }
                                </h2>
                                </div>
                            </div>
                            <div className="description">
                                <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                            </div>
                        </div>
                        <div className="film-makers">
                            <div className="director crew">
                                <h3>Directors: <span>{director.name}</span></h3>
                            </div>
                            <div className="writers crew">
                                <h3>Writers: {writers.map((writer, index) => (
                                    <span key={index}>{writer.name}, </span>
                                ))}</h3>
                            </div>
                            <div className="stars crew">
                                <h3>Stars: {casts.map((castMember, index) => (
                                    <span key={index}>{castMember.name}, </span>
                                ))} </h3>
                            </div>
                        </div>
                        <div className="awards">
                            <div className="award-nomination">
                                <div className="toprated">
                                    <p>Top Rated movie #65</p>
                                </div>
                                <div className="d-menu">
                                    <h1>Awards 9 nominations</h1>
                                    <div className='drop-d-menu'>
                                        <i class="fa fa-sort-down"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar">
                        <div className="extras">
                            <div className="rating extra-box">
                                <div className="icons">
                                    <i class="fa fa-heart"></i>
                                    <i class="fa fa-share"></i>
                                    <i class="fa fa-bookmark"></i>
                                </div>
                                <div className="star-rating">
                                    <i class="fa fa-star"></i>
                                    <p className="movie__voteCount">{parseFloat(currentMovieDetail ? currentMovieDetail.vote_average : "").toFixed(1)}</p>
                                    <p className="movie__voteCount"> | {parseFloat(currentMovieDetail ? currentMovieDetail.popularity : "").toFixed(0)}</p>

                                </div>
                            </div>
                            <div className="see-showtime extra-box">
                                <p><i class="fa fa-ticket"></i> See Showtimes</p>
                            </div>
                            <div className="more-watch-options extra-box">
                                <p><i class="fa fa-bars"></i> More watch options</p>
                            </div>
                        </div>
                        <div className="bestInMonth">
                            <div className="bestInMonth-movie-posterBox">
                                <div className="bestMovie one">
                                    <img className="bestInMonth-movie-poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                                </div>
                                <div className="bestMovie two">
                                    <img className="bestInMonth-movie-poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                                </div>
                                <div className="bestMovie three">
                                    <img className="bestInMonth-movie-poster" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                                </div>
                            </div>
                            
                            <div className="bestInMonth-heading">
                                <p><i class="fa fa-bars"></i> The Best Movies and Shows in September</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
