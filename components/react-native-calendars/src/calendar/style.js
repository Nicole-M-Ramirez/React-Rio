import { StyleSheet, Dimensions } from 'react-native';
import * as defaultStyle from '../style';
import { colors, dimensions } from '../../../constants';




export default function getStyle(theme = {}) {
    const appStyle = { ...defaultStyle, ...theme };
    return StyleSheet.create({
        container: {
            // paddingLeft: 5,
            // paddingRight: 5,
            // backgroundColor: 'black'//appStyle.calendarBackground
            borderWidth: 0
        },
        dayContainer: {
            flex: 1,
            alignItems: 'center'
        },
        emptyDayContainer: {
            flex: 1
        },
        monthView: {
            backgroundColor: appStyle.calendarBackground,
        },
        //Rafa
        week: {
            marginVertical: 0, //appStyle.weekVerticalMargin,
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderTopWidth: 1,
            borderColor: colors.emergencyRed
            
        
        },
        // @ts-expect-error
        ...(theme['stylesheet.calendar.main'] || {})
    });
}
