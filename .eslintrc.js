module.exports = {
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [
      1, {
        "extensions": [".js", ".jsx"]
      }
    ],
    "import/no-extraneous-dependencies": [
      2, {
      devDependencies: true
      }
    ],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "class-methods-use-this": "off",
    "no-underscore-dangle": "off",
    "react/prefer-stateless-function": "off",
    "react/no-array-index-key": "off",
    "react/forbid-prop-types": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "max-len": "off",
    "import/prefer-default-export": "off",
    "jsx-a11y/href-no-hash": "off",
  },
};