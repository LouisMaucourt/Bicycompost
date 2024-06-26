import React from 'react'
import { types, Text, RichText, Image, useAdminContext } from 'react-bricks/frontend'
import blockNames from '../../blockNames'

interface ImageCarouselItemProps {
  adaptAspectRatio: boolean
  slidesToShow: number
  titleName: types.TextValue
  date: types.TextValue
  description: types.TextValue
  image: types.IImageSource
}

const ImageCarouselItem: types.Brick<ImageCarouselItemProps> = ({
  adaptAspectRatio,
  slidesToShow,
  titleName,
  date,
  description,
  image
}) => {
  let aspectRatioProp = {}

  if (adaptAspectRatio) {
    if (slidesToShow === 1) {
      aspectRatioProp = { aspectRatio: 4 }
    }
    if (slidesToShow === 2) {
      aspectRatioProp = { aspectRatio: 2 }
    }
    if (slidesToShow > 2) {
      aspectRatioProp = { aspectRatio: 1 }
    }
  }

  const { isAdmin } = useAdminContext()

  return (
    <div className={`${isAdmin && 'p-6 m-2 hover:bg-gray-100'}`}>
      <div className='card-item-green'>
        <Text
          propName="titleName"
          value={titleName}
          placeholder="Type a name..."
          renderBlock={({ children }) => (<h4 className='small-title'>{children}</h4>)}
        />
        <Text
          propName="date"
          value={date}
          placeholder="Type a date..."
          renderBlock={({ children }) => (<p className="small">{children}</p>)}
        />
        <RichText
          propName='description'
          value={description}
          renderBlock={({ children }) => <p style={{ padding: "20px 0px" }} className='padding30'>{children}</p>}
          placeholder='Write a description'
          allowedFeatures={[
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Highlight,
            types.RichTextFeatures.Link,
          ]}
        />
        {image && (
          <Image
            propName="image"
            source={image}
            alt={image.alt || "Fallback alt tag"}
            maxWidth={10}
            {...aspectRatioProp}
          />
        )}
      </div>
    </div>
  )
}

ImageCarouselItem.schema = {
  name: blockNames.ImageCarouselItem,
  label: 'Image Carousel Item',
  category: 'hero sections',
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

export default ImageCarouselItem
