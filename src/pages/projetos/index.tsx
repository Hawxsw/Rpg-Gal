import Header from '../../components/Header';
import { ProjetosContainer } from '../../styles/ProjetosStyles';
import projeto1 from '../../assets/Projeto1.jpg'
import projeto2 from '../../assets/Projeto2.png'
import projeto3 from '../../assets/Projeto3.jpg'
import projeto4 from '../../assets/Projeto4.png'
import ProjetoItem from '../../components/ProjetoItem';


export default function Projetos() {
  return (
    <ProjetosContainer>
      <Header />

      <main className='container'>
        <ProjetoItem title="Gal junto a Kian no 6º episódio de Desconjuração"  type="WebSite" slug="test" imgUrl={projeto1}/>
        <ProjetoItem title="Gal jovem junto as outras crianças do Orfanato em 2006" type="WebSite" slug="test" imgUrl={projeto2}/>
        <ProjetoItem title="Gal na abertura de Desconjuração" type="WebSite" slug="test" imgUrl={projeto3}/>
        <ProjetoItem title="Marca de João aplicada ao Gal" type="WebSite" slug="test" imgUrl={projeto4}/>
      </main>
    </ProjetosContainer>
  );
};

