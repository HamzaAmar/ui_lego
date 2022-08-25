module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
  },
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: __dirname,
      },
    },
  },
  plugins: ['prettier', 'react-hooks', 'testing-library'],
  env: {
    browser: true,
    node: true,
    // "jest/globals": true,
  },
  rules: {
    // React hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // Typescript
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    // Upgrade from warning to error
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',

    // We use noop functions in many places, for example as default values for props.
    '@typescript-eslint/no-empty-function': 'off',

    // Not worth fixing. Just finish converting everything to TS instead.
    'react/prop-types': 'off',

    // Prop spreading is safe in TS
    'react/jsx-props-no-spreading': 'off',

    'import/extensions': 'off',

    // Disabled to make upgrading easier. TODO(giles): re-enable
    'react/function-component-definition': 'off',
    'react/jsx-fragments': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'no-use-before-define': 'off',
    'arrow-body-style': 'off',
    'react/destructuring-assignment': 'off',
  },
  globals: {
    it: true,
    expect: true,
    describe: true,
    jest: true,
    document: true,
    test: true,
    window: true,
    fetch: true,
    WebSocket: true,
    alert: true,
    URLSearchParams: true,
    defaultProps: true,
    childContextTypes: true,
    contextTypes: true,
    state: true,
    Event: true,
    fail: true,
    afterEach: true,
    beforeEach: true,
    afterAll: true,
    KeyboardEvent: true,
    MouseEvent: true,
    requestAnimationFrame: true,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        // Import plugin is not really needed for TS files, the TS compiler will throw an
        // error for missing imports
        'import/named': 'off',
        'import/export': 'off',

        // PropTypes are not needed for TS files
        'react/require-default-props': 'off',
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        // TypeScript rules don't apply in JS files
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
