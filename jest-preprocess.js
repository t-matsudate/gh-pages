const babelOptions = {
  presets: [
    "babel-preset-gatsby",
    "@babel/preset-typescript"
  ],
  plugins: [
    [
      "styled-jsx/babel",
      {
        "plugins": [
          "styled-jsx-plugin-sass"
        ]
      }
    ]
  ]
}

module.exports = require("babel-jest").createTransformer(babelOptions)
