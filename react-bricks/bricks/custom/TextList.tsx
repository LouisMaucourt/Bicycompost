import { types, Text, Repeater, RichText } from 'react-bricks/frontend'
import Section from "../react-bricks-ui/shared/components/Section";
import Container from "../react-bricks-ui/shared/components/Container";
import React from 'react';

interface textImageProps {
    title: types.TextValue
    description: types.TextValue
    buttons: types.RepeaterItems
}

const TextImage: types.Brick<textImageProps> = ({ title, description, buttons }) => {
    return (
        <Section className="background-beige">
            <Container className='container-content'>
                <Text
                    propName="text"
                    value={title}
                    renderBlock={({ children }) => <h3>{children}</h3>}
                    placeholder="Salut"
                />
                <RichText
                    propName='description'
                    value={description}
                    renderBlock={({ children }) => <p>{children}</p>}
                    placeholder='Description...'
                    allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                />
                <div className='margin-h-30'>
                    <RichText
                        propName='list'
                        value={description}
                        renderBlock={({ children }) => (
                            <li className="font-medium">{children}</li>
                        )}
                        placeholder='Liste...'
                        allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                    />
                </div>
                <Repeater propName='buttons' items={buttons}></Repeater>
            </Container>
        </Section>

    )
}

TextImage.schema = {
    name: 'Texte Liste',
    label: 'Texte Liste',
    getDefaultProps: () => ({
        title: `C'est un titre`,
    }),
    repeaterItems: [{
        name: 'buttons',
        itemType: 'c-button'
    }],
}

export default TextImage