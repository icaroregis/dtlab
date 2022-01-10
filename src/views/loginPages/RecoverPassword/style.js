import { StyleSheet } from 'react-native';
import { cores } from '../../../style-global';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  titulo: {
    marginTop: 15,
    fontSize: 22,
    color: cores.branco,
    marginBottom: 20,
  },
  subTitulo: {
    color: cores.cinza,
    fontSize: 15,
    width: 280,
    height: 45,
    textAlign: 'center',
  },
  input: {
    marginTop: 20,
    width: 270,
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
    width: 140,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: 293,
    height: 50,
  },
});
