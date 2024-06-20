import React from 'react';
import { types, Text, Image, RichText } from 'react-bricks/frontend';

interface CardInclusionProps {
    title: types.TextValue;
    titleCardOne: types.TextValue;
    imageCardOne: types.IImageSource;
    descriptionCardOne: types.TextValue;

    titleCardTwo: types.TextValue;
    imageCardTwo: types.IImageSource;
    descriptionCardTwo: types.TextValue;

    // New props for Card 3
    titleCardThree: types.TextValue;
    imageCardThree: types.IImageSource;
    descriptionCardThree: types.TextValue;

    // New props for Card 4
    titleCardFour: types.TextValue;
    imageCardFour: types.IImageSource;
    descriptionCardFour: types.TextValue;
}

const CardInclusion: types.Brick<CardInclusionProps> = ({
    title,
    titleCardOne, imageCardOne, descriptionCardOne,
    titleCardTwo, imageCardTwo, descriptionCardTwo,
    titleCardThree, imageCardThree, descriptionCardThree,
    titleCardFour, imageCardFour, descriptionCardFour
}) => {
    return (
        <div className='container-content'>
            <Text
                propName="title"
                value={title}
                placeholder="Type a title..."
                renderBlock={({ children }) => <h1>{children}</h1>}
            />
            <div className='flexx2 ' style={{ display: "flex" }}>
                <div className='flex-column form-content' style={{ flex: 1 }}>
                    <div style={{ marginBottom: '20px' }}>
                        <Text
                            propName="titleCardOne"
                            value={titleCardOne}
                            placeholder="Type a title..."
                            renderBlock={({ children }) => <h5>{children}</h5>}
                        />
                        <Image
                            propName="imageCardOne"
                            source={imageCardOne}
                            alt="Fallback alt tag"
                            maxWidth={75}
                        />
                    </div>
                    <RichText
                        propName='descriptionCardOne'
                        value={descriptionCardOne}
                        renderBlock={({ children }) => <p>{children}</p>}
                        placeholder='Description...'
                        allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                    />
                </div>

                <div className='flex-column form-content' style={{ flex: 1 }}>
                    <div style={{ marginBottom: '20px' }}>
                        <Text
                            propName="titleCardTwo"
                            value={titleCardTwo}
                            placeholder="Type a title..."
                            renderBlock={({ children }) => <h5>{children}</h5>}
                        />
                        <Image
                            propName="imageCardTwo"
                            source={imageCardTwo}
                            alt="Fallback alt tag"
                            maxWidth={75}
                        />
                    </div>
                    <RichText
                        propName='descriptionCardTwo'
                        value={descriptionCardTwo}
                        renderBlock={({ children }) => <p>{children}</p>}
                        placeholder='Description...'
                        allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                    />
                </div>
            </div>
            <div className='flexx2 ' style={{ display: "flex" }}>
                <div style={{ width: '60%' }} className='flex-column form-content'>
                    <div style={{ marginBottom: '20px' }}>
                        <Text
                            propName="titleCardThree"
                            value={titleCardThree}
                            placeholder="Type a title..."
                            renderBlock={({ children }) => <h5>{children}</h5>}
                        />
                        <div className='flex-row'>
                            <span style={{ maxWidth: "300px" }}>
                                <Image
                                    propName="imageCardThree"
                                    source={imageCardThree}
                                    alt="Fallback alt tag"
                                    maxWidth={300}
                                />
                            </span>

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

                <div className='flex-column form-content' style={{ flex: 1 }}>
                    <div style={{ marginBottom: '20px' }}>
                        <Text
                            propName="titleCardFour"
                            value={titleCardFour}
                            placeholder="Type a title..."
                            renderBlock={({ children }) => <h5>{children}</h5>}
                        />
                    </div>
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
    );
}

CardInclusion.schema = {
    name: 'cardinclusion',
    label: 'CardInclusion',
    getDefaultProps: () => ({
        title: 'Thick as a brick',
    }),
    sideEditProps: [
        {
            name: 'titleCardOne',
            label: 'Title Card One',
            type: types.SideEditPropType.Text,
        },
        {
            name: 'imageCardOne',
            label: 'Image Card One',
            type: types.SideEditPropType.Image,
        },
        {
            name: 'descriptionCardOne',
            label: 'Description Card One',
            type: types.SideEditPropType.Text,
        },
        {
            name: 'titleCardTwo',
            label: 'Title Card Two',
            type: types.SideEditPropType.Text,
        },
        {
            name: 'imageCardTwo',
            label: 'Image Card Two',
            type: types.SideEditPropType.Image,
        },
        {
            name: 'descriptionCardTwo',
            label: 'Description Card Two',
            type: types.SideEditPropType.Text,
        },
        // Add side edit props for Card 3
        {
            name: 'titleCardThree',
            label: 'Title Card Three',
            type: types.SideEditPropType.Text,
        },
        {
            name: 'imageCardThree',
            label: 'Image Card Three',
            type: types.SideEditPropType.Image,
        },
        {
            name: 'descriptionCardThree',
            label: 'Description Card Three',
            type: types.SideEditPropType.Text,
        },
        // Add side edit props for Card 4
        {
            name: 'titleCardFour',
            label: 'Title Card Four',
            type: types.SideEditPropType.Text,
        },
        {
            name: 'imageCardFour',
            label: 'Image Card Four',
            type: types.SideEditPropType.Image,
        },
        {
            name: 'descriptionCardFour',
            label: 'Description Card Four',
            type: types.SideEditPropType.Text,
        },
    ],
};

export default CardInclusion;
