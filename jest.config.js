module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!**/jest-*',
    '!**/jest.*',
    '!**/bin/**',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/*.test.{js,ts}',
    '!**/*_MOCK_.{js,ts}',
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules'],
  testRegex: '.*\\.test.ts$',
  snapshotSerializers: [],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};
