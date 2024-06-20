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
    descriptionTwo: types.TextValue
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

const TextImage: types.Brick<textImageProps> = ({ title, titleText, description, descriptionTwo, image, buttons, imageCardOne, descriptionCardOne, imageCardTwo, descriptionCardTwo, imageCardThree, descriptionCardThree, imageCardFour, descriptionCardFour }) => {
    return (
        <section className="background-green">
            <div style={{ flexDirection: "column", gap: "50px", display: "flex", height: "auto" }} className='container-content'>
                <Text
                    propName="text"
                    value={title}
                    renderBlock={({ children }) => <h3 style={{ color: "white" }}>{children}</h3>}
                    placeholder="Titre"
                />
                <div className='flexx2'>
                    <span>
                        <Image
                            propName="image"
                            source={image}
                            alt="Fallback alt tag"
                            maxWidth={500}
                        />
                    </span>
                    <div style={{ width: "100%" }}>
                        <Text
                            propName="titletext"
                            value={titleText}
                            renderBlock={({ children }) => <h5 style={{ color: "white" }}>{children}</h5>}
                            placeholder="Salut"
                        />
                        <RichText
                            propName='description'
                            value={description}
                            renderBlock={({ children }) => <p style={{ color: "white" }}>{children}</p>}
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
                            maxWidth={5}
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
                </div>

            </div>
        </section>

    )
}

TextImage.schema = {
    name: 'Texte Liste Variation',
    label: 'Texte Liste Variation',
    getDefaultProps: () => ({
        title: `C'est un titre`,
        titleText: `C'est un sous-titre`,
        description: 'Ceci est une description.',
        descriptionTwo: 'Ceci est une seconde description.',
        image: {
            src: 'https://via.placeholder.com/600',
            alt: 'Placeholder image'
        },
        imageCardOne: {
            src: 'https://via.placeholder.com/50',
            alt: 'Placeholder image card one'
        },
        descriptionCardOne: 'Description de la carte un.',
        imageCardTwo: {
            src: 'https://via.placeholder.com/50',
            alt: 'Placeholder image card two'
        },
        descriptionCardTwo: 'Description de la carte deux.',
        imageCardThree: {
            src: 'https://via.placeholder.com/50',
            alt: 'Placeholder image card trois'
        },
        descriptionCardThree: 'Description de la carte trois.',
        imageCardFour: {
            src: 'https://via.placeholder.com/50',
            alt: 'Placeholder image card quatre'
        },
        descriptionCardFour: 'Description de la carte quatre.',
        buttons: [],
    }),
}

export default TextImage
