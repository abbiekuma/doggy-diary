import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import DailyEntry from "./pages/DailyEntry";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/home" Component={HomePage} />
        <Route path="/daily" Component={DailyEntry} />
      </Routes>
    </Router>
  );
}

export default App;
