import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 20;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0)
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar color="#f11946" height={3} progress={progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  key="General"
                  country="in"
                  category="General"
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/Entertainment"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  key="Entertainment"
                  country="in"
                  category="Entertainment"
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/General"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  key="General"
                  country="in"
                  category="General"
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/Health"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  key="Health"
                  country="in"
                  category="Health"
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/Science"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  key="Science"
                  country="in"
                  category="Science"
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/Sports"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  key="Sports"
                  country="in"
                  category="Sports"
                />
              }
            >
              {" "}
            </Route>
            <Route
              exact
              path="/Technology"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  pageSize={pageSize}
                  key="Technology"
                  country="in"
                  category="Technology"
                />
              }
            >
              {" "}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
}
export default App;
