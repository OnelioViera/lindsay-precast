import type { GlobalConfig } from 'payload'

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Home Page',
  fields: [
    {
      name: 'nav',
      type: 'group',
      label: 'Navigation',
      fields: [
        {
          name: 'logo',
          type: 'text',
          required: true,
          defaultValue: 'Logo',
        },
        {
          name: 'links',
          type: 'array',
          label: 'Nav Links',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'href',
              type: 'text',
              required: true,
            },
          ],
          defaultValue: [
            { label: 'Features', href: '#features' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
          ],
        },
      ],
    },
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Build Something Amazing',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          defaultValue: 'A simple, modern landing page built with Next.js and Tailwind CSS. Start building your next project today.',
        },
        {
          name: 'primaryButton',
          type: 'group',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              defaultValue: 'Get Started',
            },
            {
              name: 'href',
              type: 'text',
              required: true,
              defaultValue: '#contact',
            },
          ],
        },
        {
          name: 'secondaryButton',
          type: 'group',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              defaultValue: 'Learn More',
            },
            {
              name: 'href',
              type: 'text',
              required: true,
              defaultValue: '#features',
            },
          ],
        },
      ],
    },
    {
      name: 'features',
      type: 'group',
      label: 'Features Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Features',
        },
        {
          name: 'items',
          type: 'array',
          label: 'Feature Items',
          maxRows: 6,
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
          ],
          defaultValue: [
            { title: 'Fast Performance', description: 'Built with Next.js for optimal loading speeds and SEO.' },
            { title: 'Modern Design', description: 'Clean and responsive design with Tailwind CSS.' },
            { title: 'Easy to Customize', description: "Simple structure that's easy to modify and extend." },
          ],
        },
      ],
    },
    {
      name: 'about',
      type: 'group',
      label: 'About Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'About Us',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          defaultValue: 'We create modern web experiences that help businesses grow. Our focus is on performance, accessibility, and user experience.',
        },
      ],
    },
    {
      name: 'contact',
      type: 'group',
      label: 'Contact Section',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'Get in Touch',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          defaultValue: 'Ready to start your project? Contact us today.',
        },
        {
          name: 'buttonLabel',
          type: 'text',
          required: true,
          defaultValue: 'Contact Us',
        },
        {
          name: 'email',
          type: 'email',
          required: true,
          defaultValue: 'hello@example.com',
        },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      label: 'Footer',
      fields: [
        {
          name: 'copyright',
          type: 'text',
          required: true,
          defaultValue: '2026 Your Company. All rights reserved.',
        },
      ],
    },
  ],
}
