import { FC } from "react";
import { Navbar, Footer } from "@components/common";

interface LayoutProps {
  pageProps: any;
  children: any;
}

// Layout component begins
const Layout: FC<LayoutProps> = ({ children, pageProps }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
