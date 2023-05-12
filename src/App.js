import { BrowserRouter as Router, Link, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router className="flex">
        <div className="flex flex-col">

            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        
        </div>
    </Router>
  );
}

export default App;
