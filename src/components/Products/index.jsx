import { Container, CardContainer } from "./styles";
import Card from "../Card";
import Button from "../Button";

export default function Products() {
  return (
    <Container>
      <CardContainer>
        <Card title="Hardwood" footer="Browse Now..." />
        <Card title="Luxury Vinyl" footer="Browse Now..." />
        <Card title="Laminate" footer="Browse Now..." />
        <Card title="Site Finished" footer="Learn more" />
        <Card title="Dustless Refinishin" footer="Learn more" />
      </CardContainer>
      <div className="call-to-action">
        <span>Looking For New Floors In The Lenexa, Kansas Area?</span>
        <Button label="View All Products" path="#" />
      </div>
    </Container>
  );
}
