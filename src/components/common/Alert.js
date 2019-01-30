import styled from 'styled-components'
import { colors, radiuses, spacing } from '../../styles'

export const Alert = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
  padding: ${spacing.md};
  border-radius: ${radiuses.RADIUS_DEFAULT};
  background-color: ${colors.LIGHT_RED};
  color: ${colors.DARK_RED};
  font-weight: bold;
  > *:not(:first-child) {
    margin-top: ${spacing.md};
  }
`
