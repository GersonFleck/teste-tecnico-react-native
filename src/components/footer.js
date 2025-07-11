import { View, Text,Image, StyleSheet,Dimensions } from 'react-native';
const { width } = Dimensions.get("window");
function Footer() {
  return (
    <View style={footerStyles.container}>
       <View style= {footerStyles.content}>
         <Image
        source={require("../assets/images/logo.png")}
          style={footerStyles.logo}
          resizeMode="contain"
        />
      <Text style={footerStyles.text}>NBA Stats App</Text>
      
       </View>
      
    </View>
  );
}

const footerStyles = StyleSheet.create({
  container: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#616161',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
   logo: {
    width: width * 0.1,
    height: width * 0.1,
    marginRight: 10,
  },
});

export default Footer;