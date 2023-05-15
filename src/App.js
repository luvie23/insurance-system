import { BrowserRouter as Router, Link, Routes, Route, Navigate } from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Home from "./components/home/Home";
import Policy from "./components/policy/Policy";
import NavBar from "./components/navbar/NavBar";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="flex flex-col h-screen bg-slate-600">
        <QueryClientProvider client={queryClient} className="flex h-screen bg-green-600">
            <Router >
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/policy/:policyNumber' element={<Policy/>} />
                </Routes>
            </Router> 
        </QueryClientProvider>

    </div>

  );
}

export default App;
