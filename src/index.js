import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router-dom";
import router from './router';
import {ReactQueryProvider} from "./Provider";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import "./locales/i18n";
import {AuthProvider} from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ReactQueryProvider>
          <AuthProvider>
              <RouterProvider router={router}/>
              <ReactQueryDevtools initialIsOpen={false} />
          </AuthProvider>
      </ReactQueryProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
