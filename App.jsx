import {NavigationContainer} from '@react-navigation/native';
import NativeStackNavigation from './src/navigations/NativeStackNavigation';
import BottomTabsNavigation from './src/navigations/BottomTabsNavigation';
import DrawerNavigation from './src/navigations/DrawerNavigation';

const App = () => {
  return (
    <NavigationContainer>
      {/* <NativeStackNavigation /> */}
      {/* <BottomTabsNavigation /> */}
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default App;
