import { StyleSheet } from 'react-native';
import { cores } from '../../style-global';

export default StyleSheet.create({
  cell: {
    width: 115,
    justifyContent: 'center',
  },
  containerDivSelect: {
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  divSelect: {
    borderRadius: 5,
    alignSelf: 'stretch',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: cores.cinzaEscuro,
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
  },
  inputSelect: {
    height: 50,
    borderRadius: 10,
    borderColor: cores.cinzaEscuro,
    color: cores.preto,
    padding: 15,
    fontSize: 13,
  },
});
