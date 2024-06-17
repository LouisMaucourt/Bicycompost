import * as React from 'react'
import { RichText, types } from 'react-bricks/frontend'
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
import { Button } from '../react-bricks-ui'
import { buttonColors } from '../react-bricks-ui/colors'
import { useState } from 'react'

export interface FormBuilderProps extends LayoutProps {
  buttonPosition: string
}

const SituationSearch: types.Brick<FormBuilderProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
}) => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm()

  const [searchResult, setSearchResult] = useState('')

  const [gazEffetDeSerre, setGazEffetDeSerre] = useState(0)

  const onSubmit = () => {
    const formData = new FormData(event.target)
    const query = formData.get('query')
    const value = formData.get('value') as string
    setSearchResult(query as string)
    calcul(parseFloat(value))
  }

  function calcul(value: number) {
    const gazEffetDeSerre = value / 2
    setGazEffetDeSerre(gazEffetDeSerre)
    return gazEffetDeSerre
  }

  return (
    <div>
      <Section
        backgroundColor={backgroundColor}
        borderTop={borderTop}
        borderBottom={borderBottom}
      >
        <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
          {/* <RichText
            propName="description"
            value={description}
            renderBlock={({ children }) => (
              <p className="text-lg text-gray-500">{children}</p>
            )}
            placeholder="Type a description"
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Highlight,
            ]}
          /> */}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex">
              <div className="custom-select-wrapper">
                <select name="query" className="custom-select" required>
                  <option value="" disabled selected hidden>
                    Type d'entreprise
                  </option>
                  <option value="petite-entreprise">Petite entreprise</option>
                  <option value="grande-entreprise">Grande entreprise</option>
                  <option value="collectivite">Collectivité</option>
                </select>
              </div>
              <input
                type="number"
                min={0}
                placeholder="Nombre de déchets en litres"
                name="value"
                className="custom-input"
              />
              <Button
                type="button"
                buttonType="submit"
                text="Rechercher"
                buttonColor={{
                  color: 'blue',
                  classNameSolid: 'bg-blue-500 text-white',
                }}
                variant="solid"
                padding="normal"
              />
            </div>
          </form>

          {searchResult === 'petite-entreprise' ? (
            <p>Petite entreprise</p>
          ) : null}
          {searchResult === 'grande-entreprise' ? (
            <p>Grande entreprise</p>
          ) : null}
          {searchResult === 'collectivite' ? <p>Collectivité</p> : null}

          {gazEffetDeSerre ? (
            <p>{gazEffetDeSerre}kg de CO₂ économisé !</p>
          ) : null}
        </Container>
      </Section>
    </div>
  )
}

SituationSearch.schema = {
  name: blockNames.SituationSearch,
  label: 'Recherche par situation',
  category: 'Forms',
  previewImageUrl: `/bricks-preview-images/${blockNames.SituationSearch}.png`,
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
          label: "Type d'entreprise",
          columns: '2',
          options:
            'petite-entreprise: Petite entreprise \n grande-entreprise: Grande entreprise \n collectivite: Collectivité',
          isRequired: false,
        },
      },
      {
        type: blockNames.FormSelect,
        props: {
          fieldName: 'select',
          label: 'Nombre de déchets',
          columns: '2',
          options:
            '1: 1 \n 2: 2 \n 3: 3 \n 4: 4 \n 5: 5 \n 6: 6 \n 7: 7 \n 8: 8 \n 9: 9 \n 10: 10',
          isRequired: false,
        },
      },
    ],
    'form-buttons': [
      {
        type: 'button',
        buttonType: 'submit',
        buttonColor: buttonColors.SKY.value,
        text: 'Rechercher',
        variant: 'solid',
      },
    ],
  }),
}

export default SituationSearch
