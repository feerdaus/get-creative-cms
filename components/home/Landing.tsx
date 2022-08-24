import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import HomeStyles from "./Home.styles";
import Link from "next/link";

const Landing = () => {
  const buttonStyles = {
    mt: 4,
    "&:hover": {
      backgroundColor: "primary.main",
    },
  };
  return (
    <Box component="section" sx={HomeStyles.container}>
      <Box bgcolor="primary.light" sx={HomeStyles.hero}>
        <Box color="white" pt={10} px={2} sx={HomeStyles.heroContent}>
          <Typography variant="h2">
            GetCreative
            <Box component="span" color="primary.main">
              CMS
            </Box>
          </Typography>
          <Typography variant="h3">Fresh new way to build sites</Typography>
          <Link href="/signup">
            <Button
              variant="outlined"
              size="medium"
              className="btn"
              sx={buttonStyles}
            >
              Get Started free
            </Button>
          </Link>
          <Typography mt={3} className="fs-15-18">
            *no card needed
          </Typography>
        </Box>
        <Box sx={HomeStyles.dashboardImg}>
          <Image
            src="https://ik.imagekit.io/4woq8zlkh/getCreativeCMS/dashboard_S_rrq2r9f.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660757885448"
            alt="dashboard illustration"
            layout="responsive"
            height={600}
            width={1000}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
