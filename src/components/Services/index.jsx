import { Container } from "./styles";

import service1 from "../../assets/service1.jpg";
import service2 from "../../assets/service2.jpg";
import service3 from "../../assets/service3.jpg";
import service4 from "../../assets/service4.jpg";
import service5 from "../../assets/service5.jpg";
import service6 from "../../assets/service6.jpg";
import service7 from "../../assets/service7.jpg";
import service8 from "../../assets/service8.jpg";
import service9 from "../../assets/service9.jpg";
import service10 from "../../assets/service10.jpg";
import service11 from "../../assets/service11.jpg";
import service12 from "../../assets/service12.jpg";
import service13 from "../../assets/service13.jpg";
import service14 from "../../assets/service14.jpg";
import service15 from "../../assets/service15.jpg";

export const Services = () => {
  return (
    <Container id="services">
      <h2>Our Services</h2>
      <div className="image-container">
        <img src={service1} alt="" />
        <img src={service2} alt="" />
        <img src={service3} alt="" />
        <img src={service4} alt="" />
        <img src={service5} alt="" />
        <img src={service6} alt="" />
        <img src={service7} alt="" />
        <img src={service8} alt="" />
        <img src={service9} alt="" />
        <img src={service10} alt="" />
        <img src={service11} alt="" />
        <img src={service12} alt="" />
        <img src={service13} alt="" />
        <img src={service14} alt="" />
        <img src={service15} alt="" />
      </div>
    </Container>
  );
};
