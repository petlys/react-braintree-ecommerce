import React from 'react'

type DeleteIconProps = {
  color?: string,
  size?: string,
  style?: Object
}

export const DeleteIcon = (props: DeleteIconProps) => (
  <svg
    style={props.style}
    fill={props.color || '#1d2028'}
    height={props.size || '36'}
    viewBox="0 0 24 24"
    width={props.size || '36'}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

export default DeleteIcon
