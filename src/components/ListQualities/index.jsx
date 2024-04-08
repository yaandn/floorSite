import { Container, Main } from "./styles.js";
import Button from "../Button/index.jsx";

export default function ListQualities() {
  return (
    <Container>
      <Main></Main>
      <div className="absolute-position">
        <div className="text-area">
          <h2 className="title">Why Should You Choose Us?</h2>
          <ul>
            <li>Commitment to excellence</li>
            <li>Excellent relationships with suppliers</li>
            <li>Family owned & operated</li>
            <li>Highest quality products</li>
            <li>Highest quality service</li>
            <li>Next-day appointments available</li>
          </ul>
          <Button label="Learn more about us" path="#" />
        </div>
        <img src="" alt="" />
      </div>
    </Container>
  );
}
