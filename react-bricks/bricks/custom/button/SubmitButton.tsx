import React from 'react'
import { Image, types, Text } from 'react-bricks/frontend'

interface SubmitButtonProps {
  buttonText: types.TextValue
  buttonStyle: string
  buttonType: 'submit'
}

const SubmitButton: types.Brick<SubmitButtonProps> = ({
  buttonText,
  buttonStyle,
  buttonType,
}) => {
  return (
    <button type={buttonType} className={buttonStyle}>
      <Image
        propName="buttonIcon"
        alt="Icon"
        imageClassName="h-6 content-center"
      />
      <Text
        propName="buttonText"
        value={buttonText}
        placeholder="Action"
        renderBlock={({ children }) => (
          <p className="inline p-button">{children}</p>
        )}
      />
    </button>
  )
}

SubmitButton.schema = {
  name: 'submit-button',
  label: 'Submit Button',

  getDefaultProps: () => ({
    buttonText: 'Click me',
    buttonType: 'submit',
    buttonStyle: 'button-orange submit',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      name: 'buttonIcon',
      label: 'Icon',
      type: types.SideEditPropType.Image,
    },
  ],
}

export default SubmitButton
