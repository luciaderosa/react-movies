import "./App.css";
import {MovieDetail } from './pages/MovieDetail'
import { LandingPage } from "./pages/landingpage";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Container fluid={true} className="p-0 text-center">
        {/* <Link to="/">
          <header>Home (ToDo: Logo and menu)</header>
        </Link> */}
        

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
