import { Container } from "./styles";
import MoreInfo from "../MoreInfo";

export default function Shortcut({ title, text, more, imgUrl, path }) {
  return (
    <Container>
      <img src={imgUrl} />
      <h2>{title}</h2>
      <p>{text}</p>
      <MoreInfo label={more} path={path} />
    </Container>
  );
}
