import BannerProjeto from '../../../components/BannerProjeto';
import Header from '../../../components/Header';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';
import projeto1 from '../../../assets/Projeto1.jpg'
import projeto2 from '../../../assets/Projeto2.png'
import projeto3 from '../../../assets/Projeto3.jpg'
import projeto4 from '../../../assets/Projeto4.png'



export default function Projeto() {
  return (
    <ProjetoContainer>
      <Header />
      <BannerProjeto imgUrl={projeto1} title="Gal junto a Kian no 6º episódio de Desconjuração" type="" />
      <BannerProjeto imgUrl={projeto2} title="Gal jovem junto as outras crianças do Orfanato em 2006" type="" />
      <BannerProjeto imgUrl={projeto3} title="Gal na abertura de Desconjuração" type="" />
      <BannerProjeto imgUrl={projeto4} title="Marca de João aplicada ao Gal" type="" />

      <main>
        <p>
          Gal é um dos protagonistas da série Ordem Paranormal, presente em Desconjuração e Calamidade. Gal foi apresentado primeiramente como um antagonista em Desconjuração, sendo o líder dos Escriptas, também conhecidos como Culto do Conhecimento.
        </p>

        <button type="button">
          <a href="https://ordemparanormal.fandom.com/wiki/Gal">Ver mais</a>
        </button>
      </main>
    </ProjetoContainer>


  )
}