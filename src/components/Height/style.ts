import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const baseText = styled.p`
  font-family: 'Press Start 2P', cursive;
  font-style: normal;
  font-weight: normal;
`

export const Title = styled<any>(baseText)`
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 16px;
`

export const Value = styled<any>(baseText)`
  font-size: 14px;
  line-height: 14px;
`
