import React from 'react'
import { Container, Title, Icons } from './style'
import { femaleIcon, maleIcon, unknownIcon } from '../../assets'
import Icon from '../PokemonImage'
import { GenderTypesEnum } from '../../types/genderTypes'

interface IProps {
  genderRate: GenderTypesEnum
}

const showRightIcons = (genderRate: GenderTypesEnum) => {
  if (genderRate === GenderTypesEnum.BOTH) {
    return (
      <>
        <Icon url={maleIcon} width={24} title={'Male'}/>
        <Icon url={femaleIcon} width={26} title={'Female'}/>
      </>
    )
  }

  if (genderRate === GenderTypesEnum.ONLY_FEMALE) {
    return (
      <Icon url={femaleIcon} width={26} title={'Female'}/>
    )
  }

  if (genderRate === GenderTypesEnum.ONLY_MALE) {
    return (
      <Icon url={maleIcon} width={24} title={'Male'}/>
    )
  }

  return (
    <Icon url={unknownIcon} width={24} title={'Unknown'}/>
  )
}

export const Gender: React.FC<IProps> = ({ genderRate }) => (
  <Container>
    <Title>Gender</Title>
    <Icons>
      {showRightIcons(genderRate)}
    </Icons>
  </Container>
)
