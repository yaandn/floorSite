import { Container } from "./styles";
import Button from "../Button";

export default function Shop() {
  return (
    <Container>
      <div>
        <h2>Shop In-Store</h2>
        <p>
          Come by our showroom and see what we have to offer. Our knowledgeable
          staff is ready to assist you in selecting the right flooring to ensure
          your satisfaction for years to come.
        </p>
        <Button label="Contact us" />
      </div>
      <div>
        <h2>Shop At Home</h2>
        <p>
          Don’t have time to stop by our showroom? We can bring samples right to
          your front door. Just schedule an appointment to get started.
        </p>
        <Button label="Get Started" />
      </div>
    </Container>
  );
}
