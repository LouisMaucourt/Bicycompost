import React from 'react'
import { Image, types, Text } from 'react-bricks/frontend'

interface SubmitButtonProps {
  propName: string
  buttonText: types.TextValue
  buttonStyle: string
  buttonType: 'submit'
}

const SubmitButton: types.Brick<SubmitButtonProps> = ({
  propName,
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
        propName={propName}
        value={buttonText}
        placeholder="Action"
        renderBlock={({ children }) => (
          <p className="p-button">{children}</p>
        )}
        renderPlaceholder={() => <p className="p-button">Action</p>}
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
