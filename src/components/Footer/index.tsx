/** @jsxImportSource @emotion/react */
import { Box, Typography, Container } from "@mui/material";
import { styles } from "./styles";

export const Footer = () => {
  return (
    <Box component="footer" css={styles.root}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Footer Goes here
        </Typography>
        <Typography variant="subtitle1" align="center">
          Something here to give the footer a purpose!
        </Typography>
      </Container>
    </Box>
  );
};
