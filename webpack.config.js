//import
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./js/main.js", //파일을 읽어들이는 시작하는 진입점 설정. ex) parcel index.html
  output: {
    // path: path.resolve(__dirname, "dist"),
    // filename: "main.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/, //css 또는 scss 로 끝나는 파일. 정규표현식
        use: [
          "style-loader", // js에서 해석된 것을 html에 삽입 해줌.
          "css-loader", //js 에서 css를 읽을수 있게함.
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],

  // devServer: {
  //   host: "localhost",
  // },
};
