module.exports = {
  overrides: [
    {
      files: ["/**/*.{ts,tsx}"],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            case: "kebabCase",
          },
        ],
      },
    },
  ],
};
