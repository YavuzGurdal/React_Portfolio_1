import { useContext } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import { styled } from "styled-components";

const Container = styled.div`
  height: 100vh;

  /* yavas hareket etmesi icin */
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  overflow-y: auto;

  /* yandaki scrollbari yoketmek icin */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  const theme = useContext(ThemeContext); // useContext le contex ten gelen ThemeContext i theme e atiyoruz
  const darkMode = theme.state.darkMode; // state den gelen darkMode u yeni darkMode a atiyoruz

  return (
    <Container
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </Container>
  );
}

export default App;
