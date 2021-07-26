import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlamPage from "../page/GlamPage";
import ProfilePage from "../page/ProfilePage";
import { Center, GlobalStyle, MaxWidth, theme } from "../util/styled";
import { ThemeProvider } from "styled-components";
import NotFoundPage from "../page/NotFoundPage";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Center>
        <MaxWidth>
          <BrowserRouter basename="/GLAM">
            <Switch>
              <Route exact path="/" component={GlamPage} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
          </BrowserRouter>
        </MaxWidth>
        <GlobalStyle />
      </Center>
    </ThemeProvider>
  );
}

export default App;
