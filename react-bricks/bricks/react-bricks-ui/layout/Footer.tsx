import React from 'react'
import { RichText, Image, Repeater, types, Link } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import { bgColors, textColors } from '../colors'
import {
  LayoutProps,
  backgroundSideGroup,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../LayoutSideProps'
import { logos } from '../shared/defaultImages'
import Container from '../shared/components/Container'
import Section from '../shared/components/Section'

interface FooterProps extends LayoutProps {
  siteUrl: string
}

const Footer: types.Brick<FooterProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  siteUrl,
}) => {
  return (
    <footer>
      <Section
        backgroundColor={backgroundColor}
        borderTop={borderTop}
        borderBottom={borderBottom}
      >
        <Container
          paddingTop={paddingTop}
          paddingBottom={paddingBottom}
          className="flex justify-between flex-wrap"
        >
          <div className="w-full mb-12 lg:w-auto lg:mb-0 lg:mr-8">
            <Link href={siteUrl} className="block mb-4">
              <Image
                propName="logo"
                alt="Logo"
                maxWidth={300}
                imageClassName="w-48 h-7 object-contain object-left"
              />
            </Link>
          </div>
          <Repeater propName="columns" />
        </Container>
      </Section>
    </footer>
  )
}

Footer.schema = {
  name: blockNames.Footer,
  label: 'Footer',
  category: 'layout',
  tags: ['footer'],
  previewImageUrl: `/bricks-preview-images/${blockNames.Footer}.png`,
  repeaterItems: [
    {
      name: 'columns',
      itemType: blockNames.FooterColumn,
      max: 4,
    },
  ],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    ...sectionDefaults,
    backgroundColor: bgColors.LIGHT_GRAY.value,
    borderTop: 'full',
    logo: logos.REACT_BRICKS,
    siteUrl: '',
    columns: [
      {
        title: 'Company',
        links: [
          {
            linkText: 'About us',
            linkPath: '/',
          },
          {
            linkText: 'Why React Bricks?',
            linkPath: '/',
          },
          {
            linkText: 'Terms of service',
            linkPath: '/',
          },
          {
            linkText: 'Privacy',
            linkPath: '/',
          },
        ],
      },
      {
        title: 'Features',
        links: [
          {
            linkText: 'Visual editing',
            linkPath: '/',
          },
          {
            linkText: 'React components',
            linkPath: '/',
          },
          {
            linkText: 'Enterprise-ready',
            linkPath: '/',
          },
          {
            linkText: 'Roadmap',
            linkPath: '/',
          },
        ],
      },
      {
        title: 'Use cases',
        links: [
          {
            linkText: 'Content editors',
            linkPath: '/',
          },
          {
            linkText: 'Developers',
            linkPath: '/',
          },
          {
            linkText: 'Enterprises',
            linkPath: '/',
          },
        ],
      },
      {
        title: 'Learn',
        links: [
          {
            linkText: 'Tutorial',
            linkPath: '/',
          },
          {
            linkText: 'Documentation',
            linkPath: '/',
          },
          {
            linkText: 'Videos',
            linkPath: '/',
          },
          {
            linkText: 'Blog',
            linkPath: '/',
          },
        ],
      },
    ],
  }),

  // Sidebar Edit controls for props
  sideEditProps: [neutralBackgroundSideGroup, paddingBordersSideGroup, backgroundSideGroup],
}

export default Footer
