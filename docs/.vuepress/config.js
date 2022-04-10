module.exports = {
    // site config
    lang: 'en-US',
    title: 'Laravel Pipeline',
    description: 'Documentation for the Laravel Pipeline package by SlashEquip.',

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
