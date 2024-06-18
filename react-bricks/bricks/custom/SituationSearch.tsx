import * as React from 'react'
import { Text, types } from 'react-bricks/frontend'
import blockNames from '../react-bricks-ui/blockNames'
import {
  LayoutProps,
  backgroundSideGroup,
  sectionDefaults,
} from '../react-bricks-ui/LayoutSideProps'
import Section from '../react-bricks-ui/shared/components/Section'
import Container from '../react-bricks-ui/shared/components/Container'
import { buttonColors } from '../react-bricks-ui/colors'
import { useState } from 'react'
import Button from '../custom/button/Button'
import SubmitButton from '../custom/button/SubmitButton'
export interface FormBuilderProps extends LayoutProps {
  title: types.TextValue
  description: types.TextValue
}

const SituationSearch: types.Brick<FormBuilderProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  title,
}) => {
  const [searchResult, setSearchResult] = useState('')
  const [gazEffetDeSerre, setGazEffetDeSerre] = useState(0)

  const onSubmit = (event) => {
    event.preventDefault()
    const query = event.target.query.value
    const value = event.target.value.value
    setSearchResult(query)
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
          <Text
            propName="title"
            value={title}
            renderBlock={({ children }) => (
              <h3 className="beige-light">{children}</h3>
            )}
            placeholder="Type a title..."
          />
          <form onSubmit={onSubmit}>
            <div className="flex search-situation-section">
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

              <SubmitButton
                buttonStyle="button-orange submit"
                buttonText="Rechercher"
                buttonType="submit"
              />
            </div>
          </form>

          {!searchResult ? <p>Recherchez votre situation</p> : null}

          <div>
            <div className="text-white font-bold text-lg mb-4">
              Les résultats d’un{' '}
              <span className="text-orange-400">client moyen</span> sur 1 an
            </div>
            {!searchResult && (
              <p className="text-white">Recherchez votre situation</p>
            )}
            <div className="flex space-x-6">
              <div className="bg-green-700 p-6 rounded-lg flex items-center space-x-4 text-block">
                <div>
                  <div className="text-white text-2xl font-bold">702 kg</div>
                  <div className="text-green-200">CO2 Economisés</div>
                </div>
              </div>
              <div className="bg-green-700 p-6 rounded-lg flex items-center space-x-4 text-block">
                <div>
                  <div className="text-white text-2xl font-bold">508 kg</div>
                  <div className="text-green-200">Compost généré/ans</div>
                </div>
              </div>
              <div className="bg-green-700 p-6 rounded-lg flex items-center space-x-4 text-block">
                <div>
                  <div className="text-white text-2xl font-bold">
                    5 livraisons
                  </div>
                  <div className="text-green-200">Compost à un maraîcher</div>
                </div>
              </div>
            </div>
          </div>

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
  label: 'Situation Search',
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

  sideEditProps: [backgroundSideGroup],

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
