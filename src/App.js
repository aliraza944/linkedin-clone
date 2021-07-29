import Navigation from "./Components/Navigation";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./Components/Theme";
import { ThemeProvider } from "@material-ui/core";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation></Navigation>
    </ThemeProvider>
  );
}

export default App;
