/** @jsxImportSource @emotion/react */
import "react-toastify/dist/ReactToastify.css";
import notifySuccessIcon from "../../assets/icons/notifySuccess.svg";
import notifyCrossIcon from "../../assets/icons/crossIcon.svg";
import { Id, toast } from "react-toastify";
import { Typography } from "@mui/material";
import { styles } from "./styles";

export const notifySuccess = (message: string) => {
  toast.success(
    <>
      <span css={styles.root}>
        <img src={notifySuccessIcon} alt="icons" height={35} />
        <span css={styles.span}>
          <Typography lineHeight={0}>{message}</Typography>
        </span>
      </span>
    </>,
    {
      icon: false,
      bodyStyle: { padding: "20px 0px" },
    }
  );
};

export const notifyError = (message: string) => {
  toast.error(
    <>
      <span css={styles.root}>
        <img src={notifyCrossIcon} alt="icons" height={35} />
        <span css={styles.span}>
          <Typography lineHeight={0}>{message}</Typography>
        </span>
      </span>
    </>,
    {
      icon: false,
      bodyStyle: { padding: "20px 0px" },
    }
  );
};

export const notifyLoading = (message: string) => {
  const id = toast.loading(message);
  return id;
};

export const notifyDismiss = (id: Id) => {
  return toast.dismiss(id);
};
