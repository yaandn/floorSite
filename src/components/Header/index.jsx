import { Container, Logo, Navigation, Search } from "./styles";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  return (
    <Container>
      <Logo />
      <Navigation>
        <div className="infos">
          <div className="item">
            <FaPhone size={18} />
            <span>(913) 800-7397</span>
          </div>
          <div className="item">
            <FaLocationDot size={18} />
            <span>11080 Strang Line Road Lenexa, KS 66215</span>
          </div>
        </div>
        <div className="nav">
          <div className="nav-item">Products</div>
          <div className="nav-item">Services</div>
          <div className="nav-item">Reviews</div>
          <div className="nav-item">Inspiration</div>
          <div className="nav-item">About Us</div>
          <div className="nav-item">Contact</div>
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
