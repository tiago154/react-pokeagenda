module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!src/types/serviceWorker.ts',
    '!src/react-app-env.d.ts',
    '!src/setupTests.ts',
    '!src/**/style.ts'
  ],
  coverageDirectory: 'coverage',
  setupFiles: ['dotenv/config'],
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.spec.tsx'],
  verbose: true,
  moduleNameMapper: {
    '.+\\.(png|jpg|gif|svg)$': 'identity-obj-proxy'
  }
}
