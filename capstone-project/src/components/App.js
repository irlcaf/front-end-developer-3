import React from "react";
import SignUp from "./SignUp";
import Home from "./Home";
import Login from "./Login";
import NavBar from "./Navbar";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <Routes>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route exact path="/home" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </Router>
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
