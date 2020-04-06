import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
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
        <InterTitle>Houses</InterTitle>
        {houses.map((house) => (
          <TouchableOpacity
            key={house.name}
            onPress={() => navigation.navigate('Detail', { house })} // navigating to details screen with the clicked house info passed along
          >
            <Title>{house.name}</Title>
          </TouchableOpacity>
        ))}
      </Container>
    )
  }
}
