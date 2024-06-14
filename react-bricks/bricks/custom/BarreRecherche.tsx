import classNames from 'classnames'
import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import { useForm } from 'react-hook-form'
import blockNames from '../react-bricks-ui/blockNames'
import {
  LayoutProps,
  backgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../react-bricks-ui/LayoutSideProps'
import Section from '../react-bricks-ui/shared/components/Section'
import Container from '../react-bricks-ui/shared/components/Container'
import { buttonColors } from '../react-bricks-ui/colors'

export interface FormBuilderProps extends LayoutProps {
  buttonPosition: string
}

const BarreRecherche: types.Brick<FormBuilderProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  buttonPosition,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    console.log('Form submitted')
  }

  return (
    <div>
      <p>Coucou</p>
      <Section
        backgroundColor={backgroundColor}
        borderTop={borderTop}
        borderBottom={borderBottom}
      >
        <Container
          size="full"
          paddingTop={paddingTop}
          paddingBottom={paddingBottom}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4 py-6"
          >
            <Repeater
              propName="form-elements"
              itemProps={{ register, errors }}
            />
            <Repeater
              propName="form-buttons"
              renderWrapper={(items) => (
                <div
                  className={classNames(
                    'w-full flex space-x-6 col-span-2',
                    buttonPosition
                  )}
                >
                  {items}
                </div>
              )}
            />
          </form>
        </Container>
      </Section>
    </div>
  )
}

BarreRecherche.schema = {
  label: 'Barre de recherche',
  category: 'Forms',
  previewImageUrl: `/bricks-preview-images/${blockNames.BarreRecherche}.png`,
  repeaterItems: [
    {
      name: 'form-elements',
      positionLabel: 'Form elements',
      items: [{ type: blockNames.FormSelect }],
    },
    {
      name: 'form-buttons',
      itemLabel: 'Button',
      itemType: blockNames.Button,
      min: 1,
      max: 1,
    },
  ],

  sideEditProps: [
    {
      groupName: 'Buttons',
      defaultOpen: true,
      props: [
        {
          name: 'buttonPosition',
          label: 'Buttons position',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'justify-start', label: 'Left' },
              { value: 'justify-center', label: 'Center' },
              { value: 'justify-end', label: 'Right' },
            ],
          },
        },
      ],
    },
    backgroundSideGroup,
    paddingBordersSideGroup,
  ],

  getDefaultProps: () => ({
    ...sectionDefaults,
    buttonPosition: 'justify-center',
    'form-elements': [
      {
        type: blockNames.FormSelect,
        props: {
          fieldName: 'select',
          label: 'Choose a fruit',
          columns: '2',
          options: 'orange: Orange\napple: Apple',
          isRequired: false,
        },
      },
      {
        type: blockNames.FormSelect,
        props: {
          fieldName: 'select',
          label: 'Choose a fruit',
          columns: '2',
          options: 'orange: Orange\napple: Apple',
          isRequired: false,
        },
      },
    ],
    'form-buttons': [
      {
        type: 'button',
        buttonType: 'submit',
        buttonColor: buttonColors.SKY.value,
        text: 'Send',
        variant: 'solid',
      },
    ],
  }),
}

export default BarreRecherche
