import {Dimensions, PixelRatio} from 'react-native';


export const DAY_IN_MS = 24 * 3600000;

export const colors = {
    backgroudDarkBlue : '#18354a',
    blue : '#1e76ba',
    greyBlue : '#5b8caf',
    mintGreen : '#4eb5a3',
    pink : '#da88b9',
    purple: '#8f79b2',
    grapeJuice : '#745d88',
    emergencyRed : '#f05035',
    navyBlue: "#3B5B8A",
    darkBlue: "#0D3B59",
    darkForest: "#2C4454",
    forestGreen: "#25574E",
    wine: "#6B435E",
    deepPurple: "#524566",
    ash: "#352B40",
    brown: "#6B3430",
    black: "#1D2C42",
}

const screenHeight = Dimensions.get("window").height
const screenWidth = Dimensions.get("window").width

export const dimensions = {
homeHeight           : screenHeight * .07,
headerTopMargin      : screenHeight * .09,
headerHeight         : screenHeight * .08,
bodyTopMarginCal     : screenHeight * .108,
bodyTopMargin        : screenHeight * .178, 
bodyHeight           : screenHeight * .622,
separator            : screenHeight * .008,
footerTopMargin      : screenHeight * .8,
footerHeight         : screenHeight * .1,
emergencyTopMargin      : screenHeight * .9,
emergencyHeight      : screenHeight * .1,

leftMargin           : screenWidth * .5 - screenHeight * .206,
buttonWidth          : screenHeight * .202,
leftMarginRightCol   : screenHeight * .21,

buttonHeight         : screenHeight * .202,
shortButtonHeight    : screenHeight * .101,
topSubtitle          : screenHeight * .8,
subtitleTop          : screenHeight * 0.8,
emergencyTop         : screenHeight * 0.8,
bodyWidth            : screenHeight * 0.412,

separatorWidth       : screenHeight * .008,
//leftMargin           : (screenWidth / 2) - (screenHeight * .206),

headerTopTextMargin  : screenHeight * .014,
dayWidth :  (screenHeight * 0.412) / 7.0,
dayHeight : (screenHeight * .570) / 6,

}

export  const moodImgMap =  { 'triste' : require('../assets/Tristeza.png'), 
    'Coraje' : require('../assets/Coraje.png'),
    'Felicidad' : require('../assets/Felicidad.png'),
    'Ansiedad' : require('../assets/Ansiedad.png'),
    'Miedo' : require('../assets/Miedo.png'),
    'Tristeza' : require('../assets/Tristeza.png'),
    'Otros' : require('../assets/Otros.png')
}