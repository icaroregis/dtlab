import { StyleSheet } from 'react-native';
import { cores } from '../../style-global';

export default StyleSheet.create({
  userArea: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 40,
    flexDirection: 'row',
  },
  containerAvatar: {
    alignSelf: 'stretch',
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: cores.preto,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 7,
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    padding: 10,
  },
  imageUser: {
    width: 55,
    height: 55,
  },
  containerDataUser: {
    flexShrink: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  nome: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: cores.branco,
    flexShrink: 1,
    // fontFamily: 'Poppins',
  },
  email: {
    fontSize: 16,
    color: cores.cinzaclaro,
    flexShrink: 1,
    // fontFamily: 'Poppins',
  },
  icon: {
    padding: 11,
    marginLeft: 6,
    flexDirection: 'row',
    alignItems: 'center',
    height: 62,
  },
  iconText: {
    color: cores.branco,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logout: {
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  containerPicker: {
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: cores.branco,
    borderRadius: 18,
    marginBottom: 25,
  },
  subContainerPicker: {
    marginLeft: 20,
    marginRight: 20,
  },
  stylePickers: {
    alignSelf: 'stretch',
    height: 50,
    alignItems: 'center',
  },
  containerHeader: {
    alignSelf: 'stretch',
  },
  listPages: {
    borderRadius: 10,
  },
  columOne: {
    marginLeft: 22,
    justifyContent: 'flex-end',
    paddingBottom: 12,
  },
  teste: {
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: cores.preto,
  },
  columThwo: {
    textAlign: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 12,
  },
  colomThree: {
    borderStyle: 'solid',
    marginRight: 22,
  },
  loader: {
    height: '100%',
  },
});
