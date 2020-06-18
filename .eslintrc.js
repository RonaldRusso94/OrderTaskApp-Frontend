module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "linebreak-style": 0,
  },
};
