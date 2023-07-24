import { Container, Icon } from "./style";

export const Stack = ({ stack }: { stack: string[] }) => {
  return (
    <>
      <Container>
        {stack.map((item) => (
          <Icon
            key={item}
            style={{
              backgroundImage: `url(/icons/${item}.png)`,
            }}
          />
        ))}
      </Container>
    </>
  );
};
