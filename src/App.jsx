import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import { SearchPage } from './Pages/SearchPage/SearchPage'
import MovieDetails from './Pages/MovieDetails/MovieDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Home />
            </div>
          }
        />
        <Route
          path="/search"
          element={
            <div className="app">
              <SearchPage />
            </div>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <div className="app">
              <MovieDetails />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
