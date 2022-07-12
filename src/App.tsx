import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Battery from "./Pages/Battery/Battery";
import Body from "./Pages/Body/Body";
import Interior from "./Pages/Interior/Interior";
import Main from "./Pages/Main/Main";
import Range from "./Pages/Range/Range";
import Series from "./Pages/Models/Models";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const App: FC = () => {
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
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
