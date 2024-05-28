import { Container, Main } from "./styles.js";
import Button from "../Button/index.jsx";
import Luxury from "../../assets/luxury.png";

export default function About() {
  return (
    <Container id="about">
      <Main></Main>
      <div className="absolute-position">
        <img src={Luxury} alt="" />
        <div className="text-area">
          <h2 className="title">Affordable Luxury At Your Doorstep</h2>
          <span className="text">
            Welcome to Easy Floor, your go-to destination for all your flooring
            needs! As a family-run business, we take pride in offering an
            extensive range of top-quality products. Our passion lies in
            hardwood, laminate, and luxury vinyl flooring, ensuring that you
            find the perfect fit for your space. Explore our collection of
            site-finished hardwood flooring options and experience our premium
            dustless hardwood refinishing services. At Easy Floor, we are
            committed to making your flooring journey effortless and enjoyable.
          </span>
          <Button label="Learn more about us" path="#" />
        </div>
      </div>
    </Container>
  );
}
