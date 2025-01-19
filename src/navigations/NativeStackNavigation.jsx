import {StyleSheet, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Notifications from '../screens/Notifications';
import CartScreen from '../screens/CartScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {SCREENS} from '../utils/constant';
import {ShoppingCart, CpuSetting} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import BottomTabsNavigation from './BottomTabsNavigation';

// obje dağıtma yöntemi
const {Home, Notification, Profile, Settings, Cart} = SCREENS;

const Stack = createNativeStackNavigator();

const NativeStackNavigation = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        //headerı gizlemek için kullanılır
        // headerShown: false,

        //headera style vermek için
        headerStyle: {
          backgroundColor: 'tomato',
        },
        //headerın titlenının rengini değiştirmek için kullanılır
        headerTintColor: 'green',
        headerTitleStyle: {
          fontSize: 30,
          fontWeight: '900',
        },
        //headerın sağ atrafına bi relement eklemek için kullnılır
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate(Cart)}>
            <ShoppingCart size="32" color="#37d67a" variant="Bold" />
          </TouchableOpacity>
        ),
        //headerın sol atrafına bi relement eklemek için kullnılır
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate(Settings)}>
            <CpuSetting size="32" color="#37d67a" variant="Bold" />
          </TouchableOpacity>
        ),

        //headerın geri butonunu gizlemek istediğimizde
        // headerBackVisible: false,

        //headerın geri butonunun title gizlemek istediğimizde
        // headerBackTitleVisible: false,

        //headerın başlığını değiştirmek istediğimizde
        // headerBackTitle: 'Geri',
      }}
      initialRouteName={Home}>
      <Stack.Screen name={Home} component={BottomTabsNavigation} />
      <Stack.Screen name={Profile} component={ProfileScreen} />
      <Stack.Screen
        // options={{
        //   headerShown: false,
        // }}
        name={Notification}
        component={Notifications}
      />
      <Stack.Screen name={Cart} component={CartScreen} />
      <Stack.Screen name={Settings} component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default NativeStackNavigation;

const styles = StyleSheet.create({});
