import { types, Text, Image, RichText, Repeater } from 'react-bricks/frontend'
import Section from "../react-bricks-ui/shared/components/Section";
import Container from "../react-bricks-ui/shared/components/Container";
import React from 'react';
import Button from './button/Button';

interface textImageProps {
    image: types.IImageSource
    title: types.TextValue
    titleText: types.TextValue
    description: types.TextValue
    imageCardOne: types.IImageSource
    descriptionCardOne: types.TextValue
    imageCardTwo: types.IImageSource
    descriptionCardTwo: types.TextValue
    imageCardThree: types.IImageSource
    descriptionCardThree: types.TextValue
    imageCardFour: types.IImageSource
    descriptionCardFour: types.TextValue
    buttons: types.RepeaterItems
}

const TextImage: types.Brick<textImageProps> = ({ title, titleText, description, image, buttons, imageCardOne, descriptionCardOne, imageCardTwo, descriptionCardTwo, imageCardThree, descriptionCardThree, imageCardFour, descriptionCardFour }) => {
    return (
        <section className="background-beige">
            <div style={{ flexDirection: "column", gap: "50px", display: "flex", height: "auto" }} className='container-content'>
                <Text
                    propName="text"
                    value={title}
                    renderBlock={({ children }) => <h2 style={{ lineHeight: '4rem' }}>{children}</h2>}
                    placeholder="Titre"
                />
                <div className='flexx2'>
                    <span>
                        <Image
                            propName="image"
                            source={image}
                            alt="Fallback alt tag"
                            maxWidth={600}
                        />
                    </span>
                    <div>
                        <Text
                            propName="titletext"
                            value={titleText}
                            renderBlock={({ children }) => <h5>{children}</h5>}
                            placeholder="Salut"
                        />
                        <RichText
                            propName='description'
                            value={description}
                            renderBlock={({ children }) => <p>{children}</p>}
                            placeholder='Description...'
                            allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                        />
                        <RichText
                            propName='description'
                            value={description}
                            renderBlock={({ children }) => <p style={{ marginTop: "30px" }}>{children}</p>}
                            placeholder='Description...'
                            allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                        />
                        <div className='margin-h-30'>
                            <Button propName='button' buttonStyle='button-orange default btn-text-image' buttonText='coucu' buttonPath='/' />
                        </div>
                    </div>

                </div>
                <div className='flex-row'>
                    <div className='card-item-green-800 flex-row' style={{ height: '100px', padding: "15px" }}>
                        <Image
                            propName="imageCardOne"
                            source={imageCardOne}
                            alt="Fallback alt tag"
                            maxWidth={50}
                        />
                        <RichText
                            propName='descriptionCardOne'
                            value={descriptionCardOne}
                            renderBlock={({ children }) => <p>{children}</p>}
                            placeholder='Description...'
                            allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                        />
                    </div>
                    <div className='card-item-green-800 flex-row' style={{ height: '100px', padding: "15px" }}>
                        <Image
                            propName="imageCardTwo"
                            source={imageCardTwo}
                            alt="Fallback alt tag"
                            maxWidth={50}
                        />
                        <RichText
                            propName='descriptionCardTwo'
                            value={descriptionCardTwo}
                            renderBlock={({ children }) => <p>{children}</p>}
                            placeholder='Description...'
                            allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                        />

                    </div>
                    <div className='card-item-green-800 flex-row' style={{ height: '100px', padding: "15px" }}>
                        <Image
                            propName="imageCardThree"
                            source={imageCardThree}
                            alt="Fallback alt tag"
                            maxWidth={50}
                        />
                        <RichText
                            propName='descriptionCardThree'
                            value={descriptionCardThree}
                            renderBlock={({ children }) => <p>{children}</p>}
                            placeholder='Description...'
                            allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                        />
                    </div>
                    <div className='card-item-green-800 flex-row' style={{ height: '100px', padding: "15px" }}>
                        <Image
                            propName="imageCardFour"
                            source={imageCardFour}
                            alt="Fallback alt tag"
                            maxWidth={50}
                        />
                        <RichText
                            propName='descriptionCardFour'
                            value={descriptionCardFour}
                            renderBlock={({ children }) => <p>{children}</p>}
                            placeholder='Description...'
                            allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                        />
                    </div>
                </div>

            </div>
        </section>

    )
}

TextImage.schema = {
    name: 'Texte Liste',
    label: 'Texte Liste',
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