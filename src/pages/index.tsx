import Experiencias from "../components/Experiencias";
import Footer from '../components/Footer';
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import Projetos from "../components/Projetos";


import { HomeContainer } from '../styles/HomeStyles';



export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiencias />
        <Projetos/>
      </main>

      <Footer />
    </HomeContainer>
  );
}
