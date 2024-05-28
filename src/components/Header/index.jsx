import { Container, Logo, Navigation, Search } from "./styles";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import LogoImg from "../../assets/logo.png";

export default function Header() {
  return (
    <Container>
      <Logo src={LogoImg} />
      <Navigation>
        <div className="infos">
          <div className="item">
            <FaPhone size={18} />
            <span>(913) 538-8541</span>
          </div>
          <div className="item">
            <FaLocationDot size={18} />
            <span>12318 s locust cir Olathe Kansas City 66062</span>
          </div>
        </div>
        <div className="nav">
          <a href="#services" className="nav-item">
            Services
          </a>
          <a href="#reviews" className="nav-item">
            Reviews
          </a>
          <a href="#inspiration" className="nav-item">
            Inspiration
          </a>
          <a href="#about" className="nav-item">
            About Us
          </a>
          <a href="#contact" className="nav-item">
            Contact
          </a>
        </div>
      </Navigation>
      <Search>
        <IoIosSearch size={22} />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="What Are You Looking for?"
        />
      </Search>
    </Container>
  );
}
