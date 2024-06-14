import React from 'react'
import { types, Text, RichText } from 'react-bricks/frontend'
import Section from '../react-bricks-ui/shared/components/Section';
import Container from '../react-bricks-ui/shared/components/Container';

interface digitProps {
    title: types.TextValue
    numberOne: types.TextValue
    numberTwo: types.TextValue
    numberThree: types.TextValue
    numberFour: types.TextValue
    descriptionOne: types.TextValue
    descriptionTwo: types.TextValue
    descriptionthree: types.TextValue
    descriptionFour: types.TextValue
}

const digit: types.Brick<digitProps> = ({ title, numberOne, numberTwo, numberThree, numberFour, descriptionOne, descriptionTwo, descriptionThree, descriptionFour }) => {
    return (
        <Section className="background-green">
            <Container className='container-content'>
                <Text
                    propName="title"
                    value={title}
                    placeholder="Type a title..."
                    renderBlock={({ children }) => (<h1>{children}</h1>)}
                />
                <div className='gridx2'>
                    <div className='flex-between'>
                        <div>
                            <Text
                                propName="digit"
                                value={numberOne}
                                placeholder="Type a digit..."
                                renderBlock={({ children }) => (<h2>{children}</h2>)}
                            />
                            <RichText
                                propName='description'
                                value={descriptionOne}
                                renderBlock={({ children }) => <p>{children}</p>}
                                placeholder='Description...'
                                allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                            />
                        </div>
                        <div>
                            <Text
                                propName="digit"
                                value={numberTwo}
                                placeholder="Type a digit..."
                                renderBlock={({ children }) => (<h2>{children}</h2>)}
                            />
                            <RichText
                                propName='description'
                                value={descriptionTwo}
                                renderBlock={({ children }) => <p>{children}</p>}
                                placeholder='Description...'
                                allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                            />
                        </div>

                    </div>
                    <div className='flex-between'>
                        <div>
                            <Text
                                propName="digit"
                                value={numberThree}
                                placeholder="Type a digit..."
                                renderBlock={({ children }) => (<h2>{children}</h2>)}
                            />
                            <RichText
                                propName='description'
                                value={descriptionThree}
                                renderBlock={({ children }) => <p>{children}</p>}
                                placeholder='Description...'
                                allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                            />
                        </div>
                        <div>
                            <Text
                                propName="digit"
                                value={numberFour}
                                placeholder="Type a digit..."
                                renderBlock={({ children }) => (<h2>{children}</h2>)}
                            />
                            <RichText
                                propName='description'
                                value={descriptionFour}
                                renderBlock={({ children }) => <p>{children}</p>}
                                placeholder='Description...'
                                allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

digit.schema = {
    // Unique brick name
    name: 'digit',
    label: 'digit',

    // Defaults when a new brick is added


    // Sidebar Edit controls for props
    sideEditProps: [],
}

export default digit
