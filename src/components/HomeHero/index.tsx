import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/LogoImg.png'

function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src ={picture} alt='Minha Logo'/>
      <div>
        <TextContainer>
          <h1>Gal</h1>
          <h2>"Injustiça, né? Muito prazer, eu sou a injustiça."</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem data-aos="zoom-in">
          <span className="comment">//Identidade</span>
          <span className='yellow'>Infos</span> {'\u007B'}
          <div>
            Ator: <span className='blue'>João "Jão" Miranda</span>
          </div>
          <div>
            Idade: <span className='blue'>Entre 20 e 30</span> 
          </div> 

          <div>
            Ocupação: <span className='blue'>Ocultista Escripta <br />(anteriormente)</span> 
          </div>

          <div>
            Afinidade: <span className='blue'>Conhecimento</span> 
          </div>

          <div>
            Status: <span className='blue'>Vivo</span> 
          </div>
          
          {'\u007D'}
          </CodeItem>

          <CodeItem data-aos="zoom-in">
            <span className='yellow'>Aparições</span> {'\u007b'}
            <div>
              Temporadas: <span className='blue'>Desconjuração e <br /> Calamidade</span>
            </div> 
            <div>
            Primeira aparição: <span className='blue'>Desconjuração - <br /> Episódio 6 - "Elizabeth"</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>      
    </Container>
  );
};

export default HomeHero;
