import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  imagem: {
    marginTop: 20,
    width: wp('70%'),
    height: hp('15%'),
  },
});
