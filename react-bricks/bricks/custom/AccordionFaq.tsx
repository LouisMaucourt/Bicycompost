import { Accordion, AccordionItem } from '@nextui-org/accordion';
import React from 'react';
import { types, Text, Image, RichText, Repeater } from 'react-bricks/frontend';

interface AccordionProps {
    title: types.TextValue;
    titleA1: types.TextValue;
    description: types.TextValue;
    titleTwo: types.TextValue;
    descriptionTwo: types.TextValue;
    titleThree: types.TextValue;
    descriptionThree: types.TextValue;
    titleFour: types.TextValue;
    descriptionFour: types.TextValue;
    titleFive: types.TextValue;
    descriptionFive: types.TextValue;
    titleSix: types.TextValue;
    descriptionSix: types.TextValue;
    image: types.IImageSource;
}

const AccordionFaq: types.Brick<AccordionProps> = ({ title, titleA1, description, titleTwo, descriptionTwo, titleThree, descriptionThree, titleFour, descriptionFour, titleFive, descriptionFive, titleSix, descriptionSix, image }) => {
    return (
        <section className='background-green fullscreen'>
            <div className='flexx2-img'>
                <div style={{ width: "60%", paddingLeft: "100px" }}>
                    <Text
                        propName="title"
                        value={title}
                        renderBlock={({ children }) => <h3 style={{ color: "white" }}>{children}</h3>}
                        placeholder="Titre ici"
                    />
                    <Accordion variant="bordered">
                        <AccordionItem
                            key="1"
                            aria-label={titleA1}
                            title={
                                <Text
                                    propName="titleOne"
                                    value={title}
                                    renderBlock={({ children }) => <h5 style={{ color: "white" }}>{children}</h5>}
                                    placeholder="Titre ici"
                                />
                            }
                            className="accordeon-title"
                            style={{ textAlign: 'left', color: "white" }}
                        >

                            < RichText
                                propName='description'
                                value={description}
                                renderBlock={({ children }) => <p style={{ color: "white" }}>{children}</p>}
                                placeholder='Écrire une description'
                                allowedFeatures={[
                                    types.RichTextFeatures.Bold,
                                    types.RichTextFeatures.Highlight,
                                    types.RichTextFeatures.Link,
                                ]}
                            />
                        </AccordionItem>
                        <AccordionItem
                            key="2"
                            aria-label={titleTwo}
                            title={
                                <Text
                                    propName="titletwo"
                                    value={titleTwo}
                                    renderBlock={({ children }) => <h5 style={{ color: "white" }}>{children}</h5>}
                                    placeholder="Titre ici"
                                />
                            }
                            className="accordeon-title"
                            style={{ textAlign: 'left', color: "white" }}
                        >

                            < RichText
                                propName='descriptionTwo'
                                value={descriptionTwo}
                                renderBlock={({ children }) => <p>{children}</p>}
                                placeholder='Écrire une description'
                                allowedFeatures={[
                                    types.RichTextFeatures.Bold,
                                    types.RichTextFeatures.Highlight,
                                    types.RichTextFeatures.Link,
                                ]}
                            />
                        </AccordionItem>
                        <AccordionItem
                            key="3"
                            aria-label={titleThree}
                            title={
                                <Text
                                    propName="titlethree"
                                    value={titleThree}
                                    renderBlock={({ children }) => <h5 style={{ color: "white" }}>{children}</h5>}
                                    placeholder="Titre ici"
                                />
                            }
                            className="accordeon-title"
                            style={{ textAlign: 'left', color: "white" }}
                        >

                            < RichText
                                propName='descriptionThree'
                                value={descriptionThree}
                                renderBlock={({ children }) => <p>{children}</p>}
                                placeholder='Écrire une description'
                                allowedFeatures={[
                                    types.RichTextFeatures.Bold,
                                    types.RichTextFeatures.Highlight,
                                    types.RichTextFeatures.Link,
                                ]}
                            />
                        </AccordionItem>
                        <AccordionItem
                            key="4"
                            aria-label={titleFour}
                            title={
                                <Text
                                    propName="titleFour"
                                    value={titleFour}
                                    renderBlock={({ children }) => <h5 style={{ color: "white" }}>{children}</h5>}
                                    placeholder="Titre ici"
                                />
                            }
                            className="accordeon-title"
                            style={{ textAlign: 'left', color: "white" }}
                        >

                            < RichText
                                propName='descriptionFour'
                                value={descriptionFour}
                                renderBlock={({ children }) => <p>{children}</p>}
                                placeholder='Écrire une description'
                                allowedFeatures={[
                                    types.RichTextFeatures.Bold,
                                    types.RichTextFeatures.Highlight,
                                    types.RichTextFeatures.Link,
                                ]}
                            />
                        </AccordionItem>
                        <AccordionItem
                            key="5"
                            aria-label={titleFive}
                            title={
                                <Text
                                    propName="titleFive"
                                    value={titleFive}
                                    renderBlock={({ children }) => <h5 style={{ color: "white" }}>{children}</h5>}
                                    placeholder="Titre ici"
                                />
                            }
                            className="accordeon-title"
                            style={{ textAlign: 'left', color: "white" }}
                        >

                            < RichText
                                propName='descriptionFive'
                                value={descriptionFive}
                                renderBlock={({ children }) => <p>{children}</p>}
                                placeholder='Écrire une description'
                                allowedFeatures={[
                                    types.RichTextFeatures.Bold,
                                    types.RichTextFeatures.Highlight,
                                    types.RichTextFeatures.Link,
                                ]}
                            />
                        </AccordionItem>
                        <AccordionItem
                            key="6"
                            aria-label={titleSix}
                            title={
                                <Text
                                    propName="titleSix"
                                    value={titleSix}
                                    renderBlock={({ children }) => <h5 style={{ color: "white" }}>{children}</h5>}
                                    placeholder="Titre ici"
                                />
                            }
                            className="accordeon-title"
                            style={{ textAlign: 'left', color: "white" }}
                        >

                            < RichText
                                propName='descriptionFive'
                                value={descriptionSix}
                                renderBlock={({ children }) => <p>{children}</p>}
                                placeholder='Écrire une description'
                                allowedFeatures={[
                                    types.RichTextFeatures.Bold,
                                    types.RichTextFeatures.Highlight,
                                    types.RichTextFeatures.Link,
                                ]}
                            />
                        </AccordionItem>
                    </Accordion>
                </div>
                <div style={{ marginRight: "-35px", overflow: "hidden" }}>
                    <Image
                        propName="image"
                        source={image}
                        alt="Fallback alt tag"
                        maxWidth={600}
                        imageClassName="faq-img"
                    />
                </div>
            </div>
        </section>
    );
};

AccordionFaq.schema = {
    name: 'Accordion Faq',
    label: 'Accordion Faq',
    getDefaultProps: () => ({
        title: 'Thick as a brick',
        titleA1: 'Accordion 1', // Default value for titleA1
        image: {
            src: 'https://via.placeholder.com/600x400',
            alt: 'Fallback Image',
        },
    }),
    sideEditProps: [
        {
            name: 'title',
            label: 'Title',
            type: types.SideEditPropType.Text,
        },
        {
            name: 'titleA1',
            label: 'Accordion 1 Title',
            type: types.SideEditPropType.Text,
        },
        {
            name: 'image',
            label: 'Image',
            type: types.SideEditPropType.Image,
        },
    ],
};

export default AccordionFaq;
