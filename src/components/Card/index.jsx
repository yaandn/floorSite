import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function Card({ title, urlImg }) {
  return (
    <Container urlImg={urlImg}>
      <Link className="title">{title}</Link>
    </Container>
  );
}
