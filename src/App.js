import { BrowserRouter, Route, Routes } from "react-router-dom";
import Video from "./pages/Video";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/videos/:videoId" element={<Video />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
