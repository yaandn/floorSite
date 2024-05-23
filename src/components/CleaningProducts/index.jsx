import { Container, Title } from "./styles";
import { CleaningProduct } from "../CleaningProduct";
import { cleaningProducts } from "./cleaningProducts";

export default function CleaningProducts() {
  return (
    <Container>
      <Title>
        Explore the Excellence of the Bona Line for Your Hardwood Floors
      </Title>
      <div className="products">
        {cleaningProducts.map((product) => {
          return (
            <CleaningProduct
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              id={Number(product.id)}
            />
          );
        })}
      </div>
    </Container>
  );
}
