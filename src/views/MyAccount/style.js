import { StyleSheet } from 'react-native';
import { cores } from '../../style-global';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  loader: {
    height: '100%',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  card: {
    alignSelf: 'stretch',
    marginTop: 12,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: cores.branco,
    borderRadius: 6,
    height: '84%',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  containerBodyIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  BodyIcon: {
    alignItems: 'center',
  },
  containerText: {
    marginLeft: 5,
    fontSize: 27,
    color: cores.preto,
  },
  containerSubHeader: {
    textAlign: 'center',
    color: cores.cinzaEspecial,
    fontSize: 19,
    borderBottomColor: cores.cinzaEspecial,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    alignSelf: 'stretch',
    paddingBottom: 20,
  },
  containerMasterItem: {
    marginBottom: 22,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    alignItems: 'center',
  },
  spacing: {
    marginTop: 15,
  },
  comments: {
    width: '60%',
    fontSize: 18,
  },
  icone: {
    width: '15%',
    height: 45,
    alignItems: 'center',
    marginRight: '8%',
    marginLeft: '8%',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: cores.rozaClaro,
  },
  containerIconeUser: {
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: cores.preto,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTextIcone: {
    marginLeft: 15,
    marginRight: 10,
  },
  titleIcon: {
    color: cores.cinzaEspecial,
    fontSize: 18,
    textAlign: 'center',
  },
  telephone: {
    marginTop: 15,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  textTelephone: {
    marginLeft: 23,
    fontSize: 17,
    alignItems: 'center',
  },
  telephoneIcon: {
    marginLeft: 23,
    alignItems: 'center',
  },
  informations: {
    alignSelf: 'stretch',
    marginTop: 40,
  },
  containerButtons: {
    marginTop: 40,
    marginBottom: 20,
  },
  buttonMyAccount: {
    marginBottom: 5,
    borderColor: cores.preto,
  },
  buttonStyle: {
    padding: 13,
    marginLeft: 6,
    marginRight: 6,
    backgroundColor: cores.vinho,
    borderRadius: 10,
    color: cores.branco,
    textAlign: 'center',
    fontSize: 17,
  },
});
