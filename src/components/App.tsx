import { BrowserRouter, Route } from "react-router-dom";
import GlamPage from "../page/GlamPage";
import ProfilePage from "../page/ProfilePage";
import { GlobalStyle } from "../util/styled";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={GlamPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
