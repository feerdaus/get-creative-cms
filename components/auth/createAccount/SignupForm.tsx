import { FinalFormInput } from "@components/ui";
import { FC, useState } from "react";
import { signup } from "@lib/api";
import { SignupData } from "@lib/types";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import { Form } from "react-final-form";
import { toast } from "react-toastify";
import CreateAcctStyle from "./CreateAcct.styles";
import Mail from "@mui/icons-material/MailOutlineOutlined";
import Lock from "@mui/icons-material/LockOutlined";
import Person from "@mui/icons-material/PersonOutlineOutlined";

const SignupForm: FC = () => {
  const [visible, setVisible] = useState(false);

  const onSubmit = async (values: SignupData) => {
    try {
      const { data } = await signup(values);
      console.log(data);
    } catch (error: any) {
      toast.error(error?.message ?? "Unable to login");
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, invalid }) => (
        <form onSubmit={handleSubmit}>
          <Box sx={CreateAcctStyle.form}>
            <Box>
              <FinalFormInput
                name="first name"
                type="first name" // input types such as text, tel, number, email etc... defaults to text
                placeholder="First name"
                icon={<Person fontSize="small" />}
                label="First name"
              />

              <FinalFormInput
                name="last name"
                type="last name" // input types such as text, tel, number, email etc... defaults to text
                placeholder="Last name"
                icon={<Person fontSize="small" />}
                label="Last name"
              />
            </Box>

            <FinalFormInput
              name="email"
              type="email" // input types such as text, tel, number, email etc... defaults to text
              placeholder="Email"
              icon={<Mail fontSize="small" />}
              label="Email"
            />

            <FinalFormInput
              name="password"
              type={visible ? "text" : "password"} // input types such as text, tel, number, email etc... defaults to text
              placeholder="Password"
              icon={<Lock fontSize="small" />}
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

            <LoadingButton
              type="submit"
              disabled={invalid}
              loading={submitting}
              variant="contained"
              size="large"
            >
              Register
            </LoadingButton>
          </Box>
        </form>
      )}
    />
  );
};

export default SignupForm;
