/** @jsxImportSource @emotion/react */
import { Container } from "@mui/material";
import { AppRoutes } from "../../navigation";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { styles } from "./styles";

export const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Container css={styles.pageContainer}>
        <AppRoutes />
      </Container>
      <Footer />
    </div>
  );
};
