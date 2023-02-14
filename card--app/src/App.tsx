import React from "react";
import "./App.css";
import theme from "./Theme";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import OrderCard from "./components/organisms/OrderCard";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <OrderCard />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  );
}

export default App;
