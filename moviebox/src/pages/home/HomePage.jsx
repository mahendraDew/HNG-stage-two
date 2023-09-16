import React, { useEffect, useState } from "react"
import Homes from "../../components/homes/Homes"
import Upcomming from "../../components/upcoming/Upcomming"
import { latest, recommended, upcome } from "../../dummyData"
import { NewArrival } from "../../components/new Arrival/NewArrival"
import Header from "../../components/header/Header"

const HomePage = () => {


  const [items, setItems] = useState([])
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then(res => res.json())
      .then(data => setItems(data.results))
  }, [])
  const sliceItems = items.slice(0, 10);

  const [upItem, setUpItem] = useState([])
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then(res => res.json())
      .then(data => setUpItem(data.results))
  }, [])
  const sliceUpItem = upItem.slice(0, 10);


  // const [items, setItems] = useState(upcome)
  // const [item, setItem] = useState(latest)
  const [rec, setRec] = useState(recommended)
  return (
    <>
      <Header />
      <Homes />
      <Upcomming items={sliceItems} title='Featured Movies' />
      {/* <Upcomming items={upItem} title='New Arrival' /> */}
      <NewArrival items={sliceUpItem} title='New Arrival'/>
    </>
  )
}

export default HomePage
