import { Container } from "./styles.js";
import Inspired01 from "../../assets/inspired01.png";
import Inspired02 from "../../assets/inspired02.png";
import Inspired03 from "../../assets/inspired03.png";

export default function Gallery() {
  return (
    <Container id="inspiration">
      <h2>Get Inspired</h2>
      <p>
        Let us help choose the right flooring style for your home! Browse our
        beautiful flooring galleries to get started.
      </p>
      <div className="fotos">
        <img src={Inspired01} alt="" />
        <div className="imagens-pequenas">
          <img src={Inspired02} alt="" />
          <img src={Inspired03} alt="" />
        </div>
      </div>
    </Container>
  );
}
