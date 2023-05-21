import GlobalStyles from "@mui/material/GlobalStyles";

export const GlobalAppStyles = () => {
  return (
    <GlobalStyles
      styles={{
        body: {
          margin: 0,
          fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            "Oxygen",
            "Ubuntu",
            "Cantarell",
            "Fira Sans",
            "Droid Sans",
            "Helvetica Neue",
            "sans-serif",
          ].join(","),
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        code: {
          fontFamily: ["source-code-pro", "Menlo", "Monaco", "Consolas", '"Courier New"', "monospace"].join(","),
        },
      }}
    />
  );
};
