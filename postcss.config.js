module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      "postcss-custom-media",
      "postcss-nesting",
      {
        features: {
          "nesting-rules": {
            noIsPseudoSelector: false,
          },
        },
      },
    ],
  ],
};
