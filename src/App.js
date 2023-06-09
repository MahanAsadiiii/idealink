import { Card, Header, Information, Footer, CopyRight, Navbar } from "./components";
// import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Information/>
      <Card/>
      <Footer/>
      <CopyRight/>
    </div>
  );
}

export default App;
