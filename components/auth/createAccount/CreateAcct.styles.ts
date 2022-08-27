import { SxPropType } from "@lib/types";

interface CreateAcctStyleProps {
  signupPage: SxPropType;
  container: SxPropType;
  form: SxPropType;
  names: SxPropType;
  login: SxPropType;
  adornment: SxPropType;
}

const CreateAcctStyle: CreateAcctStyleProps = {
  signupPage: {
    height: "100vh",
    p: 3,
    bgcolor: "primary.light",
  },
  container: {
    height: "100%",
    maxWidth: "540px",
    margin: "auto",
  },
  form: {
    width: "100%",
    p: 3,
    maxWidth: "540px",
    borderRadius: "10px",
    backgroundColor: "white",
  },
  names: {
    display: { xs: "block", sm: "flex" },
    gap: 2,
  },
  login: {
    textAlign: "left",
    width: "100%",
    color: "primary.main",
    cursor: "pointer",
    ":hover": {
      textDecoration: "underline",
    },
  },
  adornment: {
    color: "black",
    fontWeight: 500,
    cursor: "pointer",
    px: 1,
    "&.MuiInputAdornment-root": {
      backgroundColor: "transparent",
    },
    ":hover": {
      color: "primary.dark",
    },
  },
};

export default CreateAcctStyle;
