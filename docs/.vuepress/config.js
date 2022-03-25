module.exports = {
    // site config
    lang: 'en-US',
    title: 'Laravel Pipeline',
    description: 'Documentation for the Laravel Pipeline package by SlashEquip.',

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
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
            children: [
                {
                    text: "Order processing",
                    link: "/examples/order-processing"
                },
            ],
          }
      ],
    },
  }
