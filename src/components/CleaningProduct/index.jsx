import { Container, Infos, Title, Description, Image } from "./styles";
export const CleaningProduct = ({ title, description, image, id }) => {
  const width = window.innerWidth;
  return (
    <Container>
      {id % 2 === 0 && width > 500 ? (
        <>
          <Image src={image} alt="cleaning product Bona" />
          <Infos>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Infos>
        </>
      ) : (
        <>
          <Infos>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </Infos>
          <Image src={image} alt="cleaning product Bona" />
        </>
      )}
    </Container>
  );
};
