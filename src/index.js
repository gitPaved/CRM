import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Contact, EditContact, Home, Root } from "./routes";
import { ErrorPage } from "./pages";
import {
  loader as rootLoader,
  action as rootAction,
  loaderContact,
  actionEdit,
  actionDeleteContact as destroyAction
} from "./helpers/utils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: loaderContact,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: loaderContact,
        action: actionEdit
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
