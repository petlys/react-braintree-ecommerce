import React from 'react'
import styled from 'styled-components'
import { AccountIcon, CreditCardIcon, CheckmarkIcon } from '../icons'
import { Hr } from '../common'
import { colors } from '../../styles'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    flex-shrink: 0;
  }
`

const Line = styled(Hr)`
  background-color: ${props => (props.active ? colors.GREEN : colors.TERTIARY_TEXT)};
  width: 40px;
  height: 5px;
`

type Props = {
  currentStep: 'customer' | 'payment' | 'completed'
}

export const ProgressIndicator = (props: Props) => {
  const markSecondStep = props.currentStep === 'payment' || props.currentStep === 'completed'

  return (
    <Container>
      <AccountIcon size="50" color={colors.GREEN} />
      <Line active />

      <Line active={markSecondStep} />
      <CreditCardIcon size="50" color={markSecondStep ? colors.GREEN : colors.TERTIARY_TEXT} />
      <Line active={markSecondStep} />

      <Line active={props.currentStep === 'completed'} />
      <CheckmarkIcon size="50" color={props.currentStep === 'completed' ? colors.GREEN : colors.TERTIARY_TEXT} />
    </Container>
  )
}

export default ProgressIndicator
