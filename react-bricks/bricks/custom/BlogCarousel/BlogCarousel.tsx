import React, { useEffect, useState } from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import Slider from 'react-slick'

import Section from '../../react-bricks-ui/shared/components/Section'
import blockNames from '../../react-bricks-ui/blockNames'
import CarouselStyles from './CarouselStyles'
import {
  containerWidthSideGroupWithFull,
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../react-bricks-ui/LayoutSideProps'
import { photos } from '../../react-bricks-ui/shared/defaultImages'
import BlogCarouselItem from './BlogCarouselItem'

// @ts-ignore
const SliderComponent = !!Slider.default ? Slider.default : Slider

interface ImageCarouselProps extends LayoutProps {
  slidesToShow: string
  slidesToScroll: string
  adaptAspectRatio: boolean
  autoplay: boolean
  speed: string
  className: string
  gap: string
  images: {
    titleName: types.TextValue
    date: types.TextValue
    description: types.TextValue
    image: types.IImageSource
  }[]
}

const CarouselBrick: types.Brick<ImageCarouselProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  slidesToShow,
  slidesToScroll,
  adaptAspectRatio,
  autoplay,
  speed,
  gap,
}) => {
  const settings = {
    dots: true,
    arrows: true, // Afficher les flèches de navigation
    infinite: true,
    draggable: true,
    autoplay: !!autoplay,
    autoplaySpeed: speed ? parseInt(speed) * 1000 : 3000,
    touchThreshold: 1000,
    slidesToShow: slidesToShow ? parseInt(slidesToShow) : 1,
    slidesToScroll: slidesToScroll ? parseInt(slidesToScroll) : 1,
    accessibility: true,
  }

  const repeaterElement = Repeater({
    propName: 'images',
    itemProps: {
      adaptAspectRatio,
      slidesToShow: slidesToShow ? parseInt(slidesToShow) : 1,
    },
  })
  const [hasMount, setHasMount] = useState(false)
  useEffect(() => {
    setHasMount(true)
  }, [])

  if (!hasMount) {
    // Client only
    return null
  }

  return (
    <div style={{ paddingBottom: "100px" }} className='container-content'>
      <CarouselStyles />
      <style>{`
          .slick-track {
            display: flex;
            gap: ${gap};
          }
          /* Stylisation des flèches */
          .slick-prev,
          .slick-next {
            font-size: 0px;
            line-height: 1;
            color: #000;
            z-index: 1; 
            background-color: #CD4D13;
    border-radius: 50%;
    transition :all 0.5s ease-in-out;
          }
              .slick-prev:hover,
          .slick-next:hover {
            background-color: #EB6428;
          }
          .slick-prev {
            left: -50px; /* Position de la flèche précédente */
          }
          .slick-next {
            right: -50px; /* Position de la flèche suivante */
          }
        `}</style>

      <SliderComponent {...settings}>
        {/* @ts-ignore */}
        {repeaterElement?.props?.children?.map((child, index) => {
          return (
            <div key={index} className="p-0 overflow-hidden">
              <BlogCarouselItem adaptAspectRatio={false} slidesToShow={0} titleName={''} date={''} description={''} image={undefined}></BlogCarouselItem>
            </div>
          )
        })}
      </SliderComponent>
    </div>
  )
}

CarouselBrick.schema = {
  name: 'Carousel',
  label: 'Blog Carousel',
  repeaterItems: [
    {
      name: 'images',
      itemType: blockNames.ImageCarouselItem,
      itemLabel: 'Image',
      min: 1,
      max: 5,
    },
  ],
  previewImageUrl: `/bricks-preview-images/${blockNames.ImageCarousel}.png`,
  sideEditProps: [
    {
      groupName: 'Carousel',
      defaultOpen: true,
      props: [
        {
          name: 'slidesToShow',
          label: 'Slides to show',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 1, label: '1' },
              { value: 2, label: '2' },
              { value: 3, label: '3' },
              { value: 4, label: '4' },
              { value: 5, label: '5' },
            ],
          },
        },
        {
          name: 'slidesToScroll',
          label: 'Slides to scroll',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 1, label: '1' },
              { value: 2, label: '2' },
              { value: 3, label: '3' },
              { value: 4, label: '4' },
              { value: 5, label: '5' },
            ],
          },
          validate: (slidesToScroll, props) =>
            slidesToScroll <= props?.slidesToShow ||
            'You cannot scroll more slides than you see',
        },
        {
          name: 'adaptAspectRatio',
          label: 'Adapt aspect ratio',
          type: types.SideEditPropType.Boolean,
          helperText:
            'Adapt aspect ratio to the number of slides to show (4:1 for 1 image, 2:1 for 2 images, square for more)',
        },
        {
          name: 'autoplay',
          label: 'Autoplay',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'speed',
          label: 'Autoplay wait',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 1, label: '1 s' },
              { value: 2, label: '2 s' },
              { value: 3, label: '3 s' },
              { value: 4, label: '4 s' },
              { value: 5, label: '5 s' },
            ],
          },
          show: (props) => !!props.autoplay,
        },
        {
          name: 'gap',
          label: 'Gap',
          show: (props) => props.slidesToShow != '1',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: '0px', label: 'none' },
              { value: '15px', label: 'small' },
              { value: '30px', label: 'medium' },
              { value: '50px', label: 'large' },
            ],
          },
        },
      ],
    },
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroupWithFull,
  ],
  getDefaultProps: () => ({
    ...sectionDefaults,
    slidesToShow: '1',
    slidesToScroll: '1',
    adaptAspectRatio: true,
    autoplay: true,
    speed: '3',
    gap: '30px',
    images: [
      {
        titleName: 'Jean Alliato',
        date: 'xx/xx/xxxx',
        description: 'Lorem ipsum dolor sit amet consectetur. Fringilla pellentesque ut quis in magna. Sit vitae orci dis tincidunt.',
        image: {
          src: 'https://assets.reactbricks.com/I9Q1BfsHQDk_MLe/images/master/pflaXiavTL-DH4t.png',
          alt: 'altText',
        },
      },
      {
        titleName: 'Jean Alliato',
        date: 'xx/xx/xxxx',
        description: 'Lorem ipsum dolor sit amet consectetur. Fringilla pellentesque ut quis in magna. Sit vitae orci dis tincidunt.',
        image: {
          src: 'https://assets.reactbricks.com/I9Q1BfsHQDk_MLe/images/master/pflaXiavTL-DH4t.png',
          alt: 'altText',
        },
      },
    ],
  }),
  stories: [
    {
      id: '4-slides',
      name: 'Card slider',
      previewImageUrl: `/bricks-preview-images/4-slides.png`,
      showAsBrick: true,
      props: {
        slidesToShow: '4',
        slidesToScroll: '1',
        adaptAspectRatio: true,
        autoplay: true,
        speed: '3',
        gap: '30px',
        width: 'medium',
        images: [
          {
            titleName: 'Jean Alliato',
            date: 'xx/xx/xxxx',
            description: 'Lorem ipsum dolor sit amet consectetur. Fringilla pellentesque ut quis in magna. Sit vitae orci dis tincidunt.',
            image: {
              src: 'https://assets.reactbricks.com/I9Q1BfsHQDk_MLe/images/master/pflaXiavTL-DH4t.png',
              alt: 'altText',
            },
          },
          {
            titleName: 'Jean Alliato',
            date: 'xx/xx/xxxx',
            description: 'Lorem ipsum dolor sit amet consectetur. Fringilla pellentesque ut quis in magna. Sit vitae orci dis tincidunt.',
            image: {
              src: 'https://assets.reactbricks.com/I9Q1BfsHQDk_MLe/images/master/pflaXiavTL-DH4t.png',
              alt: 'altText',
            },
          },
          {
            titleName: 'Jean Alliato',
            date: 'xx/xx/xxxx',
            description: 'Lorem ipsum dolor sit amet consectetur. Fringilla pellentesque ut quis in magna. Sit vitae orci dis tincidunt.',
            image: {
              src: 'https://assets.reactbricks.com/I9Q1BfsHQDk_MLe/images/master/pflaXiavTL-DH4t.png',
              alt: 'altText',
            },
          },
          {
            titleName: 'Jean Alliato',
            date: 'xx/xx/xxxx',
            description: 'Lorem ipsum dolor sit amet consectetur. Fringilla pellentesque ut quis in magna. Sit vitae orci dis tincidunt.',
            image: {
              src: 'https://assets.reactbricks.com/I9Q1BfsHQDk_MLe/images/master/pflaXiavTL-DH4t.png',
              alt: 'altText',
            },
          },
          {
            titleName: 'Jean Alliato',
            date: 'xx/xx/xxxx',
            description: 'Lorem ipsum dolor sit amet consectetur. Fringilla pellentesque ut quis in magna. Sit vitae orci dis tincidunt.',
            image: {
              src: 'https://assets.reactbricks.com/I9Q1BfsHQDk_MLe/images/master/pflaXiavTL-DH4t.png',
              alt: 'altText',
            },
          },
        ],
      },
    },
  ],
}

export default CarouselBrick
