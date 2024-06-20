import React from 'react'
import { types, Text, Image } from 'react-bricks/frontend'

interface CardVehiculeProps {
    title: types.TextValue
    imageCardOne: types.IImageSource
    titleCardOne: types.TextValue
    imageCardTwo: types.IImageSource
    titleCardTwo: types.TextValue
    imageCardThree: types.IImageSource
    titleCardThree: types.TextValue
}

const CardVehicule: types.Brick<CardVehiculeProps> = ({ title, imageCardOne, titleCardOne, imageCardTwo, titleCardTwo, imageCardThree, titleCardThree }) => {
    return (
        <div className=' container-content'>
            <Text
                propName="title"
                value={title}
                placeholder="Type a title..."
                renderBlock={({ children }) => (<h3>{children}</h3>)}
            />
            <div className='flexx2'>
                <div className='card-item-beige'>
                    <Image
                        propName="imageCardOne"
                        source={imageCardOne}
                        alt="Fallback alt tag"
                        maxWidth={500}
                    />
                    <Text
                        propName="titleCardOne"
                        value={titleCardOne}
                        placeholder="Type a title..."
                        renderBlock={({ children }) => (<h5 style={{ textAlign: "center" }}>{children}</h5>)}
                    />
                </div>
                <div className='card-item-beige'>
                    <Image
                        propName="imageCardTwo"
                        source={imageCardTwo}
                        alt="Fallback alt tag"
                        maxWidth={500}
                    />
                    <Text
                        propName="titleCardTwo"
                        value={titleCardTwo}
                        placeholder="Type a title..."
                        renderBlock={({ children }) => (<h5 style={{ textAlign: "center" }}>{children}</h5>)}
                    />
                </div>
                <div className='card-item-beige'>
                    <Image
                        propName="imageCardThree"
                        source={imageCardThree}
                        alt="Fallback alt tag"
                        maxWidth={500}
                    />
                    <Text
                        propName="titleCardThree"
                        value={titleCardThree}
                        placeholder="Type a title..."
                        renderBlock={({ children }) => (<h5 style={{ textAlign: "center" }}>{children}</h5>)}
                    />
                </div>
            </div>
        </div>
    )
}

CardVehicule.schema = {
    // Unique brick name
    name: 'cardvehicule',
    label: 'CardVehicule',

    // Defaults when a new brick is added
    getDefaultProps: () => ({
        title: 'Thick as a brick',
    }),

    // Sidebar Edit controls for props
    sideEditProps: [],
}

export default CardVehicule
