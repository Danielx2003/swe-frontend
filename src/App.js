import React from "react"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Splash from "./pages/Splash.jsx"
import Login from "./pages/Login.jsx"
import Main from "./pages/Main.jsx"
import Nav from "./components/Nav.jsx"

function App() {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Splash />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/main"
            element={<Main />}
          />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;