module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": [0],
    "react/prop-types": [2, { ignore: [ 'history' ]}],
    "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }],
    "react/destructuring-assignment": [0],
    "import/no-extraneous-dependencies": ["error", 
      {"devDependencies": ["./src/specs/*.js", "**/*.test.js"]}],
    "jsx-a11y/label-has-for": [
      2, {
        "components": [ "label" ],
        "required": {
          "every": [ "id" ]
        }
      }
    ],
    "jsx-a11y/label-has-associated-control": [ 2, {
      "labelAttributes": ["label"],
      "controlComponents": ["Field"],
      "depth": 3,
    }],
    "react/prop-types": ["error", { "ignore": ["fields", "meta"] }],
  },
  "env": {
    "jest": true,
    "browser": true,
  },
  "globals": {
    buildSetup: false,
  }
};
