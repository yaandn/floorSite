import { Container, Main } from "./styles";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import card3 from "../../assets/card3.svg";
import card4 from "../../assets/card4.svg";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

export default function Footer() {
  return (
    <Container>
      <Main>
        <div className="icons">
          <FaInstagram color="#fff" size={28} className="icon" />
          <FaFacebook color="#fff" size={28} className="icon" />
        </div>
        <div className="nav">
          <div className="paths">
            <a href="#">HOME</a>
            <a href="#">COMPANY</a>
            <a href="#">PRODUCTS</a>
            <a href="#">CONTACT</a>
            <a href="#">INSPIRATION</a>
            <a href="#">REVIEWS</a>
            <a href="#">SERVICES</a>
            <a href="#">LOCATION</a>
          </div>
          <div className="infos">
            <span>
              11080 Strang Line Road Lenexa, KS 66215 | (913) 800-7397
            </span>
          </div>
          <div className="cards">
            <img src={card1} alt="" />
            <img src={card2} alt="" />
            <img src={card3} alt="" />
            <img src={card4} alt="" />
          </div>
        </div>
        <a href="#">
          <MdOutlineKeyboardDoubleArrowUp size={40} color="#fff" />
        </a>
      </Main>
      <span className="copy">Copyright © 2024 Express Hardwood Floors</span>
    </Container>
  );
}
