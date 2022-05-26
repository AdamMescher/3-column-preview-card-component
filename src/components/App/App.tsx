import styled from "styled-components";
import Card from "../Card";
import VisuallyHidden from "../VisuallyHidden";
import theme from "../../theme";

import Sedans from "../assets/icon-sedans.svg";
import Suvs from "../assets/icon-suvs.svg";
import Luxury from "../assets/icon-luxury.svg";

const Wrapper = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 85px 22px;
  @media (min-width: 875px) {
    height: 100vh;
    flex-direction: row;
    justify-content: center;
  }
`;

const cards = [
  {
    color: theme.color.primary.brightOrange,
    icon: {
      src: Sedans,
      alt: "sedan"
    },
    title: "sedans",
    copy:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
  },
  {
    color: theme.color.primary.darkCyan,
    icon: {
      src: Suvs,
      alt: "suvs"
    },
    title: "suvs",
    copy:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
  },
  {
    color: theme.color.primary.veryDarkCyan,
    icon: {
      src: Luxury,
      alt: "luxury"
    },
    title: "luxury",
    copy:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
  }
];

function App() {
  return (
    <Wrapper data-testid="app">
      <VisuallyHidden>
        <h1>three column card preview card component sandbox</h1>
      </VisuallyHidden>
      {cards.map(({ color, icon, title, copy }) => (
        <Card key={title} color={color} icon={icon} title={title} copy={copy} />
      ))}
    </Wrapper>
  );
}

export default App;
