import { types, Text, RichText, Image } from 'react-bricks/frontend'
import Button from './button/Button'

interface TextImageLeftProps {
  title: types.TextValue
  description: types.TextValue
  image: types.IImageSource
}

const TextImageLeft: types.Brick<TextImageLeftProps> = ({
  title,
  image,
  description,
}) => {
  return (
    <section className="fullscreen relative">
      <div style={{ minHeight: '50vh' }} className="flexx2 container-content">
        <div>
          <Image
            propName="image"
            source={image}
            alt="Fallback alt tag"
            maxWidth={600}
            imageClassName="left-image"
          />
        </div>
        <div className="width-60 pl-30 ml-48">
          <Text
            propName="title"
            value={title}
            renderBlock={({ children }) => (
              <h1 style={{ lineHeight: '4rem' }}>{children}</h1>
            )}
            placeholder="Titre"
          />
          <RichText
            propName="description"
            value={description}
            renderBlock={({ children }) => (
              <p className="green-black">{children}</p>
            )}
            placeholder="Écrire une description"
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Highlight,
              types.RichTextFeatures.Link,
            ]}
          />
          <RichText
            propName="description-2"
            value={description}
            renderBlock={({ children }) => (
              <p className="green-black">{children}</p>
            )}
            placeholder="Écrire une description"
            allowedFeatures={[
              types.RichTextFeatures.Bold,
              types.RichTextFeatures.Highlight,
              types.RichTextFeatures.Link,
            ]}
          />
          {/* <Button
            propName="button"
            buttonStyle="button-orange default btn-text-image"
            buttonText="coucu"
            buttonPath="/"
          /> */}
        </div>
      </div>
    </section>
  )
}

TextImageLeft.schema = {
  name: 'textImageLeft',
  label: 'Text Image Left',
  getDefaultProps: () => ({
    title: `C'est un titre`,
    description: 'Ceci est une description.',
    buttons: [],
    image: {
      src: 'https://via.placeholder.com/600',
      alt: 'Placeholder image',
    },
  }),
}

export default TextImageLeft
