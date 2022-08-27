import LoginForm from "./LoginForm";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import LoginStyle from "./Login.Styles";

const Login = () => {
  return (
    <Box sx={LoginStyle.loginPage}>
      <Stack sx={LoginStyle.container}>
        <Typography variant="h2">
          GetCreative
          <Box component="span" color="primary.main">
            CMS
          </Box>
        </Typography>
        <LoginForm />
      </Stack>
    </Box>
  );
};

export default Login;
