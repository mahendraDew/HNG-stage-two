import "./App.css"
import HomePage from "./pages/home/HomePage"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SinglePage from "./components/watch/SinglePage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { MovieDetails } from "./pages/movieDetails/MovieDetails";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='movies/:id' element={<MovieDetails />}></Route>
          <Route path='/singlepage/:id' element={SinglePage} exact />
        </Routes>
        <Footer />
      </Router>



      {/* <Router>
        <Header />
        
        <Routes>
          <Route index path='/' element={<HomePage />}></Route>
          <Route path='movie/:id' element={<h1>movie detail page</h1>}></Route>
          <Route path='movies/:type' element={<MovieList />}></Route>
          <Route path='/*' element={<h1>Error page</h1>}></Route>
        </Routes>
      </Router> */}
    </>
  )
}

export default App
