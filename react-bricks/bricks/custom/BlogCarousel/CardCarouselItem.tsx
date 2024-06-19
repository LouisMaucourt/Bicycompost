import React from 'react';
import { types, Text, RichText, Image, useAdminContext } from 'react-bricks/frontend';
import blockNames from '../../react-bricks-ui/blockNames';

interface BlogCarouselItemProps {
  adaptAspectRatio: boolean;
  slidesToShow: number;
  titleName: types.TextValue;
  date: types.TextValue;
  description: types.TextValue;
  image: types.IImageSource;
}

const BlogCarouselItem: types.Brick<BlogCarouselItemProps> = ({
  titleName,
  date,
  description,
  image,
}) => {
  const { isAdmin } = useAdminContext();

  return (
    <div className={`${isAdmin && 'p-6 m-2 hover:bg-gray-100'}`}>
      <div className="card-item-green">
        <Text
          propName="titleName"
          value={titleName}
          placeholder="Type a name..."
          renderBlock={({ children }) => (
            <h4 className="small-title text-white">{children}</h4>
          )}
        />
      </div>
    </div>
  );
};

BlogCarouselItem.schema = {
  name: blockNames.BlogCarouselItem,
  label: 'Blog Carousel Item',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    titleName: 'Default Title',
  }),
};

export default BlogCarouselItem;
