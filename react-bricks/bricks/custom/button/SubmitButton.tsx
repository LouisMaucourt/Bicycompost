import React from 'react'
import { types, Text, Link } from 'react-bricks/frontend'

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
}

export default SubmitButton
