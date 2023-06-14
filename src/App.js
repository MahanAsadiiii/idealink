// import { Card, Header, Information, Footer, CopyRight, Navbar } from "./components";
import Home from './pages/Home';
import Reports from './pages/Reports'
import { Route, Routes } from 'react-router-dom'
import Layout from "./components/Layout";

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/reports' element={<Reports/>}/>
        </Routes>
    </>
  );
}

export default App;
