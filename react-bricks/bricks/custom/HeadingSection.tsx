import React from 'react';
import { types, Text, Image, RichText } from 'react-bricks/frontend';

interface HeadingSectionProps {
    title: types.TextValue;
    titleGoogle: types.TextValue;
    titleNbAdvice: types.TextValue;
    imageStar: types.IImageSource;
    description: types.RichTextFeatures
    button: types.RichTextFeatures;
    style: number;
    href: string;
    target?: string;
    rel?: string;
    className?: string;
}

const HeadingSection: types.Brick<HeadingSectionProps> = ({ title, titleGoogle, imageStar, titleNbAdvice, button }) => {
    return (
        <section style={{ paddingTop: "100px" }} className="container-content">
            <Text
                propName="title"
                value={title}
                placeholder="Votre titre"
                renderBlock={({ children }) => <h3>{children}</h3>}
            />
            <div style={{ minHeight: "auto", borderBottom: "2px solid black" }} className="flexx2">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: "100%" }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
                        <Text
                            propName="titleGoogle"
                            value={titleGoogle}
                            placeholder="Type a Google title..."
                            renderBlock={({ children }) => <h5>{children}</h5>}
                        />
                        <span style={{ width: "100px" }}>
                            <Image
                                propName="imageStar"
                                source={imageStar}
                                alt="Star Image"
                                maxWidth={100}
                            />
                        </span>
                        <Text
                            propName="titleNbAdvice"
                            value={titleNbAdvice}
                            placeholder="Type a Nb Advice title..."
                            renderBlock={({ children }) => <p>{children}</p>}
                        />
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        < RichText
                            propName='description'
                            value={button}
                            renderBlock={({ children }) => <p style={{ width: "80px", color: "orange" }}>{children}</p>}
                            placeholder='Écrire une description'
                            allowedFeatures={[
                                types.RichTextFeatures.Bold,
                                types.RichTextFeatures.Highlight,
                                types.RichTextFeatures.Link,
                            ]}
                        />
                    </div>
                </div>
            </div>

        </section >
    );
};

HeadingSection.schema = {
    name: 'HeadingSection',
    label: 'Heading Section',
    repeaterItems: [{
        name: 'buttons',
        itemType: 'c-button'
    }],
    // Define any sideEditProps if needed
    sideEditProps: [],
};

export default HeadingSection;
