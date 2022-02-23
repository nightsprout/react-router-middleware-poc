import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {withMiddleware} from "./Routing/WithMiddleware";
import { Check1 } from "./Routing/Middleware/Check1";
import { Check2 } from "./Routing/Middleware/Check2";
import { Check3 } from "./Routing/Middleware/Check3";
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
                    Check1,
                    Check2,
                    Check3
                ]
              )
          }/>
          <Route path={'/b'} element={
              withMiddleware(
                <B/>,
                  [
                      Check2,
                      Check1,
                      Check3
                  ]
              )
          }/>
          <Route path={'/c'} element={
              withMiddleware(
                <C/>,
                  [
                      Check1,
                      Check3,
                      Check2,
                  ]
              )
          }/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
