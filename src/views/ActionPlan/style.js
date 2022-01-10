import { StyleSheet } from 'react-native';
import { cores } from '../../style-global';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: cores.vinho,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  scrollContainer: {
    height: hp('70%'),
  },
  card: {
    alignSelf: 'stretch',
    marginTop: 12,
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: cores.branco,
    borderRadius: 6,
    // height: '75%',
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
    marginTop: 20,
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
  resultNull: {
    marginTop: 25,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 25,
  },
});
