import React from 'react'
import { Image, types, Text, Link } from 'react-bricks/frontend'

interface ButtonProps {
  buttonText: types.TextValue
  buttonStyle: string
  buttonPath: string
}

const Button: types.Brick<ButtonProps> = ({
  buttonText,
  buttonPath,
  buttonStyle,
}) => {
  return (
    <Link href={buttonPath} className={buttonStyle}>
      <Image
        propName="buttonIcon"
        alt="Icon"
        imageClassName="h-6 content-center"
      />
      <Text
        propName="buttonText"
        value={buttonText}
        placeholder="Action"
        renderBlock={({ children }) => <p className="inline">{children}</p>}
      />
    </Link>
  )
}

Button.schema = {
  name: 'custom-button',
  label: 'Link Button',

  getDefaultProps: () => ({
    buttonText: 'Click me',
    buttonStyle: 'button-orange default',
    buttonPath: '/',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      name: 'buttonPath',
      label: 'Path on Url',
      type: types.SideEditPropType.Text,
      validate: (value) =>
        value?.startsWith('/') ||
        value?.startsWith('https://') ||
        'Please enter a valid URL',
    },
    {
      name: 'buttonIcon',
      label: 'Icon',
      type: types.SideEditPropType.Image,
    },
  ],
}

export default Button
