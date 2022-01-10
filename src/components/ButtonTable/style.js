import { StyleSheet } from 'react-native';
import { cores } from '../../style-global';

export default StyleSheet.create({
  containerModalMaster: {
    flex: 1,
    opacity: 0.8,
    backgroundColor: cores.preto,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerModal: {
    backgroundColor: cores.branco,
    borderRadius: 10,
    width: '85%',
    height: '80%',
  },
  cotainerContent: {
    flex: 1,
    backgroundColor: cores.branco,
    borderRadius: 10,
    position: 'relative',
  },
  subContainer: {
    alignSelf: 'stretch',
    height: 10,
    alignItems: 'flex-end',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 8,
  },
  title: {
    color: cores.preto,
    fontWeight: 'bold',
    fontSize: 22,
  },
  containerTitleText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  serial: {
    flexDirection: 'row',
    marginRight: 8,
    marginLeft: 10,
    marginTop: 10,
  },
  numberSerial: {
    alignSelf: 'stretch',
    backgroundColor: '#EFEFEF',
    marginRight: 10,
    marginLeft: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: cores.preto,
  },
  titleSerial: {
    fontWeight: 'bold',
  },
  subTitleSerial: {
    flexShrink: 1,
  },
});
