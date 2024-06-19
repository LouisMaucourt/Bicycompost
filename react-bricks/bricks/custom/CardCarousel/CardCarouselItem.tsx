import React from 'react'
import { types, Text, RichText, Image, useAdminContext } from 'react-bricks/frontend'
import blockNames from '../../react-bricks-ui/blockNames'

interface CardCarouselItemProps {
  adaptAspectRatio: boolean
  slidesToShow: number
  titleName: types.TextValue
  date: types.TextValue
  description: types.TextValue
  image: types.IImageSource
}

const CardCarouselItem: types.Brick<CardCarouselItemProps> = ({
  titleName,
  date,
  description,
  image
}) => {
  const { isAdmin } = useAdminContext()

  return (
    <div className={`${isAdmin && 'p-6 m-2 hover:bg-gray-100 container-content'}`}>
      <div className='card-item-beige '>
        <Image
          propName="image"
          source={image}
          alt="Fallback alt tag"
          maxWidth={100}
        />
        <Text
          propName="titleName"
          value={titleName}
          placeholder="Type a name..."
          renderBlock={({ children }) => (<h4 style={{ color: "#CD4D13" }} className='small-title text-white'>{children}</h4>)}
        />
        <Text
          propName="date"
          value={date}
          placeholder="Type a date..."
          renderBlock={({ children }) => (<p style={{}} className="small">{children}</p>)}
        />

      </div>
    </div>
  )
}

CardCarouselItem.schema = {
  name: blockNames.BlogCarouselItem,
  label: 'Blog Carousel Item',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    titleName: 'Default Title',
    date: 'Default Date',
    description: 'Default Description',
    image: {
      src: 'https://images.reactbricks.com/original/8309ea05-d105-4f50-9d54-ba86ebddcfbe.jpg',
      alt: 'altText',
    },
  }),
}

export default CardCarouselItem
