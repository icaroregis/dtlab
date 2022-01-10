import { StyleSheet } from 'react-native';
import { cores } from '../../style-global';

export default StyleSheet.create({
  cell: {
    width: 125,
    justifyContent: 'center',
  },
  editButton: {
    marginRight: 17,
  },
  deleteButton: {},
  containerButtons: {
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
});
