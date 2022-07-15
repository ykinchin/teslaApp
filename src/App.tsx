import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Battery from "./Pages/Battery/Battery";
import Body from "./Pages/Body/Body";
import Interior from "./Pages/Interior/Interior";
import Main from "./Pages/Main/Main";
import Range from "./Pages/Range/Range";
import Series from "./Pages/Models/Models";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Layout from "./Components/Layout/Layout";
import ModelItem from "./Components/ModelItem/ModelItem";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='models' element={<Series />} />
          <Route path="models/:modelID" element={<ModelItem/>}/>
          <Route path='range' element={<Range />} />
          <Route path='battery' element={<Battery />} />
          <Route path='body' element={<Body />} />
          <Route path='interior' element={<Interior />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
