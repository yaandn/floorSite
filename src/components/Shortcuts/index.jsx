import { Container } from "./styles";
import Shortcut from "../Shortcut";

import Reviews from "../../assets/reviews.png";
import Request from "../../assets/request.png";
import Services from "../../assets/services.png";

export default function Shortcuts() {
  return (
    <Container>
      <Shortcut
        title="Reviews"
        text="The Lenexa, Kansas area trusts Express Hardwood Floors for all of their flooring needs."
        more="Read our reviews"
        imgUrl={Reviews}
      />
      <Shortcut
        title="Request A Free Estimate"
        text="Request your accurate and professional in-home flooring estimate"
        more="Schedule now"
        imgUrl={Request}
      />
      <Shortcut
        title="Services"
        text="Our professional flooring installers are ready to help you with your next project."
        more="See what we offer"
        imgUrl={Services}
      />
    </Container>
  );
}
