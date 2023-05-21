import { makeStyles } from "../../utils/makeStyles";

export const styles = makeStyles((theme) => ({
  root: {
    minWidth: '200px',
    padding: "10px 30px",
    textTransform: "none",
    fontWeight: 600,
    lineHeight: "19.2px",
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.light,
    borderRadius: 10,
    marginTop: 4,
    "&:hover": {
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.secondary.light,
    },
    "&.Mui-disabled": {
      color: theme.palette.grey[700],
      backgroundColor: theme.palette.grey[500],
    },
  },
}));
