import * as React from 'react'
import { Image, RichText, Text, types } from 'react-bricks/frontend'
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
            propName="sectionTitle"
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

          <div>
            <RichText
              propName="genericTitle"
              renderBlock={({ children }) => (
                <h5 className="beige-light">{children}</h5>
              )}
              placeholder="Description..."
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Italic,
              ]}
            />

            <div className="flex space-x-6">
              {/* LEFT BLOCK */}
              <div className="bg-green-dark p-6 rounded-lg flex items-center space-x-4 text-block min-w-80">
                <div className="flex gap-5">
                  <Image
                    propName="leftSection-icon"
                    alt="Icon"
                    imageClassName="size-20 content-center"
                  />
                  <div className="flex-col min-w-80">
                    <Text
                      propName="leftSection-text"
                      value={title}
                      renderBlock={({ children }) => (
                        <h5 className="beige-light">{children}</h5>
                      )}
                      placeholder="Type a title..."
                    />
                    <RichText
                      propName="leftSection-description"
                      renderBlock={({ children }) => (
                        <p className="beige-light">{children}</p>
                      )}
                      placeholder="Description..."
                      allowedFeatures={[
                        types.RichTextFeatures.Bold,
                        types.RichTextFeatures.Italic,
                      ]}
                    />
                  </div>
                </div>
              </div>
              {/* MIDDLE BLOCK */}
              <div className="bg-green-dark p-6 rounded-lg flex items-center space-x-4 text-block">
                <div className="flex min-w-80">
                  <Image
                    propName="middleSection-icon"
                    alt="Icon"
                    imageClassName="size-20 content-center"
                  />
                  <div className="flex-col">
                    <Text
                      propName="middleSection-text"
                      value={title}
                      renderBlock={({ children }) => (
                        <h5 className="beige-light">{children}</h5>
                      )}
                      placeholder="Type a title..."
                    />
                    <RichText
                      propName="middleSection-description"
                      renderBlock={({ children }) => (
                        <p className="beige-light">{children}</p>
                      )}
                      placeholder="Description..."
                      allowedFeatures={[
                        types.RichTextFeatures.Bold,
                        types.RichTextFeatures.Italic,
                      ]}
                    />
                  </div>
                </div>
              </div>
              {/* RIGHT BLOCK */}
              <div className="bg-green-dark p-6 rounded-lg flex items-center space-x-4 text-block">
                <div className="flex min-w-80">
                  <Image
                    propName="rightSection-icon"
                    alt="Icon"
                    imageClassName="size-20 content-center"
                  />
                  <div className="flex-col min-w-80">
                    <Text
                      propName="rightSection-text"
                      value={title}
                      renderBlock={({ children }) => (
                        <h5 className="beige-light">{children}</h5>
                      )}
                      placeholder="Type a title..."
                    />
                    <RichText
                      propName="rightSection-description"
                      renderBlock={({ children }) => (
                        <p className="beige-light">{children}</p>
                      )}
                      placeholder="Description..."
                      allowedFeatures={[
                        types.RichTextFeatures.Bold,
                        types.RichTextFeatures.Italic,
                      ]}
                    />
                  </div>
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
