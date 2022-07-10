import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Battery from "./Pages/Battery/Battery";
import Body from "./Pages/Body/Body";
import Interior from "./Pages/Interior";
import Launch from "./Pages/Launch";
import Main from "./Pages/Main/Main";
import Range from "./Pages/Range/Range";
import Series from "./Pages/Series";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
