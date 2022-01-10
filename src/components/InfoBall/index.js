import React from 'react';
import { Image } from 'react-native';
import style from './style';

export default function InfoBall({ signal, secondBall }) {
  return (
    <>
      {signal == 1 ? (
        <Image
          style={
            secondBall == 1
              ? style.secondeBall
              : secondBall == 2
              ? style.thirdBall
              : style.ball
          }
          source={require('../../assets/green-circle.png')}
        />
      ) : signal == 2 ? (
        <Image
          style={
            secondBall == 1
              ? style.secondeBall
              : secondBall == 2
              ? style.thirdBall
              : style.ball
          }
          source={require('../../assets/yellow-circle.png')}
        />
      ) : signal == 3 ? (
        <Image
          style={
            secondBall == 1
              ? style.secondeBall
              : secondBall == 2
              ? style.thirdBall
              : style.ball
          }
          source={require('../../assets/red-circle.png')}
        />
      ) : signal == 4 ? (
        <Image
          style={
            secondBall == 1
              ? style.secondeBall
              : secondBall == 2
              ? style.thirdBall
              : style.ball
          }
          source={require('../../assets/black-circle.png')}
        />
      ) : (
        ''
      )}
    </>
  );
}
