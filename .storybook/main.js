const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    'storybook-addon-intl/register'
  ],
  // webpackFinal:  async (config) => {
  //   const getFileLoader = (config) => {
  //   const { oneOf = [] } = config.module.rules.find(({ oneOf }) => oneOf);
  //   return oneOf.find(({loader}) => /file-loader/.test(loader));
  //   };
    
  //   const mutateLoaderToMakePathAbsolute = (loader) => {
  //       if(loader && loader.options && loader.options.name) {
  //       loader.options.name = '/' + loader.options.name;
  //       }
  //   };

  //   const fileLoader = getFileLoader(config);
  //   mutateLoaderToMakePathAbsolute(fileLoader);
  //   return config;
  // }
  // "webpackFinal": async (config, { configType }) => {
  //     //styles
  //   //   config.module.rules.push({
  //   //       test: /\.(css)/
  //   //   });
  //   //fonts
  //   config.module.rules.push({
  //       test: /\.(png|woff|woff2|eot|ttf|otf|svg)$/,
  //       use: [
  //           {
  //               loader: 'file-loader',
  //               query: {
  //                   name: '[name].[ext]'
  //               }
  //           }
  //       ],
  //       include: path.resolve(__dirname, '../src/assets/fonts')
  //   });

  //   return config;
  // }
}