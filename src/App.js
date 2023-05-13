import { BrowserRouter as Router, Link, Routes, Route, Navigate } from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import Home from "./components/home/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Router className="flex h-60">
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </Router> 
    </QueryClientProvider>

  );
}

export default App;
