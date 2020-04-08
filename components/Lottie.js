import React from 'react'
import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

export const Lottie = () => {
  return (
    <Container>
      <LottieView
        source={require('../assets/animations/chinup.json')}
        autoPlay
      />
    </Container>
  )
}
