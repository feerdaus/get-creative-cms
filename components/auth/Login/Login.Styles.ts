import { SxPropType } from "@lib/types";

interface LoginStyleProps {
  loginPage: SxPropType;
  formCont: SxPropType;
  container: SxPropType;
  createAcct: SxPropType;
}

const LoginStyle: LoginStyleProps = {
  loginPage: {
    height: "100vh",
    p: 2,
    backgroundColor: "primary.light",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100% ",
  },
  formCont: {
    backgroundColor: "white",
    p: 3,
    width: "100%",
    maxWidth: "540px",
    borderRadius: "10px",
  },
  createAcct: {
    border: "2px solid #2a4365",
    width: "100%",
    borderRadius: "5px",
    padding: "10px",
    textAlign: "center",
  },
};

export default LoginStyle;
