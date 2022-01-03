import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';
import projeto1 from '../../assets/Projeto1.jpg'
import projeto2 from '../../assets/Projeto2.png'
import projeto3 from '../../assets/Projeto3.jpg'
import projeto4 from '../../assets/Projeto4.png'


function Projetos() {
  return (
    <Container>
      <SectionTitle title="Galeria" />

      <section>
        <ProjetoItem img={projeto1} title="Gal junto a Kian no 6º episódio de Desconjuração" type="Primeira aparição" slug="teste"/>
        <ProjetoItem img={projeto2} title="Gal jovem junto as outras crianças do Orfanato em 2006" type="" slug="teste"/>
        <ProjetoItem img={projeto3} title="Gal na abertura de Desconjuração" type="" slug="teste"/>
        <ProjetoItem img={projeto4} title="Marca de João aplicada ao Gal" type="" slug="teste"/>
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todas imagens</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projetos;