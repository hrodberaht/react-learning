module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": [0],
    "react/prop-types": [2, { ignore: [ 'history' ]}],
    "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": ["./src/specs/enzyme-configuration.js"]}],
    "import/core-modules": [ enzyme ]
  },
  "env": {
    "jest": true,
    "browser": true,
  }
};
