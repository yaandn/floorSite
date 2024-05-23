import { Container } from "./styles";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function MoreInfo({ label }) {
  return (
    <Container className="footer">
      <Link className="link-footer">
        {label}
        <IoIosArrowRoundForward size={28} />
      </Link>
    </Container>
  );
}
