import React from 'react';
import { types, Text, RichText, Image, useAdminContext } from 'react-bricks/frontend';
import blockNames from '../../react-bricks-ui/blockNames';

interface BlogCarouselProps {
  adaptAspectRatio: boolean;
  slidesToShow: number;
  titleName: types.TextValue;
  date: types.TextValue;
  description: types.TextValue;
  image: types.IImageSource;
}

const BlogCarousel: types.Brick<BlogCarouselProps> = ({
  titleName,
  date,
  description,
  image,
}) => {
  const { isAdmin } = useAdminContext();

  return (
    <div className={`${isAdmin ? 'p-6 m-2 hover:bg-gray-100' : ''}`}>
      <div className=''>
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

        <Image
          propName="image"
          source={image}
          alt={image.alt || "Fallback alt tag"}
          maxWidth={100}
        />
      </div>
    </div>
  );
}

BlogCarousel.schema = {
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

export default BlogCarousel;
