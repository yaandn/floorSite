import { Container, Main } from "./styles.js";
import Button from "../Button/index.jsx";

export default function About() {
  return (
    <Container>
      <Main></Main>
      <div className="absolute-position">
        <img src="" alt="" />
        <div className="text-area">
          <h2 className="title">Affordable Luxury At Your Doorstep</h2>
          <span className="text">
            Welcome to Express Hardwood Floors, a family-operated business and
            your number one source for all things flooring. We&aposre dedicated
            to providing a wide selection of the best products. We are
            particularly passionate about hardwood, laminate, and luxury vinyl.
            Plus, our hardwood site finished flooring options and dustless
            hardwood refinishing services are top of the line!
          </span>
          <Button label="Learn more about us" path="#" />
        </div>
      </div>
    </Container>
  );
}
