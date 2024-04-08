import { Container } from "./styles";
import { Link } from "react-router-dom";
import MoreInfo from "../MoreInfo";

export default function Card({ title, footer }) {
  return (
    <Container>
      <Link className="title">{title}</Link>
      <MoreInfo label={footer} />
    </Container>
  );
}
