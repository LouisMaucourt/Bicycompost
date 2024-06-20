import { types, Text, RichText, Image, Repeater } from 'react-bricks/frontend'
import Button from './button/Button'

interface TextImageProps {
    title: types.TextValue
    description: types.TextValue
    buttons: types.RepeaterItems
    image: types.IImageSource
}

const TextImage: types.Brick<TextImageProps> = ({
    title,
    image,
    description,
    buttons,
}) => {
    return (
        <section className="fullscreen relative">
            <div style={{ height: '80vh' }} className="flexx2 container-content">
                <div style={{ width: '80%', paddingTop: '3rem' }}>
                    <Text
                        propName="title"
                        value={title}
                        renderBlock={({ children }) => (
                            <h1 style={{ lineHeight: '5rem' }}>{children}</h1>
                        )}
                        placeholder="Titre"
                    />
                    <div
                        style={{ width: '60%', paddingTop: '3rem', paddingBottom: '2rem' }}
                    >
                        <RichText
                            propName="description"
                            value={description}
                            renderBlock={({ children }) => <p>{children}</p>}
                            placeholder="Écrire une description"
                            allowedFeatures={[
                                types.RichTextFeatures.Bold,
                                types.RichTextFeatures.Highlight,
                                types.RichTextFeatures.Link,
                            ]}
                        />
                    </div>
                    <Button
                        propName="button"
                        buttonStyle="button-orange default btn-text-image"
                        buttonText="Demander un devis"
                        buttonPath="/devis"
                    />
                </div>

                <div>
                    <Image
                        propName="image"
                        source={image}
                        alt="Fallback alt tag"
                        maxWidth={600}
                        imageClassName="homepage-image"
                    />
                </div>
            </div>
        </section>
    )
}

TextImage.schema = {
    name: 'textImage',
    label: 'Text Image',
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

export default TextImage
