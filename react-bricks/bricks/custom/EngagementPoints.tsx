import React from 'react'
import { types, Text, Image, RichText } from 'react-bricks/frontend'
import classNames from 'classnames'

interface EngagementPointsProps {
  title: types.TextValue
  image: types.IImageSource
  imageCardOne: types.IImageSource
  titleCardONe: types.TextValue
  descriptionCardONe: types.TextValue
  imageCardTwo: types.IImageSource
  titleCardTwo: types.TextValue
  descriptionCardTwo: types.TextValue
  imageCardThree: types.IImageSource
  titleCardThree: types.TextValue
  descriptionCardThree: types.TextValue
  imageCardFour: types.IImageSource
  titleCardFour: types.TextValue
  descriptionCardFour: types.TextValue
}

const EngagementPoints: types.Brick<EngagementPointsProps> = ({
  title,
  image,
  imageCardOne,
  titleCardONe,
  descriptionCardONe,
  imageCardTwo,
  titleCardTwo,
  descriptionCardTwo,
  imageCardThree,
  titleCardThree,
  descriptionCardThree,
  imageCardFour,
  titleCardFour,
  descriptionCardFour,
}) => {
  return (
    <section style={{}} className="background-green relative">
      <Image
        propName="image"
        source={image}
        alt="Fallback alt tag"
        maxWidth={300}
        imageClassName="image-left"
      />

      <div
        style={{
          flexDirection: 'row',
          gap: '70px',
          alignItems: 'baseline',
          justifyContent: 'space-between',
        }}
        className="container-content flexx2"
      >
        <div>
          <Text
            propName="title"
            value={title}
            placeholder="Type a title..."
            renderBlock={({ children }) => (
              <h3 style={{ color: 'white' }}>{children}</h3>
            )}
          />
        </div>
        <div
          style={{ gap: '20px', alignItems: 'baseline', width: '50%' }}
          className="flex-between"
        >
          <div style={{ width: '100%' }}>
            <div
              className="card-item-green-800 flex-row flex-right"
              style={{
                justifyContent: 'flex-start',
                height: '100px',
                padding: '15px',
              }}
            >
              <Image
                propName="imageCardOne"
                source={imageCardOne}
                alt="Fallback alt tag"
                maxWidth={75}
              />
              <span>
                <Text
                  propName="titleCardONe"
                  value={titleCardONe}
                  placeholder="Type a title..."
                  renderBlock={({ children }) => (
                    <h5 style={{ color: 'white' }}>{children}</h5>
                  )}
                />
                <RichText
                  propName="descriptionCardONe"
                  value={descriptionCardONe}
                  renderBlock={({ children }) => (
                    <p style={{ color: 'white' }}>{children}</p>
                  )}
                  placeholder="Description..."
                  allowedFeatures={[
                    types.RichTextFeatures.Bold,
                    types.RichTextFeatures.Italic,
                  ]}
                />
              </span>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <div
              className="card-item-green-800 flex-row"
              style={{
                justifyContent: 'flex-start',
                height: '100px',
                padding: '15px',
              }}
            >
              <Image
                propName="imageCardTwo"
                source={imageCardTwo}
                alt="Fallback alt tag"
                maxWidth={75}
              />
              <span>
                <Text
                  propName="titleCardTwo"
                  value={titleCardTwo}
                  placeholder="Type a title..."
                  renderBlock={({ children }) => (
                    <h5 style={{ color: 'white' }}>{children}</h5>
                  )}
                />
                <RichText
                  propName="descriptionCardTwo"
                  value={descriptionCardTwo}
                  renderBlock={({ children }) => (
                    <p style={{ color: 'white' }}>{children}</p>
                  )}
                  placeholder="Description..."
                  allowedFeatures={[
                    types.RichTextFeatures.Bold,
                    types.RichTextFeatures.Italic,
                  ]}
                />
              </span>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <div
              className="card-item-green-800 flex-row"
              style={{
                justifyContent: 'flex-start',
                height: '100px',
                padding: '15px',
              }}
            >
              <Image
                propName="imageCardThree"
                source={imageCardThree}
                alt="Fallback alt tag"
                maxWidth={75}
              />
              <span>
                <Text
                  propName="titleCardThree"
                  value={titleCardThree}
                  placeholder="Type a title..."
                  renderBlock={({ children }) => (
                    <h5 style={{ color: 'white' }}>{children}</h5>
                  )}
                />
                <RichText
                  propName="descriptionCardThree"
                  value={descriptionCardThree}
                  renderBlock={({ children }) => (
                    <p style={{ color: 'white' }}>{children}</p>
                  )}
                  placeholder="Description..."
                  allowedFeatures={[
                    types.RichTextFeatures.Bold,
                    types.RichTextFeatures.Italic,
                  ]}
                />
              </span>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <div
              className="card-item-green-800 flex-row"
              style={{
                justifyContent: 'flex-start',
                height: '100px',
                padding: '15px',
              }}
            >
              <Image
                propName="imageCardFour"
                source={imageCardFour}
                alt="Fallback alt tag"
                maxWidth={75}
              />
              <span>
                <Text
                  propName="titleCardFour"
                  value={titleCardFour}
                  placeholder="Type a title..."
                  renderBlock={({ children }) => (
                    <h5 style={{ color: 'white' }}>{children}</h5>
                  )}
                />
                <RichText
                  propName="descriptionCardFour"
                  value={descriptionCardFour}
                  renderBlock={({ children }) => (
                    <p style={{ color: 'white' }}>{children}</p>
                  )}
                  placeholder="Description..."
                  allowedFeatures={[
                    types.RichTextFeatures.Bold,
                    types.RichTextFeatures.Italic,
                  ]}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

EngagementPoints.schema = {
  // Unique brick name
  name: 'engagementpoints',
  label: 'EngagementPoints',

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    title: 'Thick as a brick',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default EngagementPoints
