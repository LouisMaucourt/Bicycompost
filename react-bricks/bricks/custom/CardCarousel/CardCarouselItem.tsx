import React from 'react'
import { types, Text, RichText, Image, useAdminContext } from 'react-bricks/frontend'
import blockNames from '../../react-bricks-ui/blockNames'

interface ImageCarouselItemProps {
  adaptAspectRatio: boolean
  slidesToShow: number
  titleName: types.TextValue
  date: types.TextValue
  description: types.TextValue
  image: types.IImageSource
}

const ImageCarouselItem: types.Brick<ImageCarouselItemProps> = ({
  titleName,
  date,
  description,
  image
}) => {
  const { isAdmin } = useAdminContext()

  return (
    <div className={`${isAdmin && 'p-6 m-2 hover:bg-gray-100'}`}>
      <div className='card-item-green'>
        <Text
          propName="titleName"
          value={titleName}
          placeholder="Type a name..."
          renderBlock={({ children }) => (<h4 className='small-title text-white'>{children}</h4>)}
        />
        <Text
          propName="date"
          value={date}
          placeholder="Type a date..."
          renderBlock={({ children }) => (<p className="small text-white">{children}</p>)}
        />
        <RichText
          propName='description'
          value={description}
          renderBlock={({ children }) => <p style={{ padding: "20px 0px" }} className='padding30 text-white'>{children}</p>}
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
            maxWidth={100}
          />
        )}
      </div>
    </div>
  )
}

ImageCarouselItem.schema = {
  name: blockNames.ImageCarouselItem,
  label: 'Image Carousel Item',
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
