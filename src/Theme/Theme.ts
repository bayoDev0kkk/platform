import { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {},
  components: {
    Layout: {
      headerBg: "#fff",
      headerHeight: 80,
      headerPadding: "16px 22px",
      bodyBg: "rgb(235, 238, 243)",
    },
    Pagination: {
      itemBg: "inherit",
      itemActiveBg: "rgb(59, 110, 158)",
    },
    Alert: {
      defaultPadding: "16px 22px",
    },
    Divider: {
      marginLG: 9,
    },
    Button: {
      defaultBg: "rgb(175, 200, 224)",
      defaultBorderColor: "rgb(54, 118, 178)",
      defaultColor: "white",
      controlHeight: 40,
      borderRadius: 4,
      paddingInline: 140,
      contentFontSize: 16,
    },
    Input: {
      controlHeight: 40,
      borderRadius: 4,
      fontSize: 16,
    },
    Form: {
      verticalLabelPadding: "0 0 2px",
      itemMarginBottom: 21,
    },
  },
};
