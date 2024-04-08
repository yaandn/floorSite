import { Container } from "./styles";
import { Link } from "react-router-dom";
export default function Button({ label, path }) {
  return (
    <Link to={path}>
      <Container>{label}</Container>
    </Link>
  );
}
