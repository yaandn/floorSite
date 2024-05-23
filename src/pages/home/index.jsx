import { Container, TitleContainer } from "./styles";
import Button from "../../components/Button";
import Products from "../../components/Products";
import About from "../../components/About";
import Shortcuts from "../../components/Shortcuts";
import Shop from "../../components/Shop";
import ListQualities from "../../components/ListQualities";
import Gallery from "../../components/Gallery";
import CleaningProducts from "../../components/CleaningProducts";
import imageHome from "../../assets/home.png";

export default function Home() {
  return (
    <>
      <Container imgUrl={imageHome}>
        <TitleContainer>
          <span>Commitment To Excellence</span>
          <Button
            label="Contact us"
            path="https://wa.me/19133076990?text=Hello,%20I%20would%20like%20to%20know%20about%20your%20flooring%20services"
          />
        </TitleContainer>
      </Container>
      <Products />
      <About />
      <Shortcuts />
      <Shop />
      <ListQualities />
      <CleaningProducts />
      <Gallery />
    </>
  );
}
