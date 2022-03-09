module.exports = {
  // parser: 'babel-eslint',
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    // "eslint:recommended",
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: '12',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'eslint-plugin-import',
  ],
  rules: {
    'react/display-name': 'off',
    'no-bitwise': 'off',
    'import/no-cycle': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.js',
      },
    },
    react: {
      version: 'detect',
    },
  },
};

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//     es6: true,
//     jest: true,
//   },
//   extends: [
//     'plugin:react/recommended',
//     'airbnb',
//   ],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 12,
//     sourceType: 'module',
//   },
//   plugins: [
//     'react',
//     '@typescript-eslint',
//     'react-hooks',
//     'eslint-plugin-import',
//   ],
//   rules: {
//     'no-bitwise': 'off',
//     'import/no-cycle': 'off',
//   },
//   settings: {
//     'import/resolver': {
//       webpack: {
//         config: './webpack.config.js',
//       },
//     },
//     react: {
//       version: 'detect',
//     },
//   },
// };
