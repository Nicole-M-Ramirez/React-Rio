import React, { Fragment, useCallback, useRef } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { xdateToData } from '../../../interface';
import styleConstructor from './style';
import Marking from '../marking';
import { colors, dimensions , moodImgMap} from '../../../../../constants';
import constants from '../../../commons/constants';
const BasicDay = (props) => {
    const { theme, date, onPress, onLongPress, markingType, 
        marking, state, disableAllTouchEventsForDisabledDays, 
        disableAllTouchEventsForInactiveDays, accessibilityLabel, children, 
        testID, mood, diaryEntry, autolesion} = props;
    const style = useRef(styleConstructor(theme));
    const _marking = marking || {};
    const isSelected = _marking.selected || state === 'selected';
    const isDisabled = typeof _marking.disabled !== 'undefined' ? _marking.disabled : state === 'disabled';
    const isInactive = _marking?.inactive;
    const isToday = state === 'today';
    const isMultiDot = markingType === Marking.markings.MULTI_DOT;
    const isMultiPeriod = markingType === Marking.markings.MULTI_PERIOD;
    const isCustom = markingType === Marking.markings.CUSTOM;
    const dateData = date ? xdateToData(date) : undefined;

    // console.log("punto:" + JSON.stringify(props));

    const shouldDisableTouchEvent = () => {
        const { disableTouchEvent } = _marking;
        let disableTouch = false;
        if (typeof disableTouchEvent === 'boolean') {
            disableTouch = disableTouchEvent;
        }
        else if (typeof disableAllTouchEventsForDisabledDays === 'boolean' && isDisabled) {
            disableTouch = disableAllTouchEventsForDisabledDays;
        }
        else if (typeof disableAllTouchEventsForInactiveDays === 'boolean' && isInactive) {
            disableTouch = disableAllTouchEventsForInactiveDays;
        }
        return disableTouch;
    };
    const getContainerStyle = () => {
        const { customStyles, selectedColor } = _marking;
        const styles = [style.current.base];
        if (isSelected) {
            styles.push(style.current.selected);
            if (selectedColor) {
                styles.push({ backgroundColor: selectedColor });
            }
        }
        else if (isToday) {
            styles.push(style.current.today);
        }
        //Custom marking type
        if (isCustom && customStyles && customStyles.container) {
            if (customStyles.container.borderRadius === undefined) {
                customStyles.container.borderRadius = 16;
            }
            styles.push(customStyles.container);
        }
        return styles;
    };
    const getTextStyle = () => {
        const { customStyles, selectedTextColor } = _marking;
        const styles = [style.current.text];
        if (isSelected) {
            styles.push(style.current.selectedText);
            if (selectedTextColor) {
                styles.push({ color: selectedTextColor });
            }
        }
        else if (isDisabled) {
            styles.push(style.current.disabledText);
        }
        else if (isToday) {
            styles.push(style.current.todayText);
        }
        else if (isInactive) {
            styles.push(style.current.inactiveText);
        }
        //Custom marking type
        if (isCustom && customStyles && customStyles.text) {
            styles.push(customStyles.text);
        }
        return styles;
    };
    const _onPress = useCallback(() => {
        onPress?.(dateData);
    }, [onPress, date]);
    const _onLongPress = useCallback(() => {
        onLongPress?.(dateData);
    }, [onLongPress, date]);

    //
    // RIO: The dots that appear on each day.
    //
    const renderMarking = () => {
        const { marked, dotColor, dots, periods, moodEmoji } = _marking;
        // console.log(JSON.stringify(date));

        return(<>
        {autolesion && <View style={{backgroundColor: colors.emergencyRed, height: 10, width:  10, borderRadius: 15}}></View>}
        {diaryEntry && autolesion && <View style={{ height: 10, width:  10, borderRadius: 15}}></View>}
        {diaryEntry && <View style={{backgroundColor: colors.greyBlue, height: 10, width:  10, borderRadius: 15}}></View>}
        </>
        )
    };

    //
    // RIO: Emoji de mood
    //
    const renderMood = () => {

        let emoji = null;
        if (mood !== undefined && moodImgMap[mood] !== undefined) { 
            let emojiReq =  moodImgMap[mood];
            emoji =  <Image style={{width: dimensions.dayHeight/3, height:dimensions.dayHeight/3, top: dimensions.dayHeight/12}} source={emojiReq}/>
        }
        return (emoji)
    };

    const renderText = () => {
        return (<Text allowFontScaling={false} style={getTextStyle()}>
        {String(children).padStart(2,'0')} 
      </Text>);
    };
    const renderContent = () => {
        return (<Fragment>
        {renderText()}
        <View style={{width: dimensions.dayWidth , flexDirection: 'row', 
            height: dimensions.buttonHeight/10, alignItems: 'center', justifyContent: 'center', 
            }}>
        {renderMarking()}
        </View>
        {renderMood()}
      </Fragment>);
    };
    const renderContainer = () => {
        const { activeOpacity } = _marking;
        return (<TouchableOpacity testID={testID} style={getContainerStyle()} disabled={shouldDisableTouchEvent()} activeOpacity={activeOpacity} onPress={!shouldDisableTouchEvent() ? _onPress : undefined} onLongPress={!shouldDisableTouchEvent() ? _onLongPress : undefined} accessible accessibilityRole={isDisabled ? undefined : 'button'} accessibilityLabel={accessibilityLabel}>
        {isMultiPeriod ? renderText() : renderContent()}
      </TouchableOpacity>);
    };
    const renderPeriodsContainer = () => {
        return (<View style={style.current.container}>
        {renderContainer()}
        {renderMarking()}
      </View>);
    };
    return isMultiPeriod ? renderPeriodsContainer() : renderContainer();
};
export default BasicDay;
BasicDay.displayName = 'BasicDay';
