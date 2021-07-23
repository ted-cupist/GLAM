import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
* {
  font-family: "Noto Sans KR", sans-serif;
  margin : 0;
  padding : 0;
}
`;

const size = {
  mobile: "500px",
  tablet: "767px",
  smallDesktop: "900px",
  desktop: "1250px",
};

const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  smallDesktop: `@media only screen and (max-width: ${size.smallDesktop})`,
  desktop: `@media only screen and (max-width: ${size.desktop})`,
};

export const theme = {
  device,
};
