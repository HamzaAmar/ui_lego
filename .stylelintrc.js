const { propertyOrdering } = require('stylelint-semantic-groups');

module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  plugins: ['stylelint-order', 'stylelint-color-format'],
  customSyntax: 'postcss-scss',
  rules: {
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'at-rules', // <-- important, `@media` should go before `&:pseudo`
      'rules',
    ],
    'order/properties-order': propertyOrdering,
    'color-format/format': {
      format: 'hsl',
    },
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates'],
      },
    ],
  },
};
