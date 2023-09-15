import React from 'react'

export const FCard = ({item:{id, cover, name, time}}) => {
  return (
   <>
        <div className="movieBox">
            <img src={cover} alt="" />
        </div>
        <div className="text">
            <h3>{name}</h3>
        </div>
   </>
  )
}
