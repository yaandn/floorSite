import { Container, Header, Navigation, ItemMenu } from "./styles";
import Logo from "../../assets/logo.png";

import { IoCloseSharp } from "react-icons/io5";
import {
  FaHome,
  FaUser,
  FaGripHorizontal,
  FaImage,
  FaAlignLeft,
  FaPhoneAlt,
} from "react-icons/fa";

import { useContext } from "react";
import { MenuContext } from "../../context/menuContext";

export const MenuMobile = () => {
  const { isOpen, closeMenu } = useContext(MenuContext);

  return (
    <Container isOpen={isOpen}>
      <Header>
        <img src={Logo} alt="Logo Easy Floor" />
        <IoCloseSharp size={28} color="#fff" onClick={() => closeMenu()} />
      </Header>
      <Navigation>
        <a href="#">
          <ItemMenu>
            <FaHome className="icon" />
            <span>Home</span>
          </ItemMenu>
        </a>
        <a href="#">
          <ItemMenu>
            <FaAlignLeft className="icon" />
            <span>Reviews</span>
          </ItemMenu>
        </a>
        <a href="#">
          <ItemMenu>
            <FaPhoneAlt className="icon" />
            <span>Contact</span>
          </ItemMenu>
        </a>
        <a href="#">
          <ItemMenu>
            <FaUser className="icon" />
            <span>About us</span>
          </ItemMenu>
        </a>
        <a href="#">
          <ItemMenu>
            <FaGripHorizontal className="icon" />
            <span>Services</span>
          </ItemMenu>
        </a>
        <a href="#">
          <ItemMenu>
            <FaImage className="icon" />
            <span>Inspiration</span>
          </ItemMenu>
        </a>
      </Navigation>
    </Container>
  );
};
