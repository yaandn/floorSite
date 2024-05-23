import { Container, Infos, Title, Description, Image } from "./styles";
export const CleaningProduct = ({ title, description, image, id }) => {
  return (
    <Container>
      {id % 2 !== 0 ? (
        <>
          <Infos>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Infos>
          <Image src={image} alt="cleaning product Bona" />
        </>
      ) : (
        <>
          <Image src={image} alt="cleaning product Bona" />
          <Infos>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Infos>
        </>
      )}
    </Container>
  );
};
