/** @jsxImportSource @emotion/react */
import { Button, ButtonProps, CircularProgress } from "@mui/material";
import { styles } from "./styles";

interface Props extends ButtonProps {
  loading?: boolean;
}

export const PrimaryButton = (props: Props) => {
  return (
    <Button disabled={props.loading} variant="contained" css={styles.root} {...props}>
      {props.loading ? <CircularProgress size={20} /> : props.children}
    </Button>
  );
};
