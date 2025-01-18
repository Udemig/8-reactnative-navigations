import {NavigationContainer} from '@react-navigation/native';
import NativeStackNavigation from './src/navigations/NativeStackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <NativeStackNavigation />
    </NavigationContainer>
  );
};

export default App;
