import "./App.css";
import Board from "./Games/pentago/src/Board";
import { Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Pentago" element={<Board />} />
      </Routes>
    </>
  );
}

export default App;
