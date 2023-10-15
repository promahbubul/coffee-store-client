import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddCoffeee from "./components/AddCoffeee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SignUP from "./components/SignIn.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () =>
      fetch("https://coffee-store-server-six-blond.vercel.app/coffee"),
  },
  {
    path: "/addCoffee",
    element: <AddCoffeee></AddCoffeee>,
  },
  {
    path: "/updateCoffee/:id",
    loader: ({ params }) =>
      fetch(
        `https://coffee-store-server-six-blond.vercel.app/coffee/${params.id}`
      ),
    element: <UpdateCoffee></UpdateCoffee>,
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () =>
      fetch("https://coffee-store-server-six-blond.vercel.app/user"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);
