import { ThemeProvider } from "@emotion/react";
import { theme } from "./config/theme";
import { Provider } from "react-redux";
import { persistor, store } from "./state/store";
import { StyledEngineProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { MainLayout } from "./components/MainLayout";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { GlobalAppStyles } from "./config/theme/global";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <GlobalAppStyles />
            <BrowserRouter>
              <MainLayout />
              <ToastContainer />
            </BrowserRouter>
          </ThemeProvider>
        </StyledEngineProvider>
      </PersistGate>
    </Provider>
  );
};

