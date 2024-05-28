import { Container } from "./styles";

import { IoIosArrowRoundForward } from "react-icons/io";

export default function MoreInfo({ label, path }) {
  return (
    <Container className="footer">
      <a href={path} className="link-footer" target="_blank">
        {label}
        <IoIosArrowRoundForward size={28} />
      </a>
    </Container>
  );
}
