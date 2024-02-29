/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import clsx from "clsx";
import React from "react";
import {
  Typography as MaterialTypography,
  TypographyVariant as MaterialTypographyVariant,
  TypographyProps as MaterialTypographyProps,
} from "@mui/material";
import {
  fontFamily,
  fontFamily2,
  fontStyle,
  h1FontSize,
  h2FontSize,
  h3FontSize,
  extraBigFontSize,
  bigFontSize,
  fontSize,
  smallFontSize,
  fontWeightNormal,
  fontWeightRegular,
  fontWeightBold,
  fontWeightBolder,
  biggerFontSize,
  hugeFont
} from "../../styles/theme/config";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  h1: {
    fontSize: h1FontSize,
    fontWeight: fontWeightBold,
    lineHeight: "51.5px",
    fontFamily: fontFamily.split(",")[2],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  h1Bold: {
    fontSize: h1FontSize,
    fontWeight: fontWeightBolder,
    lineHeight: "48px",
    letterSpacing: "0.02em",
    fontFamily: fontFamily.split(",")[2],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  h2: {
    fontSize: h2FontSize,
    fontWeight: fontWeightBold,
    lineHeight: "36px",
    letterSpacing: "0.02em",
    fontFamily: fontFamily.split(",")[0],
    fontStyle: fontStyle,
    textAlign: "center",
  },
  h2SemiBold: {
    fontSize: h2FontSize,
    fontWeight: fontWeightBold,
    lineHeight: "36px",
    letterSpacing: "0.02em",
    fontFamily: fontFamily.split(",")[1],
    fontStyle: fontStyle,
    textAlign: "center",
  },
  h2Bold: {
    fontSize: h2FontSize,
    fontWeight: fontWeightBolder,
    lineHeight: "29px",
    letterSpacing: "0.02em",
    fontFamily: fontFamily.split(",")[2],
    fontStyle: fontStyle,
    textAlign: "center",
  },
  h2Regular: {
    fontSize: h2FontSize,
    fontWeight: fontWeightRegular,
    lineHeight: "29px",
    letterSpacing: "0.02em",
    fontFamily: fontFamily.split(",")[2],
    fontStyle: fontStyle,
    textAlign: "center",
  },
  h3: {
    fontSize: h3FontSize,
    fontWeight: fontWeightBolder,
    lineHeight: "30px",
    letterSpacing: "0.03em",
    fontFamily: fontFamily.split(",")[2],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  h3Bold: {
    fontSize: h3FontSize,
    fontWeight: fontWeightBold,
    lineHeight: "30px",
    letterSpacing: "0.03em",
    fontFamily: fontFamily.split(",")[0],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  h3Regular: {
    fontSize: h1FontSize,
    fontWeight: fontWeightNormal,
    lineHeight: "40px",
    fontFamily: fontFamily.split(",")[2],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  semiBold: {
    fontSize: bigFontSize,
    fontWeight: fontWeightBolder,
    lineHeight: "30px",
    letterSpacing: "0.03em",
    fontFamily: fontFamily.split(",")[2],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  caption: {
    fontSize: smallFontSize,
    fontWeight: fontWeightNormal,
    lineHeight: "16px",
    letterSpacing: "0.1em",
    fontFamily: fontFamily.split(",")[0],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  extraBig: {
    fontSize: extraBigFontSize,
    fontWeight: fontWeightRegular,
    lineHeight: "27px",
    letterSpacing: "0.04em",
    fontFamily: fontFamily.split(",")[1],
    fontStyle: fontStyle,
    textAlign: "center",
  },
  extraBigNormal: {
    fontSize: extraBigFontSize,
    fontWeight: fontWeightNormal,
    lineHeight: "24px",
    letterSpacing: "0.04em",
    fontFamily: fontFamily.split(",")[0],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  subtitle: {
    fontSize: bigFontSize,
    fontWeight: fontWeightNormal,
    lineHeight: "24px",
    fontFamily: fontFamily.split(",")[0],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  subtitleSemiBold: {
    fontSize: bigFontSize,
    fontWeight: fontWeightRegular,
    lineHeight: "24px",
    letterSpacing: "0.04em",
    fontFamily: fontFamily.split(",")[1],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  normalCenter: {
    fontSize: fontSize,
    fontWeight: fontWeightNormal,
    lineHeight: "19px",
    letterSpacing: "0.02em",
    fontFamily: fontFamily.split(",")[0],
    fontStyle: fontStyle,
    textAlign: "center",
  },
  normal: {
    fontSize: fontSize,
    fontWeight: fontWeightNormal,
    lineHeight: "19px",
    letterSpacing: "0.02em",
    fontFamily: fontFamily.split(",")[0],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  normalBold: {
    fontSize: fontSize,
    fontWeight: fontWeightNormal,
    lineHeight: "21px",
    letterSpacing: "2%",
    fontFamily: fontFamily.split(",")[1],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  regular: {
    fontSize: fontSize,
    fontWeight: fontWeightRegular,
    lineHeight: "17px",
    letterSpacing: "0.02em",
    fontFamily: fontFamily.split(",")[0],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  bold: {
    fontSize: fontSize,
    fontWeight: fontWeightBold,
    lineHeight: "17px",
    letterSpacing: "0.02em",
    fontFamily: fontFamily.split(",")[1],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  normalBolder: {
    fontSize: fontSize,
    fontWeight: fontWeightBolder,
    lineHeight: "17px",
    letterSpacing: "0.02em",
    fontFamily: fontFamily.split(",")[0],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  profileIcon: {
    fontSize: bigFontSize,
    fontWeight: fontWeightBold,
    lineHeight: "19.5px",
    letterSpacing: "0.02em",
    fontFamily: fontFamily.split(",")[0],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  small: {
    fontSize: smallFontSize,
    fontWeight: fontWeightRegular,
    lineHeight: "18px",
    letterSpacing: "0.4px",
    fontFamily: fontFamily.split(",")[1],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  smallLighter: {
    fontSize: smallFontSize,
    fontWeight: fontWeightNormal,
    lineHeight: "18px",
    letterSpacing: "0.4px",
    fontFamily: fontFamily.split(",")[0],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  smallSemiBold: {
    fontSize: smallFontSize,
    fontWeight: fontWeightBold,
    lineHeight: "14px",
    letterSpacing: "0.12em",
    fontFamily: fontFamily.split(",")[1],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  smallSemiBoldText: {
    fontSize: smallFontSize,
    fontWeight: fontWeightBolder,
    lineHeight: "14px",
    letterSpacing: "0.01em",
    fontFamily: fontFamily.split(",")[1],
    fontStyle: fontStyle,
    textAlign: "left",
  },
  pageError: {
    fontSize: biggerFontSize,
    fontWeight: fontWeightBold,
    lineHeight: "150%",
    letterSpacing: "0.11em",
    fontFamily: fontFamily.split(",")[0],
    fontStyle: fontStyle,
    textAlign: "center",
  },
  body1:{
    textAlign:"left"
  },
  errorPageFont: {
    fontSize: hugeFont,
    fontWeight: fontWeightBold,
    lineHeight: "60.5px",
    fontFamily: fontFamily2,
    fontStyle: fontStyle,
    textAlign: "left"
  },
  errorNormal:{
    fontSize: fontSize,
    fontWeight: "400",
    lineHeight: "32px",
    fontFamily: fontFamily2,
    fontStyle: fontStyle,
    textAlign: "left",
  }
}));

/**
 * The CustomVariant is an enum because we need to check if it includes a value, this is not possible with the union type
 */
enum CustomVariant {
  h1 = "h1",
  h1Bold = "h1Bold",
  h2 = "h2",
  h2SemiBold = "h2SemiBold",
  h2Bold = "h2Bold",
  h3 = "h3",
  h3Regular="h3Regular",
  caption = "caption",
  extraBig = "extraBig",
  subtitle = "subtitle",
  subtitleSemiBold = "subtitleSemiBold",
  semiBold = "semiBold",
  normal = "normal",
  normalCenter = "normalCenter",
  small = "small",
  bold = "bold",
  smallSemiBold = "smallSemiBold",
  smallSemiBoldText ="smallSemiBoldText",
  regular = "regular",
  normalBold = "normalBold",
  profileIcon = "profileIcon",
  smallLighter = "smallLighter",
  pageError = "pageError",
  extraBigNormal = "extraBigNormal",
  h2Regular = "h2Regular",
  h3Bold = "h3Bold",
  normalBolder = "normalBolder",
  errorPageFont = "errorPageFont",
  errorNormal = "errorNormal",
}

export interface TypographyProps
  extends Omit<MaterialTypographyProps, "variant"> {
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * Overrides the behavior of the `variantMapping` prop.
   * https://github.com/mui-org/material-ui/blob/v4.11.4/packages/material-ui/src/Typography/Typography.js#L199
   */
  component?: string;
  mt?: number;
  variant: keyof typeof CustomVariant | MaterialTypographyVariant;
}

export const Typography = ({ variant, ...props }: TypographyProps) => {
  const classes = useStyles();
  const isCustom =
    Object.keys(classes).indexOf(variant) > -1 ||
    Object.keys(CustomVariant).includes(variant);

  return (
    <MaterialTypography
      {...props}
      className={clsx(classes[variant], props.className)}
      variant={isCustom ? undefined : (variant as MaterialTypographyVariant)}
    />
  );
};

export default Typography;
