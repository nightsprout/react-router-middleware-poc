import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {withMiddleware} from "./Routing/WithMiddleware";
import { LogBeforeLoad } from "./Routing/Middleware/LogBeforeLoad";
import { LogAfterLoad } from "./Routing/Middleware/LogAfterLoad";
import { ErrorMessage } from "./Routing/Middleware/ErrorMessage";
import { A } from "./Pages/A";
import { B } from "./Pages/B";
import { C } from "./Pages/C";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/a'} element={
              withMiddleware(
                <A/>,
                [
                    LogBeforeLoad,
                    LogAfterLoad,
                    // ErrorMessage
                ]
              )
          }/>
          <Route path={'/b'} element={
              withMiddleware(
                <B/>,
                  [
                      LogAfterLoad,
                      LogBeforeLoad,
                      ErrorMessage
                  ]
              )
          }/>
          <Route path={'/c'} element={
              withMiddleware(
                <C/>,
                  [
                      LogBeforeLoad,
                      ErrorMessage,
                      LogAfterLoad,
                  ]
              )
          }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
