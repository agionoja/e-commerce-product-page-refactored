import Box from "./components/Box.jsx";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import HeroCard from "./components/HeroCard.jsx";
import Main from "./components/Main.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <Box>
      <Header>
        <Nav>
          <Cart />
        </Nav>
      </Header>
      <HeroCard />
      <Main></Main>
    </Box>
  );
}

export default App;
