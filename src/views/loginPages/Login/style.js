import { StyleSheet } from 'react-native';
import { cores } from '../../../style-global';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titulo: {
    marginTop: 40,
    fontSize: wp('5%'),
    color: cores.branco,
    marginBottom: 30,
  },
  inputAreaEye: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginTop: 20,
    marginBottom: 10,
    width: 260,
    height: 50,
    backgroundColor: cores.branco,
    opacity: 0.5,
    borderRadius: 30,
    color: cores.preto,
    padding: 15,
    fontSize: 16,
  },
  inputPassword: {
    marginLeft: 30,
    marginRight: 10,
    width: 260,
    height: 50,
    backgroundColor: cores.branco,
    opacity: 0.5,
    borderRadius: 30,
    color: cores.preto,
    padding: 15,
    fontSize: 16,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  textCheckBox: {
    fontSize: 18,
    color: cores.cinza,
  },
  containerMasterCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  containerCheckBox: {
    margin: 8,
  },
  textSenha: {
    marginTop: 20,
    fontSize: 18,
    color: cores.cinza,
  },
  buttonLogin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 220,
    height: 50,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: cores.cinza,
    borderRadius: 30,
  },
  buttonText: {
    color: cores.cinza,
  },
  textCadastro: {
    marginTop: 30,
  },
  textTitulo: {
    color: cores.dourado,
    fontSize: 20,
  },
});
