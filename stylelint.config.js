module.exports = {
  plugins: [
    'stylelint-scss'
  ],
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "layer",
          "mixin"
        ]
      }
    ],
    'scss/at-rule-no-unknown': [
      true,
      {
      ignoreAtRules: [
        "tailwind",
        "apply",
        "variants",
        "responsive",
        "screen",
        "layer",
        "mixin"
      ]
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export', 'global']
      }
    ],
    "declaration-block-trailing-semicolon": null,
    "no-descending-specificity": null,
  }
}
