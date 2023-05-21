import { Interpolation } from "@emotion/react";
import { Theme } from "@mui/material";
import { theme } from "../config/theme";

export const makeStyles = <T extends string>(style: (theme: Theme) => Record<T, Interpolation<Theme>>) => {
  return style(theme);
};
