import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Container } from "react-bootstrap";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <Container fluid className="bg-dark-subtle text-white p-0" >
      <BrowserRouter>
        <NavBar />
        <Container className="bg-dark mt-2 p-2" >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<h1>404: Page not found</h1>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Container>
  );
}
