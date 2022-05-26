const theme = {
  layout: {
    breakpoint: {
      mobile: "375px",
      desktop: "1440px"
    }
  },
  color: {
    primary: {
      brightOrange: "hsl(31, 77%, 52%)",
      darkCyan: "hsl(184, 100%, 22%)",
      veryDarkCyan: "hsl(179, 100%, 13%)"
    },
    neutral: {
      transparentWhite: "hsla(0, 0%, 100%, 0.75)",
      veryLightGray: "hsl(0, 0%, 95%)"
    }
  },
  typography: {
    body: {
      fontSize: "15px"
    },
    font: {
      family: {
        lexendDeca: {
          fontFamily: "'Lexend Deca', sans-serif",
          weights: {
            regular: 400
          }
        },
        bigShouldersDisplay: {
          fontFamily: "'Big Shoulders Display', cursive",
          weights: {
            bold: 700
          }
        }
      }
    }
  }
};

export default theme;
