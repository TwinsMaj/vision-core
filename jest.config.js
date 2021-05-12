module.exports = {
	verbose: true,
	preset: 'ts-jest',
	roots: ['<rootDir>/src'],
	collectCoverage: true,
	coverageDirectory: '<rootDir>/coverage',
	coverageReporters: ['clover', 'html', 'text', 'lcov'],
	testEnvironment: 'node',
};
