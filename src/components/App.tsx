import { BrowserRouter, Route } from "react-router-dom";
import GlamPage from "../page/GlamPage";
import ProfilePage from "../page/ProfilePage";
import { GlobalStyle, theme } from "../util/styled";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Route exact path="/" component={GlamPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
