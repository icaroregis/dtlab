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
    borderRadius: 6,
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

  /***** */
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
  text: {
    fontSize: 20,
  },
  containerPicker: {
    marginTop: 10,
    // height: 45,
    alignSelf: 'stretch',
    marginLeft: 25,
    marginRight: 25,
    borderColor: cores.preto,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 7,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  containerDates: {
    height: 45,
    marginTop: 10,
    alignSelf: 'stretch',
    marginLeft: 25,
    marginRight: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 7,
  },
  containerInitialDate: {
    flex: 1,
    height: 45,
    borderColor: cores.preto,
    borderWidth: 1,
    borderStyle: 'solid',
    marginRight: 4,
    borderRadius: 7,
    paddingLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerFinalDate: {
    flex: 1,
    height: 45,
    borderColor: cores.preto,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 7,
    paddingLeft: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButtonFilters: {
    marginTop: 10,
    height: 45,
    alignSelf: 'stretch',
    marginLeft: 25,
    marginRight: 25,
    borderColor: cores.preto,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    backgroundColor: cores.vinho,
  },
  textButtonFilters: {
    color: cores.branco,
  },
  buttonDate: {
    backgroundColor: '#ffffff00',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stylePickers: {
    alignSelf: 'stretch',
    height: 45,
  },
});
