import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Private from "./Private";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/About"
        element={
          <Private>
            <About />
          </Private>
        }
      />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default Router;
