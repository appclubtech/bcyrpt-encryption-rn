/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './src/screens/home';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';

export default function Main() {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Home);
