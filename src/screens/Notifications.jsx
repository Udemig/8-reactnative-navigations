import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Notifications = ({route, navigation}) => {
  console.log(route);
  return (
    <View>
      <Text>{route?.params?.title}</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: 'green',
          padding: 10,
          borderRadius: 10,
          marginTop: 15,
        }}>
        <Text>Bir screen geri git</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
