module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": [0],
  },
  "env": {
    "jest": true,
    "browser": true,
  }
};
