import { StyleSheet } from 'react-native';
import { cores } from '../../style-global';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  loader: {
    height: '100%',
  },
  card: {
    alignSelf: 'stretch',
    marginTop: 12,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: cores.branco,
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
  /*-----------------------------*/
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 250,
    alignItems: 'center',
  },
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
  containerCollector: {
    marginTop: 10,
    alignSelf: 'stretch',
    backgroundColor: cores.verdeClaro,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 7,
    marginLeft: 7,
    paddingBottom: 10,
  },
  headerNameCollector: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    flexDirection: 'row',
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: cores.preto,
  },
  textCollector: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  typeCollector: {
    height: 25,
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitleCollector: {
    fontWeight: 'bold',
  },
  subtitleBoldNone: {
    fontWeight: 'normal',
  },
  DivNameCollector: {
    width: '45%',
    backgroundColor: cores.cinzaclaro,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 15,
  },
  divSelect: {
    borderRadius: 5,
    alignSelf: 'stretch',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: cores.preto,
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
  },
  inputSelect: {
    height: 50,
    borderRadius: 5,
    color: cores.preto,
    padding: 15,
    fontSize: 13,
  },
  containerDivSelect: {
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  titleCollectors: {
    marginTop: 15,
    alignSelf: 'stretch',
    flexDirection: 'row',
    borderStyle: 'solid',
  },
  temperatureText: {
    marginLeft: 5,
    marginRight: 2,
    color: cores.verdeEscuro,
    fontWeight: 'bold',
    fontSize: 15,
  },
  reportButton: {
    backgroundColor: cores.verdeEscuro,
    borderRadius: 3,
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
  },
  reportButtonText: {
    color: cores.branco,
  },
  collectorData: {
    alignSelf: 'stretch',
    marginLeft: 7,
    marginRight: 7,
  },
  containerCols: {
    alignSelf: 'stretch',
    backgroundColor: cores.branco,
    marginLeft: 7,
    marginRight: 7,
    borderRadius: 6,
    padding: 15,
  },
  teste: {
    alignSelf: 'stretch',
  },
  informationContainer: {
    marginTop: 7,
    alignSelf: 'stretch',
  },
  dataCols: {
    textAlign: 'right',
    height: 18,
  },
  containerScroll: {
    alignSelf: 'stretch',
    height: hp('65%'),
  },
  body: {
    alignSelf: 'stretch',
  },
});
