import React from 'react'
import { types, Text, RichText, Image, useAdminContext } from 'react-bricks/frontend'
import blockNames from '../../react-bricks-ui/blockNames'

interface TextSliderItemProps {
  titleName: types.TextValue
  date: types.TextValue
  description: types.TextValue
  image: types.IImageSource
}

const TextSliderItem: types.Brick<TextSliderItemProps> = ({
  image
}) => {
  const { isAdmin } = useAdminContext()

  return (
    <div className={`${isAdmin && 'p-6 m-2 hover:bg-gray-100'}`}>
      <Image
        propName="image"
        source={image}
        alt="Fallback alt tag"
        maxWidth={500}
      />

    </div>
  )
}

TextSliderItem.schema = {
  name: blockNames.TextSliderItem,
  label: 'Text Slider Item',
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

export default TextSliderItem
