import { SxPropType } from "lib/types";

interface FooterStylesProps {
  container: SxPropType;
  section: SxPropType;
}

const footerStyles: FooterStylesProps = {
  container: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  section: {
    color: "white",
    backgroundColor: "primary.main",
  },
};

export default footerStyles;
