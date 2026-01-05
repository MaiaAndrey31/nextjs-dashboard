module.exports = {
  rules: {
    // Ignora at-rules do Tailwind para evitar 'Unknown at rule @tailwind'
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer',
        ],
      },
    ],
  },
}
