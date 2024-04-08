import { Container } from "./styles";
import MoreInfo from "../MoreInfo";

export default function Shortcut({ title, text, more }) {
  return (
    <Container>
      <img src="" alt="" />
      <h2>{title}</h2>
      <p>{text}</p>
      <MoreInfo label={more} />
    </Container>
  );
}
