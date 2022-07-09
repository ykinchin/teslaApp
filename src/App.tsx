import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Battery from "./Pages/Battery";
import Body from "./Pages/Body";
import Interior from "./Pages/Interior";
import Launch from "./Pages/Launch";
import Main from "./Pages/Main/Main";
import Range from "./Pages/Range";
import Series from "./Pages/Series";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/series' element={<Series />} />
        <Route path='/range' element={<Range />} />
        <Route path='/battery' element={<Battery />} />
        <Route path='/body' element={<Body />} />
        <Route path='/interior' element={<Interior />} />
        <Route path='/launch' element={<Launch />} />
      </Routes>
    </div>
  );
}

export default App;
