import React, { useEffect, useState } from "react"
import Homes from "../../components/homes/Homes"
import Upcomming from "../../components/upcoming/Upcomming"
import { latest, recommended, upcome } from "../../dummyData"
import { NewArrival } from "../../components/new Arrival/NewArrival"

const HomePage = () => {


  const [items, setItems] = useState([])
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then(res => res.json())
      .then(data => setItems(data.results))
  }, [])

  const [upItem, setUpItem] = useState([])
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then(res => res.json())
      .then(data => setUpItem(data.results))
  }, [])



  // const [items, setItems] = useState(upcome)
  // const [item, setItem] = useState(latest)
  const [rec, setRec] = useState(recommended)
  return (
    <>
      <Homes />
      <Upcomming items={items} title='Featured Movies' />
      {/* <Upcomming items={upItem} title='New Arrival' /> */}
      <NewArrival items={upItem} title='New Arrival'/>
    </>
  )
}

export default HomePage
