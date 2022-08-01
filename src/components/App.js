import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Movies from "./Movies/Movies";
import Sessions from "./Sessions/Sessions";
import Seats from "./Seats/Seats";
import Sucess from "./Sucess/Sucess";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/filme/:movieId" element={<Sessions />} />
          <Route path="/sessao/:sessionID" element={<Seats />} />
          <Route path="/sucesso" element={<Sucess />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
