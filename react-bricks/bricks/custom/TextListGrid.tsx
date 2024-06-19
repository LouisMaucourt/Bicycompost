import { types, Text, Image, RichText, Repeater } from 'react-bricks/frontend'
import Section from '../react-bricks-ui/shared/components/Section'
import React from 'react'
import {
  LayoutProps,
  backgroundSideGroup,
} from '../react-bricks-ui/LayoutSideProps'

interface TextListGridProps extends LayoutProps {
  image: types.IImageSource
  title: types.TextValue
  titleText: types.TextValue
  description: types.TextValue
  imageCardOne?: types.IImageSource
  descriptionCardOne: types.TextValue
  imageCardTwo?: types.IImageSource
  descriptionCardTwo: types.TextValue
  imageCardThree?: types.IImageSource
  descriptionCardThree: types.TextValue
  imageCardFour?: types.IImageSource
  descriptionCardFour: types.TextValue
  buttons?: types.RepeaterItems
}

const TextListGrid: types.Brick<TextListGridProps> = ({
  title,
  titleText,
  imageCardOne,
  descriptionCardOne,
  imageCardTwo,
  descriptionCardTwo,
  imageCardThree,
  descriptionCardThree,
  imageCardFour,
  descriptionCardFour,
  backgroundColor,
  borderTop,
  borderBottom,
}) => {
  return (
    <Section
      className="pb-8 pt-8"
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <div
        style={{
          flexDirection: 'column',
          gap: '50px',
          display: 'flex',
          height: 'auto',
        }}
        className="container-content"
      >
        <Text
          propName="text"
          value={title}
          renderBlock={({ children }) => (
            <h3 className="beige-light">{children}</h3>
          )}
          placeholder="Titre"
        />
        <Text
          propName="titletext"
          value={titleText}
          renderBlock={({ children }) => (
            <h5 className="beige-light">{children}</h5>
          )}
          placeholder="Subtitle"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="card-item-green-800 flex-row"
            style={{ height: '100px', padding: '15px' }}
          >
            <Image
              propName="imageCardOne"
              source={imageCardOne}
              alt="Icon"
              imageClassName="size-14"
            />
            <RichText
              propName="descriptionCardOne"
              value={descriptionCardOne}
              renderBlock={({ children }) => (
                <p className="green-white">{children}</p>
              )}
              placeholder="Description..."
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Italic,
              ]}
            />
          </div>
          <div
            className="card-item-green-800 flex-row"
            style={{ height: '100px', padding: '15px' }}
          >
            <Image
              propName="imageCardTwo"
              source={imageCardTwo}
              alt="Icon"
              imageClassName="size-14"
            />
            <RichText
              propName="descriptionCardTwo"
              value={descriptionCardTwo}
              renderBlock={({ children }) => (
                <p className="green-white">{children}</p>
              )}
              placeholder="Description..."
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Italic,
              ]}
            />
          </div>
          <div
            className="card-item-green-800 flex-row"
            style={{ height: '100px', padding: '15px' }}
          >
            <Image
              propName="imageCardThree"
              source={imageCardThree}
              alt="Fallback alt tag"
              imageClassName="size-14"
            />
            <RichText
              propName="descriptionCardThree"
              value={descriptionCardThree}
              renderBlock={({ children }) => (
                <p className="w-full green-white">{children}</p>
              )}
              placeholder="Description..."
              allowedFeatures={[
                types.RichTextFeatures.Bold,
                types.RichTextFeatures.Italic,
              ]}
            />
          </div>
          <div
            className="card-item-green-800 flex-row"
            style={{ height: '100px', padding: '15px' }}
          >
            <Image
              propName="imageCardFour"
              source={imageCardFour}
              alt="Fallback alt tag"
              imageClassName="size-14"
            />
            <RichText
              propName="descriptionCardFour"
              value={descriptionCardFour}
              renderBlock={({ children }) => (
                <p className="w-full green-white">{children}</p>
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
    </Section>
  )
}

TextListGrid.schema = {
  name: 'text-list-grid',
  label: 'Text List Grid',
  getDefaultProps: () => ({
    title: `C'est un titre`,
    description: 'Ceci est une description.',
    buttons: [],
    image: {
      src: 'https://via.placeholder.com/600',
      alt: 'Placeholder image',
    },
  }),
  sideEditProps: [backgroundSideGroup],
}

export default TextListGrid
