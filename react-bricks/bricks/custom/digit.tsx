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
    descriptionThree: types.TextValue
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
                    renderBlock={({ children }) => (<h1 style={{ fontSize: "3.5rem", marginBottom: "30px" }} className='text-white'>{children}</h1>)}
                />
                <div className='gridx2'>
                    <div className='flex-between'>
                        <div>
                            <Text
                                propName="numberOne"
                                value={numberOne}
                                placeholder="Type a digit..."
                                renderBlock={({ children }) => (<h2 className='text-white'>{children}</h2>)}
                            />
                            <RichText
                                propName='descriptionOne'
                                value={descriptionOne}
                                renderBlock={({ children }) => <p className='text-white'>{children}</p>}
                                placeholder='Description...'
                                allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                            />
                        </div>
                        <div>
                            <Text
                                propName="numberTwo"
                                value={numberTwo}
                                placeholder="Type a digit..."
                                renderBlock={({ children }) => (<h2 className='text-white'>{children}</h2>)}
                            />
                            <RichText
                                propName='descriptionTwo'
                                value={descriptionTwo}
                                renderBlock={({ children }) => <p className='text-white'>{children}</p>}
                                placeholder='Description...'
                                allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                            />
                        </div>
                    </div>
                    <div style={{ borderLeft: "1px solid white", paddingLeft: "50px" }} className='flex-between '>
                        <div>
                            <Text
                                propName="numberThree"
                                value={numberThree}
                                placeholder="Type a digit..."
                                renderBlock={({ children }) => (<h2 className='text-white'>{children}</h2>)}
                            />
                            <RichText
                                propName='descriptionThree'
                                value={descriptionThree}
                                renderBlock={({ children }) => <p className='text-white'>{children}</p>}
                                placeholder='Description...'
                                allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                            />
                        </div>
                        <div>
                            <Text
                                propName="numberFour"
                                value={numberFour}
                                placeholder="Type a digit..."
                                renderBlock={({ children }) => (<h2 className='text-white'>{children}</h2>)}
                            />
                            <RichText
                                propName='descriptionFour'
                                value={descriptionFour}
                                renderBlock={({ children }) => <p className='text-white'>{children}</p>}
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
    name: 'Digit',
    label: 'digit',

    sideEditProps: [],
}

export default digit
