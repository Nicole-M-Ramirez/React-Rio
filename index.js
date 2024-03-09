/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//import { PlaybackService } from './src/services';

// AppRegistry.registerComponent(...);
// TrackPlayer.registerPlaybackService(() => require('./node_modules/react-native-track-player/'));


AppRegistry.registerComponent(appName, () => App);