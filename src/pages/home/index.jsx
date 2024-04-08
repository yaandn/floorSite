import { Container, TitleContainer } from "./styles";
import Button from "../../components/Button";
import Products from "../../components/Products";
import About from "../../components/About";
import Shortcuts from "../../components/Shortcuts";
import Shop from "../../components/Shop";
import ListQualities from "../../components/ListQualities";
import Gallery from "../../components/Gallery";

import imageHome from "../../assets/home.jpg";

export default function Home() {
  return (
    <>
      <Container imgUrl={imageHome}>
        <TitleContainer>
          <span>Commitment To Excellence</span>
          <Button label="Read our Reviews" path="#" />
        </TitleContainer>
      </Container>
      <Products />
      <About />
      <Shortcuts />
      <Shop />
      <ListQualities />
      <Gallery />
    </>
  );
}
