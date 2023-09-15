import React from 'react'
import './FeaturedMovie.css'
import { Link } from 'react-router-dom'
import {FCard} from './FCard'

export const FeaturedMovie = ({ items, title}) => {
  return (
    <> 
        <section className="featured">
            <div className="container">
                <div className="heading flexSB">
                    <h1>{title}</h1>
                    <Link to='/'>See more</Link>
                </div>
                <div className="content">
                    {items.map((item) => (
                        <FCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}
