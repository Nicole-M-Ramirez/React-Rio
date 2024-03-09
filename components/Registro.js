import React from 'react';
import { formatTime, formatToTimeInt } from './RioGlobalFuncs';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import {colors, dimensions} from './constants'

import { getActiveMeta } from './RioGlobalFuncs';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

// type ItemProps = {title: string};

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => {
  //the app will represent each list item via a Text component
  return <Text style={styles.item}> {item.title}</Text>;
};

const Registro = (props) => {
  const {dateString} = props;

  const dateData = useSelector(state => state.counter.dateData)[dateString];
  const metas = useSelector(state => state.counter.metas);
  // console.log("dateData:" + dateData);
  // console.log("in registro date: " + dateString);
  // console.log("dateData actividades:" + dateData.act);

  dataForRegistro = [];


  // 2023-10-11: Populate the array that feeds the FlatList with
  //           : activities and moods

  if (dateData !== undefined) {
    if( dateData.act !== undefined) {
      dateData.act.map(item => {
        dataForRegistro.push({'type':'Actividad: ' + item.type, 'time': item.time})
      });
    }

    if (dateData.mood !== undefined) {
      dateData.mood.map(item => {
        dataForRegistro.push({'type': 'Emoción: ' + item.type, 'time': item.time})
      });
    }

    if (dateData.casis !== undefined) {
      dateData.casis.map(item => {
        dataForRegistro.push({'type': 'CASIS ', 'time': item})
      });
    }
  }

  console.log("Extrayendo metas....." + dateString);
  if (metas !== undefined) {
    console.log("metas:" + JSON.stringify(metas));
    for (let i = 0; i < metas.length ; i++) {
      // get the date in YYYY-MM-DD format
      let d =  new Date(metas[i].date).toISOString().split('T')[0];
      // get the time in HH:MM:SS
      let t = new Date(metas[i].date).toString().split(' ')[4];
      // console.log("look at: " + d);
      if (d == dateString)  dataForRegistro.push({'type': 'Meta activada: ' + metas[i].meta, 'time': formatToTimeInt(t)});
    }
  }




  const sortedDataForRegistro = dataForRegistro.sort((a, b) => a.time > b.time? 1 : -1);

  return (
    <View style={styles.container}>
      <FlatList style={styles.inputText}
        data={sortedDataForRegistro}
        renderItem={({item}) => <Text style={{color:'white', fontSize: 14}}>{formatTime(item.time)}: {item.type}</Text>}
      />
      {/* <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 0,
  },
  title: {
    fontSize: 12,
    color: colors.mintGreen
  },
  inputText: {
    top: 20, //dimensions.bodyTopMargin,
    height: dimensions.bodyHeight * .65,
    width: dimensions.bodyWidth,
    left: 0,
    borderWidth: 2,
    borderColor: colors.mintGreen,
    borderRadius:5,
    position: 'absolute',
    color: 'white',
    padding: '3%'
    //padding: 10,
  },
});

export default Registro;