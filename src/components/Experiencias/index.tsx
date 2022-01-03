import SectionTitle from '../SectionTitle';
import ExperienciaItem from './ExperienciaItem';
import { Container } from './styles';

function Experiencias() {
  return (
    <Container>
      <SectionTitle title="Rituais e Habilidade" description="Desconjuração" />

      <section>
        <ExperienciaItem
          year=" 6º episódio e 20º episódio"
          title="Ritual de Controle Mental"
          description="O ritual permite que quem o conjura consiga controlar a mente de um alvo de sua escolha, podendo controlar o corpo do alvo completamente por um tempo limitado – podendo parar quando quiser, enquanto o alvo obedece a comandos. Mesmo não tendo controle algum de suas ações, a vítima ainda consegue falar (com dificuldade)."
        />

        <ExperienciaItem
          year="Orfanato Santa Menefreda"
          title="Ritual da Benção Maldita Discente"
          description=" O ritual permite que quem o conjura obtenha o resultado de suas 5 próximas tentativas (rolagens) de uma ação específica (perícia). Além disso, o ritual permite que o conjurador consiga modificar a ordem de seus sucessos, organizando de acordo com suas prioridades."
        />

        <ExperienciaItem
          year="Orfanato Santa Menefreda"
          title="Ritual de Teletransporte"
          description=" Permite a quem o conjura se locomover de um local a outro em segundos, desaparecendo em faíscas douradas durante o processo. Gal utilizou esse ritual para se teleportar atrás de Arthur e atacá-lo sem dar oportunidade de reação, durante a batalha contra os agentes no Orfanato Santa Menefreda. Gal também usou esse ritual para se teleportar atrás da agente Erin Parker e assassiná-la como ataque surpresa."
        />

        <ExperienciaItem
          year="Não ultilizado"
          title="Ritual de Sugada Mortal"
          description=" Gal não chegou a utilizar esse ritual, mas sabe o conjurar. O ritual retira permanentemente 2 pontos da constituição de seu alvo."
        />

      </section>

      <SectionTitle title="Rituais e Habilidade" description="Calamidade" />

      <section>
        <ExperienciaItem
          year=" Ritual de Velocidade Mortal e "
          title="Bloqueio Perfeito"
          description=" Ritual : Permite o usuário adquirir uma velocidade sobre-humana, ganhando uma ação extra, podendo ser usada como um ataque extra ou movimento.  
          Habilidade:  Permite que, caso seu usuário bloqueie com sucesso um ataque de corpo a corpo, não tome nenhum dano.
          "
        />

        <ExperienciaItem
          year="Ritual de Amaldiçoar Arma"
          title="Desviar de Balas e Resistente"
          description="Ritual :O ritual permite que ele amaldiçoe uma arma, dando a ela 1d6 de dano de conhecimento.
          Habilidade Desviar de balas: Permite que seu usuário consiga se esquivar de balas fora de cobertura a vontade, sem gastar sua reação.
          Habilidade Resistente: Garante ao usuário uma armadura natural, que reduz uma parte de qualquer dano físico.
          "
        />
      </section>
    </Container>
  );
}

export default Experiencias;