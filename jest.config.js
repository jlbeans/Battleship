export const moduleFileExtensions = ['js'];
export const moduleDirectories = ['node_modules'];
export const moduleNameMapper = {
	'\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
	'\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
};
