import React, { useState } from 'react';
import { types, Text } from 'react-bricks/frontend';
import ProductDescription from './ProductDescription';

const PrestationPage: types.Brick<PrestationPageProps> = ({ title }) => {
    const [selectedButton, setSelectedButton] = useState(1);

    const handleClick = (buttonNumber: number) => {
        setSelectedButton(buttonNumber);
    };

    return (
        <div>
            <button onClick={() => handleClick(1)} className={selectedButton === 1 ? 'selected' : ''}>Button 1</button>
            <button onClick={() => handleClick(2)} className={selectedButton === 2 ? 'selected' : ''}>Button 2</button>
            <button onClick={() => handleClick(3)} className={selectedButton === 3 ? 'selected' : ''}>Button 3</button>

            {selectedButton === 1 && <ProductDescription title="Description 1" />}
            {selectedButton === 2 && <ProductDescription title="Description 2" />}
            {selectedButton === 3 && <ProductDescription title="Description 3" />}
        </div>
    );
};

PrestationPage.schema = {
    name: 'prestationpage',
    label: 'PrestationPage',
    getDefaultProps: () => ({
        title: 'Thick as a brick',
    }),
    sideEditProps: [],
};

export default PrestationPage;
