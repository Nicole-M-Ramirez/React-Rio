//
// Styles for the calendar "HEADER"
//

import { StyleSheet, Platform, Dimensions } from 'react-native';
import * as defaultStyle from '../../style';
import constants from '../../commons/constants';
import {colors, dimensions} from '../../../../constants'
// import rioConstants from '../../../../../constants';

// const topForMonth = constants.screenHeight * .70;

export default function (theme = {}) {
    const appStyle = { ...defaultStyle, ...theme };
    const rtlStyle = constants.isRTL ? { transform: [{ scaleX: -1 }] } : undefined;
    return StyleSheet.create({
        header: {
            left:0,
            flexDirection: 'row',
            top: 2* dimensions.separator, //dimensions.bodyHeight  + dimensions.separator * 5,
            position: 'absolute',
            // alignItems: 'center',
            // backgroundColor: 'yellow',
            width: dimensions.bodyWidth,
            alignItems: 'center'
 
        },
        partialHeader: {
            // paddingHorizontal: 15
        },
        headerContainer: {
            flexDirection: 'row',
            // backgroundColor: 'pink',
            left: 0,
            width: '70%'
        },
        monthText: {
            fontSize: 20,//appStyle.textMonthFontSize,
            // fontFamily: appStyle.textMonthFontFamily,
            // fontWeight: appStyle.textMonthFontWeight,
            color: colors.mintGreen, //appStyle.monthTextColor,
            // marginLeft: 60,
            // marginRight: 60,
            // left:constants.screenWidth*(.44-.35),
            width: '100%',//constants.screenWidth * .88 *.7    ,
            textAlign: 'center',
            zIndex: 1000,
            // color: 'red',
            // borderWidth: 1,
            // position:'absolute'
            
        },
        arrow: {
            // padding: 10,
            ...appStyle.arrowStyle
        },
        arrowImage: {
            // zIndex: 100,
            
            ...rtlStyle,
            tintColor: colors.mintGreen,//appStyle.arrowColor,
            width: 50,
            height: 15,
            resizeMode: 'contain',
            ...Platform.select({
                web: {
                    width: appStyle.arrowWidth,
                    height: appStyle.arrowHeight
                }
            }),
            // resizeMode: 'center'
        },
        disabledArrowImage: {
            ...rtlStyle,
            tintColor: 'red' //appStyle.disabledArrowColor,
            
        },
        week: {
            marginTop: 7,
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        partialWeek: {
            paddingRight: 0
        },
        dayHeader: {
            marginTop: 2,
            marginBottom: 7,
            width: 32,
            textAlign: 'center',
            fontSize: appStyle.textDayHeaderFontSize,
            fontFamily: appStyle.textDayHeaderFontFamily,
            fontWeight: appStyle.textDayHeaderFontWeight,
            color: appStyle.textSectionTitleColor
        },
        disabledDayHeader: {
            color: appStyle.textSectionTitleDisabledColor
        },
        // @ts-expect-error
        ...(theme['stylesheet.calendar.header'] || {})
    });
}
