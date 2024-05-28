import { Container } from "./styles";

export default function Button({ label, path }) {
  return (
    <a href={path} target="_blank">
      <Container>{label}</Container>
    </a>
  );
}
