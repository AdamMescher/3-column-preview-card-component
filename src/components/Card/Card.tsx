import styled from "styled-components";

interface Icon {
  src: string;
  alt: string;
}

interface Props {
  color: string;
  icon: Icon;
  title: string;
  copy: string;
}

const Wrapper = styled.article<{ color: string }>`
  background: ${({ color }) => color};
  padding: 50px;
  flex: 1 0 328px;
  &:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  &:last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  @media (min-width: 840px) {
    padding: 40px;
    flex: 1 0 275px;
    min-height: 450px;
    &:first-child {
      border-top-right-radius: 0;
      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
    }
    &:last-child {
      border-bottom-left-radius: 0;
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }
`;
const Title = styled.h2`
  margin-top: 40px;
  font-family: var(--ff-big-shoulder-display);
  font-size: 32px;
  color: var(--very-light-gray);
  text-transform: uppercase;
`;
const Copy = styled.p`
  margin-top: 40px;
  width: 26ch;
  line-height: 1.8;
  color: var(--transparent-white);
  @media (min-width: 840px) {
    width: 23ch;
  }
`;
const Button = styled.button<{ color: string }>`
  margin-top: 30px;
  border: none;
  border-radius: 999999px;
  border: 2px solid transparent;
  color: ${({ color }) => color};
  background: var(--very-light-gray);
  font-size: 18px;
  padding: 18px 28px;
  cursor: pointer;
  transition: 250ms ease-in-out;
  &:hover {
    transition: 250ms ease-in-out;
    background: transparent;
    color: var(--very-light-gray);
    border-color: var(--very-light-gray);
  }
`;

const Card = ({ color, icon, title, copy }: Props) => {
  return (
    <Wrapper color={color}>
      <img src={icon.src} alt={icon.alt} />
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
      <Button color={color}>Learn More</Button>
    </Wrapper>
  );
};

export default Card;
