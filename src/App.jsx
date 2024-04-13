import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App;
