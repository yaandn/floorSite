import { Container } from "./styles";
import Shortcut from "../Shortcut";

import Reviews from "../../assets/reviews.png";
import Request from "../../assets/request.png";
import Services from "../../assets/services.png";

export default function Shortcuts() {
  return (
    <Container id="reviews">
      <Shortcut
        title="Reviews"
        text="The Lenexa, Kansas area trusts Express Hardwood Floors for all of their flooring needs."
        more="Read our reviews"
        imgUrl={Reviews}
        path=""
      />
      <Shortcut
        title="Request A Free Estimate"
        text="Request your accurate and professional in-home flooring estimate"
        more="Schedule now"
        imgUrl={Request}
        path="https://wa.me/19133076990?text=Hello,%20I%20would%20like%20to%20know%20about%20your%20flooring%20services"
      />
      <Shortcut
        title="Services"
        text="Our professional flooring installers are ready to help you with your next project."
        more="See what we offer"
        imgUrl={Services}
        path="https://www.instagram.com/easyfloorkc/"
      />
    </Container>
  );
}
