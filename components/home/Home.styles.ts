import { SxPropType } from "lib/types";

interface HomeStylesProps {
  hero: SxPropType;
  container: SxPropType;
  heroContent: SxPropType;
  dashboardImg: SxPropType;
}

const HomeStyles: HomeStylesProps = {
  container: {
    height: { xs: "1000px", sm: "1200px" },
    backgroundColor: "text.primary",
  },
  hero: {
    height: { xs: "650px" },
    borderBottomLeftRadius: "50% 30%",
    borderBottomRightRadius: "50% 30%",
    position: "relative",
  },
  heroContent: {
    alignItems: "center",
    textAlign: { xs: "left", sm: "center" },
    height: "100%",
  },
  dashboardImg: {
    height: "600px",
    width: "1000px",
    maxWidth: { xs: "90%", lg: "100%" },
    position: "absolute",
    left: { xs: "5%", lg: "13%", xl: "18%" },
    top: { xs: "70%", sm: "55%" },
  },
};

export default HomeStyles;
