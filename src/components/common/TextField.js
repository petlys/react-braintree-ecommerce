import React from 'react'
import styled from 'styled-components'
import { colors, spacing, radiuses } from '../../styles'

const Container = styled.div`
  position: relative;
  margin-bottom: ${spacing.lg};
  width: 100%;
`

export const Input = styled.input`
  position: relative;
  background-color: white;
  color: ${props => (!props.valid && props.touched ? colors.DARK_RED : colors.BLACK)};
  padding: ${spacing.sm};
  border-radius: ${radiuses.RADIUS_SMALL};
  border: 1px solid ${props => (!props.valid && props.touched ? colors.RED : colors.TERTIARY_TEXT)};
  transition: 200ms;
  width: 100%;

  ::placeholder {
    color: ${props => (!props.valid && props.touched ? colors.DARK_RED : '#9b9b9b')};
  }

  :focus {
    outline: 0;
    color: ${colors.BLACK};
  }
`

const ErrorMessage = styled.p`
  margin: 0;
  color: ${colors.RED};
  text-align: left;
  font-size: 12px;
  position: absolute;
  left: 0;
  bottom: -24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`

type Props = {
  name: string,
  onChange: Function,
  value?: string,
  valid: boolean,
  pattern?: string | RegExp,
  errorMsg?: string,
  children?: React$Element<any>,
  required?: boolean,
  style?: Object
}

type State = {
  touched: boolean
}

export class TextField extends React.Component<Props, State> {
  static defaultProps = {
    valid: true,
    onChange: () => {}
  }

  state = {
    touched: false
  }

  _onChange = evt => {
    const { onChange, pattern, required } = this.props
    const { name, value } = evt.target

    if (pattern) {
      const rx = new RegExp(pattern)
      rx.exec(value) ? onChange(name, value, true) : onChange(name, value, false)
      return
    }
    if (required && value === '') {
      onChange(name, value, false)
      return
    } else onChange(name, value, true)
  }

  _onBlur = evt => {
    this.setState({ touched: true })
    this._onChange(evt)
  }

  render() {
    const { children, style, errorMsg } = this.props
    const defaultMsg = this.props.required ? 'Dette feltet er obligatorisk' : 'Ugyldig verdi'

    return (
      <Container style={{ ...style }}>
        <Input {...this.props} onChange={this._onChange} onBlur={this._onBlur} touched={this.state.touched} />

        {children}

        {!this.props.valid && this.state.touched ? (
          <ErrorMessage className="animated zoomIn fast">{errorMsg || defaultMsg}</ErrorMessage>
        ) : null}
      </Container>
    )
  }
}

export default TextField
