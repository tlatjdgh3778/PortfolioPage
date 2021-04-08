import styled from 'styled-components';

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

const color = {
    white: 'white',
    black: 'black',
    highlight: '#f2f2f2',
}

const theme = {
    device,
    fontSize,
    color,
}



export default theme;