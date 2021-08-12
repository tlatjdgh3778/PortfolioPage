import { DefaultTheme } from "styled-components";

const size = {
    MobileLandscape: "480px",
    TabletPortrait: "768px",
    TabletLandscape: "992px",
    Laptops: "1200px",
};

export const lightTheme: DefaultTheme = {
    color: {
        wallpaperColor: "#ffffff",
        bgColor: "#f8f5fa",
        fontColor: "#373737",
        highlightColor: "#c2b7da",
        hoverColor: "#f5f5f5",
        modalBgColor: "#2c1952",
        modalFontColor: "#c2b7da",
    },
    fontSize: {
        sm: "16px",
        md: "20px",
        lg: "24px",
        xl: "28px",
        xxl: "32px",
    },
    device: {
        MobileLandscape: `(max-width: ${size.MobileLandscape})`,
        TabletPortrait: `(max-width: ${size.TabletPortrait})`,
        TabletLandscape: `(max-width: ${size.TabletLandscape})`,
        Laptops: `(max-width: ${size.Laptops})`,
    },
};

export const darkTheme: DefaultTheme = {
    color: {
        wallpaperColor: "#120b21",
        bgColor: "#180f2d",
        fontColor: "#c2b7da",
        highlightColor: "#2c1952",
        hoverColor: "#bb86fc",
        modalBgColor: "#f8f5fa",
        modalFontColor: "#373737",
    },
    fontSize: {
        sm: "16px",
        md: "20px",
        lg: "24px",
        xl: "28px",
        xxl: "32px",
    },
    device: {
        MobileLandscape: `(max-width: ${size.MobileLandscape})`,
        TabletPortrait: `(max-width: ${size.TabletPortrait})`,
        TabletLandscape: `(max-width: ${size.TabletLandscape})`,
        Laptops: `(max-width: ${size.Laptops})`,
    },
};
