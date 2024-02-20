/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/lib/Components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
        name: '@storybook/addon-styling-webpack',
        options: {
          rules: [
            {
              test: /\.scss$/,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ]},
          ],
        },
      },
  ],
  framework: {
    name: "@storybook/html-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
