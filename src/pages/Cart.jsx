import { Container } from '../components/UI/Container/Container';
import { Heading } from '../components/UI/Heading/Heading';
import { Section } from '../components/UI/Section/Section';
import { Wrapper } from '../components/UI/Wrapper/Wrapper';

export const Cart = () => {
  return (
    <main>
      <Section>
        <Container>
          <Wrapper>
            <Heading tag="h2" text="Cart" />

            <p>sample cart text</p>
          </Wrapper>
        </Container>
      </Section>
    </main>
  );
};
