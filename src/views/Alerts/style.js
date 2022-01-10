import { StyleSheet } from 'react-native';
import { cores } from '../../style-global';

export default StyleSheet.create({
  scroll: {
    borderRadius: 15,
  },
  viewContainerScrollMaster: {
    marginTop: 20,
    height: '66%',
    // borderStyle: 'solid',
    // borderWidth: 2,
    // borderColor: cores.preto,
    borderRadius: 15,
  },
  containerMaster: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 15,
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
    paddingRight: 15,
    paddingLeft: 15,
  },
  containerBodyIcon: {
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
    fontWeight: 'bold',
  },
  containerSubHeader: {
    textAlign: 'center',
    color: '#6E7191',
    fontSize: 13,
    alignSelf: 'stretch',
    fontWeight: 'bold',
  },

  /********/

  cell: {
    width: 115,
    justifyContent: 'center',
    fontWeight: 'bold',
    borderRadius: 15,
  },
  containerDivSelect: {
    marginTop: 10,
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderRadius: 15,
  },
  divSelect: {
    borderRadius: 16,
    flexDirection: 'row',
    alignSelf: 'stretch',
    flex: 1,
    padding: 6,
    marginLeft: 77,
    marginRight: 77,
    height: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
  },
  filter: {
    marginRight: 7,
  },
  textFilter: {
    fontSize: 15,
    color: cores.preto,
  },
  inputSelect: {
    height: 50,
    borderRadius: 10,
    borderColor: cores.cinzaEscuro,
    color: cores.preto,
    padding: 15,
    fontSize: 13,
  },
  resultNull: {
    marginTop: 25,
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerDataTable: {
    backgroundColor: '#EFEFEF',
    borderRadius: 20,
    height: '100%',
  },
  row: {
    borderRadius: 15,
  },
});
