import { Card, Header, Information} from "../components";
import Layout from "../components/Layout";
// import { Route, Routes } from 'react-router-dom'

function Home() {
  return (
    <Layout>  
      <Header/>
      <Information/>
      <Card/>
    </Layout>
  );
}

export default Home;