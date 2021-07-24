import { BrowserRouter, Route } from "react-router-dom";
import GlamPage from "../page/GlamPage";
import ProfilePage from "../page/ProfilePage";
import { Center, GlobalStyle, MaxWidth, theme } from "../util/styled";
import { ThemeProvider } from "styled-components";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Center>
        <MaxWidth>
          <BrowserRouter>
            <Route exact path="/" component={GlamPage} />
            <Route path="/profile" component={ProfilePage} />
            <GlobalStyle />
          </BrowserRouter>
        </MaxWidth>
      </Center>
    </ThemeProvider>
  );
}

export default App;
