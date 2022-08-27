import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Hidden from "@mui/material/Hidden";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Link from "next/link";
import { ThemeProvider } from "@emotion/react";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={{
        backgroundColor: "primary.dark",
        color: "white",
      }}
      elevation={0}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Toolbar disableGutters>
          <Typography variant="h6" color="text.primary">
            GET-CREATIVE
          </Typography>
        </Toolbar>

        <Stack
          className="fs-20-23"
          direction="row"
          spacing={8}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Hidden smDown>
            <Link href="/Pricing">Pricing</Link>
            <Link href="/About">About</Link>
          </Hidden>
          <Link href="/signup">
            <Button variant="outlined" className="btn fs-20-23">
              Sign up
            </Button>
          </Link>
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
