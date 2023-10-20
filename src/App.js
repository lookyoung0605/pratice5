import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Celebirity from "./pages/Celebirity";
import TV from "./pages/TV";
import NotFound from "./pages/NotFound";
import Movie from "./pages/Movie";
import { movies } from "./movieDummy";

function App() {
  // git test
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movie"
            element={
              <div className="app-container">
                {movies.results.map((item) => {
                  return (
                    <Movie
                      poster_path={item.poster_path}
                      title={item.title}
                      vote_average={item.vote_average}
                      overview={item.overview}
                      key={item.id}
                    />
                  );
                })}
              </div>
            }
          />
          <Route path="/celebirity" element={<Celebirity />} />
          <Route path="/tv" element={<TV />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
