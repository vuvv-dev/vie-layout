import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  coverageDirectory: './coverage',
  transform: {
    "^.+\\.tsx?$": "ts-jest", 
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default config;
