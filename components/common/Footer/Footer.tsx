import { Logo } from "@components/icons";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";
import footerStyles from "./Footer.styles";

const Footer = () => {
  return (
    <Box component="footer" py={4} sx={footerStyles.section}>
      <Container maxWidth="lg" className="fs-20-23" sx={footerStyles.container}>
        <Link href="/register">
          <a className="p-1 m-2">Register</a>
        </Link>
        <Link href="/Terms-&-Conditions">
          <a className="p-1 m-2">Terms & Conditions</a>
        </Link>
        <Link href="/Privacy-Policy">
          <a className="p-1 m-2">Privacy Policy</a>
        </Link>
        <Link href="/Documentation">
          <a className="p-1 m-2">Documentation</a>
        </Link>
        <Link href="/Pricing">
          <a className="p-1 m-2">Pricing</a>
        </Link>
        <Link href="/Our-Blog">
          <a className="p-1 m-2">OurBlog</a>
        </Link>
        <Link href="#">
          <Logo />
        </Link>
      </Container>
    </Box>
  );
};

export default Footer;
