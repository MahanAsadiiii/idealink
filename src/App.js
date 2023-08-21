import Home from './pages/Home';
import Reports from './pages/Reports'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reports' element={<Reports />} />
      </Routes>
    </>
  );
}

export default App;
