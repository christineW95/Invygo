module.exports = {
  verbose: true,
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["<rootDir>/__Tests__/**/*.js", "**/?(*.)(spec|test).js?(x)"],
  testPathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/__Tests__/Setup.js",
    "<rootDir>/__Tests__/FileMock.js",
    "<rootDir>/__Tests__/__mocks__",
  ],

  moduleNameMapper: {
    "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__Tests__/FileMock.js",
  },
  setupFiles: ["./node_modules/react-native-gesture-handler/jestSetup.js"],
  setupFilesAfterEnv: [
    "<rootDir>/__Tests__/Setup",
    "./node_modules/react-native-gesture-handler/jestSetup.js",
  ],

  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
  preset: "react-native",
  coverageReporters: ["text", "text-summary", "html"],
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)",
  ],
  collectCoverageFrom: [
    "**/*.{js,jsx,tsx,ts}",
    "!**/index.js",
    "!**/*.styles.ts",
    "!**/node_modules/**",
    "!**/__Tests__/**",
    "!**/coverage/**",
    "!jest.config.js",
    "!ReactotronConfig.js",
    "!.eslintrc.js",
    "!.prettierrc.js",
    "!metro.config.js",
    "!babel.config.js",
    "!App/I18n/**",
    "!App/Themes/**",
    // '!App/Navigation/**',
    // '!App/Redux/Store.js',
    "!react-native.config.js",
    "!.vscode/.react/*.{js,jsx,tsx}",
  ],
  coverageThreshold: {
    global: {
      statements: 95,
    },
  },
};
