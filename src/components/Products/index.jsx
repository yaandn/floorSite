import { Container, CardContainer } from "./styles";
import Card from "../Card";
import Button from "../Button";

import Laminate from "../../assets/laminate.png";
import Dustless from "../../assets/dustless.png";
import Hardwood from "../../assets/hardwood.png";
import Luxury from "../../assets/luxuryVinyl.png";

export default function Products() {
  return (
    <Container>
      <CardContainer>
        <Card title="Hardwood" urlImg={Hardwood} />
        <Card title="Luxury Vinyl" urlImg={Luxury} />
        <Card title="Laminate" urlImg={Laminate} />
        <Card title="Dustless Refinishin" urlImg={Dustless} />
      </CardContainer>
      <div className="call-to-action">
        <span>Looking For New Floors In The Lenexa, Kansas Area?</span>
        <Button label="View All Products" path="#" />
      </div>
    </Container>
  );
}
