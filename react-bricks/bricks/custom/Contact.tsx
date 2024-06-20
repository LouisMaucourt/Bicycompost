import classNames from 'classnames'
import React from 'react'
import { Repeater, types, Text, Link, Plain, Image, RichText } from 'react-bricks/frontend'
import { FcDepartment, FcPhone, FcVoicePresentation } from 'react-icons/fc'
import blockNames from '../../bricks/react-bricks-ui/blockNames'
import { buttonColors, textColors } from '../../bricks/react-bricks-ui/colors'
import {
    backgroundSideGroup,
    LayoutProps,
    paddingBordersSideGroup,
    sectionDefaults,
} from '../../bricks/react-bricks-ui/LayoutSideProps'
import Container from '../../bricks/react-bricks-ui/shared/components/Container'
import Section from '../../bricks/react-bricks-ui/shared/components/Section'
import TitleSubtitle from '../../bricks/react-bricks-ui/shared/components/TitleSubtitle'

export interface ContactsFormProps extends LayoutProps {
    phoneNumber: string
    email: string
    iconPlace: types.IImageSource
    iconNumber: types.IImageSource
    iconEmail: types.IImageSource
    description: types.RichTextFeatures
}

const ContactsForm: types.Brick<ContactsFormProps> = ({
    backgroundColor,
    borderTop,
    borderBottom,
    paddingTop,
    paddingBottom,
    phoneNumber,
    email,
    iconPlace,
    iconNumber,
    iconEmail,
    description
}) => {
    return (
        <Section
            backgroundColor={backgroundColor}
            borderTop={borderTop}
            borderBottom={borderBottom}
        >
            <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="pb-12 lg:pb-20 sm:text-left lg:pr-8 pr-5">
                        <TitleSubtitle />
                        < RichText
                            propName='description'
                            value={description}
                            renderBlock={({ children }) => <p style={{ width: "100%" }}>{children}</p>}
                            placeholder='Écrire une description'
                            allowedFeatures={[
                                types.RichTextFeatures.Bold,
                                types.RichTextFeatures.Highlight,
                                types.RichTextFeatures.Link,
                            ]}
                        />
                        <ul
                            className={classNames(
                                'mt-10 space-y-4 text-base leading-7 list-none',
                                textColors.GRAY_600
                            )}
                        >
                            <div className="color-red">
                                <Image
                                    propName="iconPlace"
                                    source={iconPlace}
                                    alt="Fallback alt tag"
                                    maxWidth={30}
                                />
                                <div>
                                    <Text
                                        propName="address"
                                        placeholder="address..."
                                        multiline={true}
                                        renderBlock={(props) => (
                                            <span
                                                className="block min-w-[70px]"
                                                {...props.attributes}
                                            >
                                                {props.children}
                                            </span>
                                        )}
                                    />
                                </div>
                            </div>
                            <div>
                                <Link
                                    className="color-red"
                                    href={`tel:${typeof phoneNumber === 'string'
                                        ? phoneNumber.replace(' ', '')
                                        : Plain.serialize(phoneNumber).replace(/ /g, '')
                                        }`}
                                >
                                    <Image
                                        propName="iconNumber"
                                        source={iconNumber}
                                        alt="Fallback alt tag"
                                        maxWidth={30}
                                    />
                                    <Text
                                        propName="iconeNumber"
                                        placeholder="IconNumber"
                                        renderBlock={({ children }) => <span>{children}</span>}
                                    />
                                </Link>
                            </div>
                            <div>
                                <Link
                                    className="color-red hover:-translate-y-px transition-all ease-out duration-150"
                                    href={`mailto:${typeof email === 'string' ? email : Plain.serialize(email)
                                        }`}
                                >
                                    <Image
                                        propName="IconEmail"
                                        source={iconEmail}
                                        alt="Fallback alt tag"
                                        maxWidth={30}
                                    />
                                    <Text
                                        propName="email"
                                        placeholder="Email"
                                        renderBlock={({ children }) => <span>{children}</span>}
                                    />
                                </Link>
                            </div>
                        </ul>
                    </div>
                    <div className="form-content">
                        <Repeater propName="form" />
                    </div>
                </div>
            </Container>
        </Section>
    )
}

ContactsForm.schema = {
    name: 'Formulaire de contact',
    label: 'Formulaire de contact',
    previewImageUrl: `/bricks-preview-images/contacts-with-form.png`,
    getDefaultProps: () => ({
        ...sectionDefaults,
        address: '130 Rue Achard, 33300 Bordeaux',
        phoneNumber: '06 35 52 50 10',
        email: 'hello@bicycompost.fr',
        title: 'Nous contacter',
        subtitle:
            'Rejoignez notre mouvement zéro déchets',
        form: [
            {
                buttonPosition: 'justify-end',
                paddingTop: '0',
                paddingBottom: '0',
                width: 'full',
                'form-elements': [
                    {
                        type: blockNames.FormInput,
                        props: {
                            fieldName: 'firstname',
                            isRequired: true,
                            inputType: 'text',
                            columns: '1',
                            label: 'Prénom',
                            requiredError: 'Entrer votre préom',
                            pattern: '',
                            patternError: '',
                        },
                    },
                    {
                        type: blockNames.FormInput,
                        props: {
                            fieldName: 'lastname',
                            isRequired: true,
                            inputType: 'text',
                            columns: '1',
                            label: 'Nom de famille',
                            requiredError: 'Entrer votre nom de famille',
                            pattern: '',
                            patternError: '',
                        },
                    },
                    {
                        type: blockNames.FormInput,
                        props: {
                            fieldName: 'email',
                            isRequired: true,
                            inputType: 'email',
                            columns: '2',
                            label: 'E-mail',
                            requiredError: 'Entrer votre nom Email',
                            pattern: '',
                            patternError: '',
                        },
                    },
                    {
                        type: blockNames.FormInput,
                        props: {
                            fieldName: 'company',
                            isRequired: false,
                            inputType: 'text',
                            columns: '2',
                            label: 'Société',
                            requiredError: '',
                            pattern: '',
                            patternError: '',
                        },
                    },
                    {
                        type: blockNames.FormTextArea,
                        props: {
                            fieldName: 'message',
                            isRequired: false,
                            columns: '2',
                            label: 'Message',
                            requiredError: '',
                            pattern: '',
                            patternError: '',
                        },
                    },
                    {
                        type: blockNames.FormCheckbox,
                        props: {
                            fieldName: 'privacy',
                            isRequired: true,
                            columns: '2',
                            label: `J'accepte le traitement de mes données`,
                            requiredError: 'Accepter le traitement de mes données',
                            pattern: '',
                            patternError: '',
                        },
                    },
                ],
                'form-buttons': [
                    {
                        type: 'button',
                        buttonType: 'submit',
                        buttonColor: buttonColors.SKY.value,
                        text: 'Envoyer',
                        variant: 'solid',
                    },
                ],
            },
        ],
    }),
    sideEditProps: [backgroundSideGroup, paddingBordersSideGroup],
    repeaterItems: [
        {
            name: 'form',
            itemType: blockNames.FormBuilder,
            itemLabel: 'form',
            min: 1,
            max: 1,
        },
    ],
}

export default ContactsForm
