import NavLink from "./NavLink";
import {Container} from './styles'

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Galeria" path="/galeria" includes />
      </ul>
    </Container>
  );
}

export default Header;
