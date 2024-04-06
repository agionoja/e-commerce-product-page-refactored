import Box from "./components/Box.jsx";
import Header from "./components/Header.jsx";
import Nav from "./components/navigation/Nav.jsx";
import HeroCard from "./components/HeroCard.jsx";
import Main from "./components/Main.jsx";
import Cart from "./components/Cart.jsx";
import productImg from "./assets/images/image-product-1.jpg";
import { useState } from "react";

function App() {
  const [quantity, setQuantity] = useState(1);
  const handleClear = () => {
    setQuantity(0);
    console.log(quantity);
  };
  return (
    <Box>
      <Header></Header>
      <HeroCard />
      <Main></Main>
    </Box>
  );
}

export default App;
