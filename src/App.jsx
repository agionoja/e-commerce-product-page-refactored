import Box from "./components/Box.jsx";
import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import HeroCard from "./components/HeroCard.jsx";
import Main from "./components/Main.jsx";
import Cart from "./components/Cart.jsx";
import productImg from "./assets/images/image-product-1.jpg";

function App() {
  const handleClear = () => {};
  return (
    <Box>
      <Header>
        <Nav>
          <Cart
            name={"Fall Limited Edition Sneakers"}
            image={String(productImg)}
            price={50}
            quantity={5}
            onCartClear={handleClear}
          />
        </Nav>
      </Header>
      <HeroCard />
      <Main></Main>
    </Box>
  );
}

export default App;
