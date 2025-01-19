import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {SCREENS} from '../utils/constant';
import Notifications from '../screens/Notifications';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {
  Notification,
  Home,
  Profile,
  ShoppingCart,
  Setting2,
} from 'iconsax-react-native';

const Tab = createBottomTabNavigator();

const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        //bütün tabların labellarını gizlemek için kullnılır
        // tabBarShowLabel: false,

        //active olan tabın rengini değişirmek için kullnışor
        tabBarActiveTintColor: 'purple',

        //inactive olan tabın rengini değişirmek için kullnışor
        tabBarInactiveTintColor: 'pink',

        tabBarStyle: {
          backgroundColor: '#000',
          borderTopWidth: 5,
          borderTopColor: 'green',
        },
      }}
      initialRouteName={SCREENS.Home}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <Home size={focused ? 35 : 25} color={color} />
          ),
        }}
        name={SCREENS.Home}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <Notification size={focused ? 35 : 25} color={color} />
          ),
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: 'purple',
            color: 'pink',
          },
        }}
        name={SCREENS.Notification}
        component={Notifications}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <Profile size={focused ? 35 : 25} color={color} />
          ),
        }}
        name={SCREENS.Profile}
        component={ProfileScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <ShoppingCart size={focused ? 35 : 25} color={color} />
          ),
        }}
        name={SCREENS.Cart}
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color}) => (
            <Setting2 size={focused ? 35 : 25} color={color} />
          ),
        }}
        name={SCREENS.Settings}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigation;
