import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/header/Header'
import { Home } from './components/home/Home';
import { HomePage } from './homePage/HomePage';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Routes>
          <Route index path='/' element={<HomePage />}></Route>
          <Route path='movie/:id' element={<h1>movie detail page</h1>}></Route>
          <Route path='movies/:type' element={<h1>movie list page</h1>}></Route>
          <Route path='/*' element={<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
