import { StyleSheet } from 'react-native';
import { cores } from '../../style-global';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    alignSelf: 'stretch',
    marginTop: 12,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: cores.branco,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
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
  },
  spacing: {
    marginTop: 15,
    marginBottom: 15,
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
  /*---------------------------------*/

  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
    alignItems: 'center',
  },
  /**/
  subHeader: {
    marginLeft: 10,
  },
  containerHeaderMaster: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
  },
  image: {
    alignSelf: 'stretch',
    height: 90,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  containerBodyIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  inputPassword: {
    marginTop: 20,
    marginBottom: 17,
    width: 260,
    height: 50,
    borderRadius: 10,
    color: cores.preto,
    padding: 15,
    fontSize: 16,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: cores.preto,
  },
  containerButtons: {
    marginTop: 35,
    marginBottom: 20,
    alignSelf: 'stretch',
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
