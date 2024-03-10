import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { default as Dashboard } from "./pages/Dashboard/Dashboard";
import { default as CourseDetails } from "./pages/CourseDetails/CourseDetails";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App