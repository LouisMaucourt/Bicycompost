import React, { useState } from 'react';
import ProductDescription from './ProductDescription';
import ProductDescription2 from './ProductDescription2';

const PrestationPage = ({ title }) => {
    const [selectedButton, setSelectedButton] = useState(1);

    const handleClick = (buttonNumber) => {
        setSelectedButton(buttonNumber);
    };

    return (
        <div>
            <div className="flex-center">
                <button onClick={() => handleClick(1)} className={selectedButton === 1 ? 'button-orange width-250' : 'button-orange_border width-250'}>Bio-seau de 10 L</button>
                <button onClick={() => handleClick(2)} className={selectedButton === 2 ? 'button-orange width-250' : 'button-orange_border width-250'}>Bio-seau de 22 L</button>
                <button onClick={() => handleClick(3)} className={selectedButton === 3 ? 'button-orange width-250' : 'button-orange_border width-250'}>Bio-seau de 120 L</button>
            </div>
            {selectedButton === 1 && <ProductDescription propNamePrefix="product1" />}
            {selectedButton === 2 && <ProductDescription propNamePrefix="product2" />}
            {selectedButton === 3 && <ProductDescription propNamePrefix="product3" />}
        </div>
    );
};

PrestationPage.schema = {
    name: 'furniturePage',
    label: 'furniturePage',
    getDefaultProps: () => ({
        title: 'Thick as a brick',
    }),
    sideEditProps: [],
};

export default PrestationPage;
