import React from 'react'

type AboutIconProps = {
  color?: string,
  size?: string,
  style?: Object
}

export const AboutIcon = (props: AboutIconProps) => (
  <svg
    style={props.style}
    fill={props.color || '#1d2028'}
    height={props.size || '36'}
    viewBox="0 0 24 24"
    width={props.size || '36'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

export default AboutIcon
