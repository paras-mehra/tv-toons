import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AnimePage from "./Pages/AnimePage";
import MoviesPage from "./Pages/MoviesPage";
import RequestPage from "./Pages/RequestPage";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
      </Routes>
      <Routes>
        <Route path="/anime" exact element={<AnimePage/>}></Route>
      </Routes>
      <Routes>
        <Route path="/movies" exact element={<MoviesPage/>}></Route>
      </Routes>
      <Routes>
        <Route path="/request" exact element={<RequestPage/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
