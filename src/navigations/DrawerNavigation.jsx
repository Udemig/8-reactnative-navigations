import {createDrawerNavigator} from '@react-navigation/drawer';
import {SCREENS} from '../utils/constant';
import HomeScreen from '../screens/HomeScreen';
import Notifications from '../screens/Notifications';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {HomeHashtag} from 'iconsax-react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        //active olan drawerın rengini belirlemek için kulanılır
        drawerActiveTintColor: 'lightgreen',

        //inactive olan drawerın rengini belirlemek için kulanılır
        drawerInactiveTintColor: '#fff',

        drawerStyle: {
          backgroundColor: '#000',
          paddingVertical: 10,
        },

        //headerı gizlemek için kullanılır
        // headerShown: false,

        //drawer içeeiisnde ki tüm itemlara style vermek için kullanılır
        drawerItemStyle: {
          padding: 10,
          marginVertical: 12,
          borderRadius: 20,
        },

        //active olan drawer item background rengini belirlemek için kullanılır
        drawerActiveBackgroundColor: 'pink',

        //drawer sürekli açık tutumak için
        // drawerType: 'permanent',

        //drawer açarken ekranın üsüütne gelmesimi sağlıyor
        drawerType: 'front',
        // drawerType: 'back',

        //drawerı açarken sağdan açılmaısnı isteyebiliriz
        // drawerPosition: 'right',
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: ({focused, color}) => (
            <HomeHashtag color="blue" size={focused ? 30 : 20} />
          ),
        }}
        name={SCREENS.Home}
        component={HomeScreen}
      />
      <Drawer.Screen name={SCREENS.Notification} component={Notifications} />
      <Drawer.Screen name={SCREENS.Profile} component={ProfileScreen} />
      <Drawer.Screen name={SCREENS.Settings} component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
