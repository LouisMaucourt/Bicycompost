import React from 'react';
import { Repeater, Text, Link, types, Image, RichText } from 'react-bricks/frontend';
import MultiStepForm from './MultiStepForm';
import blockNames from '../../react-bricks-ui/blockNames';
import classNames from 'classnames';
import { buttonColors } from '../../react-bricks-ui/colors';

interface PageMultiStepProps {
    title1: types.TextValue;
    title2: types.TextValue;
    phoneNumber: string;
    email: string;
    iconPlace: types.IImageSource;
    iconNumber: types.IImageSource;
    iconEmail: types.IImageSource;
    description: types.RichTextFeatures;
}

const PageMultiStep: types.Brick<PageMultiStepProps> = ({
    title1,
    title2,
    phoneNumber,
    email,
    iconPlace,
    iconNumber,
    iconEmail,
    description,
}) => {
    return (
        <section className='container-content'>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="pb-12 lg:pb-20 sm:text-left lg:pr-8 pr-5">
                    <Text
                        propName="tile1"
                        placeholder="tile1"
                        value={title1}
                        renderBlock={({ children }) => <h2>{children}</h2>}
                    />
                    <Text
                        propName="tile2"
                        placeholder="tile2"
                        value={title2}
                        renderBlock={({ children }) => <h5>{children}</h5>}
                    />
                    <RichText
                        propName="description"
                        value={description}
                        renderBlock={({ children }) => <p style={{ width: "100%" }}>{children}</p>}
                        placeholder="Écrire une description"
                        allowedFeatures={[
                            types.RichTextFeatures.Bold,
                            types.RichTextFeatures.Highlight,
                            types.RichTextFeatures.Link,
                        ]}
                    />
                    <ul
                        className={classNames(
                            'mt-10 space-y-4 text-base leading-7 list-none',
                            'text-gray-600'
                        )}
                    >
                        <li className="color-red">
                            <Image
                                propName="iconPlace"
                                source={iconPlace}
                                alt="Fallback alt tag"
                                maxWidth={30}
                            />
                            <Text
                                propName="address"
                                placeholder="address..."
                                multiline={true}
                                renderBlock={(props) => (
                                    <span className="block min-w-[70px]" {...props.attributes}>
                                        {props.children}
                                    </span>
                                )}
                            />
                        </li>
                        <li>
                            <Link
                                className="color-red"
                                href={`tel:${typeof phoneNumber === 'string' ? phoneNumber.replace(' ', '') : phoneNumber}`}
                            >
                                <Image
                                    propName="iconNumber"
                                    source={iconNumber}
                                    alt="Fallback alt tag"
                                    maxWidth={30}
                                />
                                <Text
                                    propName="Number"
                                    placeholder="Number"
                                    renderBlock={({ children }) => <span>{children}</span>}
                                />
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="color-red hover:-translate-y-px transition-all ease-out duration-150"
                                href={`mailto:${typeof email === 'string' ? email : email}`}
                            >
                                <Image
                                    propName="iconEmail"
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
                        </li>
                    </ul>
                </div>
                <div className="form-content" style={{ padding: '0px' }}>
                    <MultiStepForm showStepNumber={true} />
                    <Repeater propName="form" />
                </div>
            </div>
        </section>
    );
};

PageMultiStep.schema = {
    // Unique brick name
    name: 'pagemultistep',
    label: 'Page Multi Step',

    // Defaults when a new brick is added
    getDefaultProps: () => ({
        address: '130 Rue Achard, 33300 Bordeaux',
        phoneNumber: '06 35 52 50 10',
        email: 'hello@bicycompost.fr',
        title: 'Nous contacter',
        subtitle: 'Rejoignez notre mouvement zéro déchets',
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
                            requiredError: 'Entrer votre prénom',
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
                            requiredError: 'Entrer votre email',
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

    // Sidebar Edit controls for props
    sideEditProps: [],
};

export default PageMultiStep;
