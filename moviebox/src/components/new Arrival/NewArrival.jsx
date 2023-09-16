import React from 'react'
import './NewArrival.css'
import { useEffect, useState } from "react"
import Ucard from '../upcoming/Ucard'
import { Link } from "react-router-dom"

export const NewArrival = ({ items , title }) => {

    // const [items, setItems] = useState([])
    // // const [popularMovies, setPopularMovies] = useState([])

    // useEffect(() => {
    //     fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
    //         .then(res => res.json())
    //         .then(data => setItems(data.results))
    // }, [])

    return (
        <>
            <section className='newArrival'>
                <div className='container'>
                    <div className='heading flexSB'>
                        <h1>{title}</h1>
                        <Link className='see-more' to='/'>See more <i className="fa fa-chevron-right arrow"></i></Link>
                    </div>
                    <div className='content'>
                        <div className="movie__list">
                            {/* <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2> */}
                            <div className="list__cards">
                                {
                                    items.map(item => (
                                        // <Card movie={movie} />
                                        <Ucard key={item.id} item={item} />
                                    ))

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </>
    )
}
