import React from 'react'
import { Image, types } from 'react-bricks/frontend'
import blockNames from '../../blockNames'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import { photos } from '../../shared/defaultImages'
import {
  backgroundColorsEditProps,
  containerWidthSideGroup,
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'

interface BigImageProps extends LayoutProps {}

const BigImage: types.Brick<BigImageProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <Image propName="image" alt="Image" maxWidth={1200} />
      </Container>
    </Section>
  )
}

BigImage.schema = {
  name: blockNames.BigImage,
  label: 'Image',
  category: 'single column / blog',
  tags: ['blog', 'image', 'single image'],
  previewImageUrl: `/bricks-preview-images/${blockNames.BigImage}.png`,
  getDefaultProps: () => ({
    ...sectionDefaults,
    width: 'small',
    paddingTop: '12',
    paddingBottom: '12',
    image: photos.SEASIDE,
  }),
  sideEditProps: [
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
    backgroundColorsEditProps,
  ],
}

export default BigImage
