import { RiMenuLine } from "react-icons/ri";
import { Container } from "./styles";
import Logo from "../../assets/logo.png";
import { useContext } from "react";
import { MenuContext } from "../../context/menuContext";

export const HeaderMobile = () => {
  const { openMenu } = useContext(MenuContext);
  return (
    <Container>
      <img src={Logo} alt="Logo-Easy-Floor" />
      <RiMenuLine color="#fff" size={28} onClick={() => openMenu()} />
    </Container>
  );
};
