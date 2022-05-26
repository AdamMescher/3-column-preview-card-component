import { createGlobalStyle } from "styled-components";
import theme from "../../theme";

const GlobalStyle = createGlobalStyle`
  :root {
    --bright-orange: ${theme.color.primary.brightOrange};
    --dark-cyan: ${theme.color.primary.darkCyan};
    --very-dark-cyan: ${theme.color.primary.veryDarkCyan};
    --transparent-white: ${theme.color.neutral.transparentWhite};
    --very-light-gray: ${theme.color.neutral.veryLightGray};
    --fs-body: ${theme.typography.body.fontSize};
    --ff-lexend-deca: ${theme.typography.font.family.lexendDeca.fontFamily};
    --ff-big-shoulder-display: ${theme.typography.font.family.bigShouldersDisplay.fontFamily};
    --fw-regular: ${theme.typography.font.family.lexendDeca.weights.regular};
    --fw-bold: ${theme.typography.font.family.bigShouldersDisplay.weights.bold};
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: var(--ff-lexend-deca);
    font-weight: var(--fw-regular);
    font-size: var(--fs-body);
  }
`;

export default GlobalStyle;
