module.exports = {
    // site config
    lang: 'en-US',
    title: 'Laravel Pipeline',
    description: 'Documentation for the Laravel Pipeline package by SlashEquip.',
    head: [
        ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'}],
        ['link', {rel: 'icon', 'type': 'image/png', sizes: '32x32', href: '/favicon-32x32.png'}],
        ['link', {rel: 'icon', 'type': 'image/png', sizes: '16x16', href: '/favicon-16x16.png'}],
        ['link', {rel: 'manifest', href: '/site.webmanifest'}],
        ['link', {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5'}],
        ['meta', {name: 'msapplication-TileColor', content: '#ffffff'}],
        ['meta', {name: 'theme-color', content: '#ffffff'}],
    ],

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: '/images/pipe-logo.svg',
      sidebar: [
          {
            text: "Getting Started",
            children: [
                {
                    text: "Introduction",
                    link: "/"
                },
                {
                    text: "Installation",
                    link: "/installation"
                },
                {
                    text: "Basic usage",
                    link: "/basic-usage"
                }
            ],
          },
          {
            text: "Learn with examples",
            collapsible: true,
            children: [
                {
                    text: "Order processing",
                    link: "/examples/order-processing"
                },
            ],
          },
          {
            text: "Pipes",
            link: "/pipes",
            collapsible: true,
            children: [
                {
                    text: "Introduction",
                    link: "/pipes"
                },
                {
                    text: "Anonymous",
                    link: "/pipes/anonymous"
                },
                {
                    text: "Branching",
                    link: "/pipes/branching"
                },
                {
                    text: "Quietly",
                    link: "/pipes/quietly"
                },
                {
                    text: "Teardown",
                    link: "/pipes/teardown"
                },

            ],
          }
      ],
    },
  }
