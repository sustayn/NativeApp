import { StackNavigator } from 'react-navigation';

import About from './screens/About';
import Home from './screens/Home';
import Setup from './screens/Setup';

export default StackNavigator({
  About:  { screen: About },
  Home:   { screen: Home },
  Setup:  { screen: Setup}
}, {
  initialRouteName: 'Home',
});