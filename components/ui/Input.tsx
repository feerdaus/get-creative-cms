import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Input = styled(InputBase)(({ theme, error }) => ({
  "label + &": {
    marginTop: theme.spacing(1),
  },
  "& .MuiInputAdornment-root": {
    position: "absolute",
    zIndex: 10,
    right: 15,
    height: "75%",
    backgroundColor: "#fff",
  },
  width: "100%",
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: `1px solid ${
      !error
        ? alpha(theme.palette.text.primary, 0.1)
        : alpha(theme.palette.error.main, 0.3)
    }`,
    fontSize: 14,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${
        !error
          ? alpha(theme.palette.primary.main, 0.25)
          : alpha(theme.palette.error.main, 0.25)
      } 0 0 0 0.2rem`,
      borderColor: !error
        ? alpha(theme.palette.primary.main, 0.3)
        : alpha(theme.palette.error.main, 0.3),
    },
  },
}));

export default Input;
