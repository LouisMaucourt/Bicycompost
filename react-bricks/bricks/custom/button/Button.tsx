import React from 'react'
import { types, Text, Link } from 'react-bricks/frontend'
import classNames from 'classnames';

interface ButtonProps {
    buttontext: types.TextValue
    buttonPath: string
}

const Button: types.Brick<ButtonProps> = ({ buttontext, buttonPath }) => {
    return (
        <Link href={buttonPath} className='button-orange'>
            <Text
                propName="title"
                value={buttontext}
                placeholder="Action"
                renderBlock={({ children }) => (<p className='inline'>{children}</p>)}
            />
        </Link>
    )
}

Button.schema = {
    name: 'c-button',
    label: 'Button',

    getDefaultProps: () => ({
        buttontext: 'Thick as a brick',
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
                'Please, enter a valid URL',
        }
    ],
}

export default Button
