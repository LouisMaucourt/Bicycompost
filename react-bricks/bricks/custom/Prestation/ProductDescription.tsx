import React from 'react';
import { types, Image, RichText, Text } from 'react-bricks/frontend';
import Button from '../button/Button';
import Styles from '../../react-bricks-ui/singleColumnContent/Code/Styles';

interface ProductDescriptionProps {
    title: types.TextValue;
    image: types.IImageSource
    icon: types.IImageSource
    description: types.TextValue
    descriptionIcon: types.TextValue
}

const ProductDescription: types.Brick<ProductDescriptionProps> = ({ title, image, icon, description, descriptionIcon }) => {
    return (
        <div className='background-green'>
            <div className='flexx2 content-container'>

                <Image
                    propName="image"
                    source={image}
                    alt="Fallback alt tag"
                    maxWidth={500}
                />
                <div>
                    <Text
                        propName="title"
                        value={title}
                        placeholder="Type a title..."
                        renderBlock={({ children }) => (<h3 style={{ color: 'white' }}>{children}</h3>)}
                    />
                    <RichText
                        propName='description'
                        value={description}
                        renderBlock={({ children }) => <p style={{ color: "white" }}>{children}</p>}
                        placeholder='Description...'
                        allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                    />
                    <div>
                        <div className='flex-row'>
                            <Image
                                propName="icon"
                                source={icon}
                                alt="Fallback alt tag"
                                maxWidth={30}
                            />
                            <RichText
                                propName='descriptionIcon'
                                value={descriptionIcon}
                                renderBlock={({ children }) => <p style={{ color: "white" }}>{children}</p>}
                                placeholder='Description...'
                                allowedFeatures={[types.RichTextFeatures.Bold, types.RichTextFeatures.Italic]}
                            />
                        </div>
                    </div>

                    <div className='margin-h-30'>
                        <Button propName='button' buttonStyle='button-orange default btn-text-image' buttonText='coucu' buttonPath='/' />
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductDescription.schema = {
    name: 'productdescription',
    label: 'ProductDescription',
    getDefaultProps: () => ({
        title: 'Default Title',
    }),
    sideEditProps: [],
};

export default ProductDescription;
