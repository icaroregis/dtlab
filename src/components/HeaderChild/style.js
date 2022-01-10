import { StyleSheet } from 'react-native';
import { cores } from '../../style-global';

export default StyleSheet.create({
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
});
