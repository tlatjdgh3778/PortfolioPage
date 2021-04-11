
const size = {
    MobileLandscape: '480px',
    TabletPortrait: '768px',
    TabletLandscape: '992px',
    Laptops: '1200px',
}

const device = {
    MobileLandscape: `(max-width: ${size.MobileLandscape})`,
    TabletPortrait: `(max-width: ${size.TabletPortrait})`,
    TabletLandscape: `(max-width: ${size.TabletLandscape})`,
    Laptops: `(max-width: ${size.Laptops})`,
}

const fontSize = {
    sm : '16px',
    md: '20px',
    lg: '24px',
    xl: '28px',
    xxl: '32px', 
}
const lightMode = {
    color: {
        wallpaperColor: '#ffffff',
        bgColor: '#f8f5fa',
        fontColor: '#373737',
        highlightColor: '#c2b7da',
        hoverColor: '#f5f5f5',
        modalBgColor: '#2c1952',
        modalFontColor: '#c2b7da',
    },
    fontSize,
    device,
}
const darkMode = {
    color: {
        wallpaperColor: '#120b21',
        bgColor: '#180f2d',
        fontColor: '#c2b7da',
        highlightColor: '#2c1952',
        hoverColor: '#bb86fc',
        modalBgColor: '#f8f5fa',
        modalFontColor: '#373737',
    },
    fontSize,
    device,
}

// const color = {
//     white: 'white',
//     black: 'black',
//     highlight: '#f2f2f2',
//     rightBgColor: '#ece9e6',
// }

const theme = {
    // color,
    lightMode,
    darkMode,
}



export default theme;