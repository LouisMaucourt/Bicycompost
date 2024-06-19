import { types, Text, RichText, Image, Repeater } from 'react-bricks/frontend'
import Button from './button/Button'

interface TextImageProps {
    title: types.TextValue
    description: types.TextValue
    buttons: types.RepeaterItems
    image: types.IImageSource
}

const TextImage: types.Brick<TextImageProps> = ({ title, image, description, buttons }) => {
    return (
        <section className='fullscreen relative'>
            <div style={{ height: "80vh" }} className="flexx2 container-content">
                <div className='width-60'>
                    <Text
                        propName="title"
                        value={title}
                        renderBlock={({ children }) => <h1 style={{ lineHeight: '4rem' }}>{children}</h1>}
                        placeholder="Titre"
                    />
                    <RichText
                        propName='description'
                        value={description}
                        renderBlock={({ children }) => <p>{children}</p>}
                        placeholder='Écrire une description'
                        allowedFeatures={[
                            types.RichTextFeatures.Bold,
                            types.RichTextFeatures.Highlight,
                            types.RichTextFeatures.Link,
                        ]}
                    />
                    <Button propName='button' buttonStyle='button-orange default btn-text-image' buttonText='coucu' buttonPath='/' />
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
            alt: 'Placeholder image'
        }
    }),
}

export default TextImage
