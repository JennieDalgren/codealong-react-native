import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity, View } from 'react-native-gesture-handler'
import { useFonts } from '@use-expo/font'
import { AppLoading } from 'expo'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const InterTitle = styled.Text`
  font-size: 24px;
  font-family: 'Inter-Black';
`

const Button = styled.TouchableOpacity`
  background: ${(props) => (props.cta ? 'mediumseagreen' : 'black')};
  padding: 8px;
`

const RoundedImageWrapper = styled.View`
  border-top-left-radius: 5px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 5px;
  width: 100px;
  height: 130px;
  border: 3px solid red;
`

const RoundedImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  border-top-left-radius: 2px;
  border-top-right-radius: 27px;
  border-bottom-left-radius: 27px;
  border-bottom-right-radius: 2px;
  overflow: hidden;
`

const StripedText = styled.Text`
  margin: 4px;
  color: white;
  background: ${(props) =>
    props.index % 2 === 0 ? 'mediumseagreen' : 'royalblue'};
`

export const Houses = ({ navigation }) => {
  let [fontLoaded] = useFonts({
    'Inter-Black': require('../assets/fonts/Inter-Black.otf'),
  })
  const [houses, setHouses] = useState([])

  useEffect(() => {
    fetch('https://www.anapioficeandfire.com/api/houses')
      .then((res) => res.json())
      .then((json) => setHouses(json))
  }, [])

  if (!fontLoaded) {
    return <AppLoading />
  } else {
    return (
      <Container>
        <RoundedImageWrapper>
          <RoundedImage
            source={{
              uri: 'https://media.giphy.com/media/t1i8KZ7momVs4/giphy.gif',
            }}
          />
        </RoundedImageWrapper>
        <Button onPress={() => navigation.navigate('Lottie')}>
          <Title>ANIMATION</Title>
        </Button>
        <InterTitle>Houses</InterTitle>
        {houses.map((house, index) => (
          <TouchableOpacity
            key={house.name}
            onPress={() => navigation.navigate('Detail', { house })} // navigating to details screen with the clicked house info passed along
          >
            <StripedText index={index}>{house.name}</StripedText>
          </TouchableOpacity>
        ))}
      </Container>
    )
  }
}
