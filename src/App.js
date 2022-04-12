
import './App.css';
import { Routes, Route } from "react-router-dom";
import Signup from './page/signup/signup';
import Container from './components/container/container';
import Dashboard from './page/dashboard/Dashboard';
import Home from './page/home/Home';


function App() {
  return (
   <>
      <Routes>
        <Route path="signup" element={<Signup />} />

        <Route path="/" element={<Container />}>
          <Route index element={<Home />} />

          <Route path="/dashboard" element={<Dashboard />}/>

         /
        </Route>
      </Routes>
      </>
  );
}

export default App;
