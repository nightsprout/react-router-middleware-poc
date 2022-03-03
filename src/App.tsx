import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {withMiddleware} from "./Routing/WithMiddleware";
import { ApplyWrapper } from "./Routing/Middleware/ApplyWrapper";
import { LogAfterLoad } from "./Routing/Middleware/LogAfterLoad";
import { ErrorMessage } from "./Routing/Middleware/ErrorMessage";
import { A } from "./Pages/A";
import { B } from "./Pages/B";
import { C } from "./Pages/C";
import {Delay} from "./Routing/Middleware/Delay";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/a'} element={
              withMiddleware(
                <A/>,
                <p>Loading...</p>,
                [
                    ApplyWrapper,
                    LogAfterLoad,
                    Delay,
                    // ErrorMessage
                ]
              )
          }/>
          <Route path={'/b'} element={
              withMiddleware(
                <B/>,
                <p>Loading...</p>,
                [
                  LogAfterLoad,
                  ApplyWrapper,
                  Delay,
                  ErrorMessage
                ]
              )
          }/>
          <Route path={'/c'} element={
              withMiddleware(
                <C/>,
                <p>Loading...</p>,
                [
                  ApplyWrapper,
                  ErrorMessage,
                  Delay,
                  LogAfterLoad,
                ]
              )
          }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
