import { Container, CardShop } from "./styles";
import Button from "../Button";

import BgFloor from "../../assets/bgfloor.png";

export default function Shop() {
  return (
    <Container>
      <CardShop urlImg={BgFloor}>
        <h2>Shop Online</h2>
        <p>
          Explore our range of flooring options and make your purchase
          conveniently online. We are here to help you choose the perfect
          flooring for you, ensuring your satisfaction for years to come.
        </p>
        <Button label="Contact us" />
      </CardShop>
      <CardShop urlImg={BgFloor}>
        <h2>Shop At Home</h2>
        <p>
          Don’t have time to stop by our showroom? We can bring samples right to
          your front door. Just schedule an appointment to get started.
        </p>
        <Button label="Get Started" />
      </CardShop>
    </Container>
  );
}
