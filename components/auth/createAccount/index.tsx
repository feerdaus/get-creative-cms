import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CreateAcctStyle from "./CreateAcct.styles";
import SignupForm from "./SignupForm";
import Link from "next/link";

const Signup = () => {
  return (
    <Box component="section" sx={CreateAcctStyle.signupPage}>
      <Stack sx={CreateAcctStyle.container}>
        <Typography variant="h2">
          GetCreative
          <Box component="span" color="primary.main">
            CMS
          </Box>
        </Typography>
        <Typography variant="body1" mb={2}>
          Already have an account?&nbsp;&nbsp;
          <Box component="span" sx={CreateAcctStyle.login}>
            <Link href="./login">Log in</Link>
          </Box>
        </Typography>
        <SignupForm />
      </Stack>
    </Box>
  );
};

export default Signup;
