import { BrowserRouter as Router, Link, Routes, Route, Navigate } from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Home from "./components/home/Home";
import Policy from "./components/policy/Policy";
import NavBar from "./components/navbar/NavBar";
import NewPolicy from "./components/policy/NewPolicy";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="flex flex-col h-screen  bg-slate-300">
        <QueryClientProvider client={queryClient} >
            <Router >
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/add_policy' element={<NewPolicy />} />
                    <Route path='/policy/:policyNumber' element={<Policy/>} />
                </Routes>
            </Router> 
        </QueryClientProvider>

    </div>

  );
}

export default App;
