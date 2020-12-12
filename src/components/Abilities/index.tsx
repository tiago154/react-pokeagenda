import React from 'react'
import { Ability } from '../../types/ability'
import { Container, Title, Value } from './style'
import { Help } from '@material-ui/icons/'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import { withStyles } from '@material-ui/core/styles'

interface IProps {
  abilities: Ability[]
}

const ToolTipAbility = withStyles({
  tooltip: {
    fontSize: 24
  }
})(Tooltip)

export const Abilities: React.FC<IProps> = ({ abilities }) => (
  <Container>
    <Title>Abilities</Title>
    {abilities.map(({ description, name }) =>
      <Value key={name}>
        {name}&nbsp;
        <ToolTipAbility
          title={description}
          placement={'top'}
          arrow
        >
          <IconButton size={'small'}>
            <Help
              style={{
                color: '#139e1a',
                fontSize: '20'
              }}
            />
          </IconButton>
        </ToolTipAbility>
      </Value>
    )}
  </Container>
)
