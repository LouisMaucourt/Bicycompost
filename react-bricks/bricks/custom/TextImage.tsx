import { types, Text, RichText, Image, Repeater } from 'react-bricks/frontend'
import { textColors, bgColors } from '../react-bricks-ui/colors';


interface textImageProps {
    title: types.TextValue
    description: types.TextValue
    buttons: types.RepeaterItems
    image: types.IImageSource
}

const TextImage: types.Brick<textImageProps> = ({ title, image, description, buttons }) => {
    return (
        <section className='fullscreen relative'>
            <div style={{ height: "80vh" }} className="flexx2 container-content">
                <div className='width-60'>
                    <Text
                        propName="text"
                        value={title}
                        renderBlock={({ children }) => <h1 style={{ lineHeight: '4rem' }}>{children}</h1>}
                        placeholder="Titre"
                    />
                    < RichText
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
                    <Repeater propName='buttons' items={buttons}></Repeater>
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
    }),
    repeaterItems: [{
        name: 'buttons',
        itemType: 'c-button'
    }],
}

export default TextImage