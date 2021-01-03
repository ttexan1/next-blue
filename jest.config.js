module.exports = {
  verbose: true,
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  transform: { '^.+\\.tsx?$': 'babel-jest' },
  testRegex: [/\.*.test.tsx?$/],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>', '<rootDir>/src'],
};
