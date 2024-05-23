import { Container } from "./styles";
import Shortcut from "../Shortcut";
export default function Shortcuts() {
  return (
    <Container>
      <Shortcut
        title="Reviews"
        text="The Lenexa, Kansas area trusts Express Hardwood Floors for all of their flooring needs."
        more="Read our reviews"
      />
      <Shortcut
        title="Request A Free Estimate"
        text="Request your accurate and professional in-home flooring estimate"
        more="Schedule now"
      />
      <Shortcut
        title="Services"
        text="Our professional flooring installers are ready to help you with your next project."
        more="See what we offer"
      />
    </Container>
  );
}
