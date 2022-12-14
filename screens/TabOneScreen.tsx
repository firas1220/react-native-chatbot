import {
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  
  const onPressNavigate = () => {
    navigation.navigate("ChatScreen");
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/*<EditScreenInfo path="/screens/TabOneScreen.tsx" />*/}
      <TouchableOpacity onPress={onPressNavigate}>
      <Text style={{color:"#204fc7", 
        borderRadius: 6, 
        borderColor: "black", 
        borderStyle:"solid",
        borderWidth:1,
        ...styles.title
      }}>  Navigate to chatbot  </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
