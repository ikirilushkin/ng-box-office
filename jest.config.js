module.exports = {
  rootDir: '.',
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        require.resolve('jest-preset-angular/InlineHtmlStripStylesTransformer')
      ]
    }
  },
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  testEnvironment: 'jest-environment-jsdom-thirteen',
  testMatch: ['<rootDir>/**/*.spec.ts'],
  testEnvironment: 'jest-environment-jsdom-thirteen',
  moduleNameMapper: {
    '^@bo/(.*)': '<rootDir>/src/app/$1'
  },
  snapshotSerializers: [
    'jest-preset-angular/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
