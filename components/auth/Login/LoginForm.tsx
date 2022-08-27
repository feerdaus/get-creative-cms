import { FinalFormInput } from "@components/ui";
import { FC, useState } from "react";
import { login } from "@lib/api";
import { LoginData } from "@lib/types";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import { Form } from "react-final-form";
import { toast } from "react-toastify";
import CreateAcctStyle from "../CreateAccount/CreateAcct.styles";
import LoginStyle from "./Login.Styles";

import Mail from "@mui/icons-material/MailOutlineOutlined";
import Lock from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const LoginForm: FC = () => {
  const [visible, setVisible] = useState(false);

  const onSubmit = async (values: LoginData) => {
    try {
      const { data } = await login(values);
      console.log(data);
    } catch (error: any) {
      toast.error(error?.message ?? "Unable to login");
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, invalid }) => (
        <Box sx={LoginStyle.formCont}>
          <form onSubmit={handleSubmit}>
            <FinalFormInput
              name="email"
              type="email" // input types such as text, tel, number, email etc... defaults to text
              placeholder="Email"
              label="Email"
            />

            <FinalFormInput
              name="password"
              type={visible ? "text" : "password"} // input types such as text, tel, number, email etc... defaults to text
              placeholder="Password"
              label="Password"
              adornment={
                <InputAdornment
                  onClick={() => setVisible(!visible)}
                  onMouseDown={(e) => e.preventDefault()}
                  position="end"
                  sx={CreateAcctStyle.adornment}
                >
                  <Box>{visible ? "Hide" : "Show"}</Box>
                </InputAdornment>
              }
            />

            <Box
              mb={3}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography className="blue-hover">Forgot Password?</Typography>
              <LoadingButton
                type="submit"
                disabled={invalid}
                loading={submitting}
                variant="contained"
                size="large"
              >
                Login
              </LoadingButton>
            </Box>
            <Box sx={LoginStyle.createAcct} className="blue-hover">
              <Link href="./signup">Don’t have an account?</Link>
            </Box>
          </form>
        </Box>
      )}
    />
  );
};

export default LoginForm;
