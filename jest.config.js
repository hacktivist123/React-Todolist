module.exports = {
  clearMocks: true,

  moduleFileExtensions: ['js', 'json', 'jsx'],

  setupFiles: ['<rootDir>/enzyme.config.js'],

  testEnvironment: 'jsdom',

  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],

  testURL: 'http://localhost',

  transformIgnorePatterns: ['<rootDir>/node_modules/enzyme'],

  verbose: true,

  transform: {
    '.+\\.(css|styl|less|sass|scss)$':
      '<rootDir>/node_modules/jest-css-modules-transform',
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },

  snapshotSerializers: ['enzyme-to-json/serializer'],

  modulePathIgnorePatterns: []
};