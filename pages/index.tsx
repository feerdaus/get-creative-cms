import { ThemeProvider } from "@emotion/react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import theme from "../Theme";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        sx={{ color: "text.secondary", backgroundColor: "primary.main" }}
      >
        Hello World
      </Button>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit et
        reprehenderit autem eaque, quaerat culpa aut totam repudiandae
        distinctio accusantium nemo iusto id blanditiis magni officia commodi
        voluptatum quam! Expedita? Quasi, odit non! Deserunt, nesciunt
        consectetur nihil tempora suscipit tempore aperiam soluta magni animi
        facere veniam, ullam ducimus, amet perspiciatis aliquam aspernatur
        sapiente assumenda dolore vel atque laudantium dolor exercitationem.
        Cumque, suscipit placeat eaque consequatur nesciunt similique, modi,
        pariatur magni commodi sunt a perspiciatis vel totam vitae earum autem
        nobis recusandae officiis quia minima voluptates. Illum necessitatibus
        similique sint aut.
      </Typography>
      ;
    </ThemeProvider>
  );
};

export default Home;
