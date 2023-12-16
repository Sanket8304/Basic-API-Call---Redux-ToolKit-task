module.exports = {
	root: true,
	extends: ['@react-native-community', 'prettier'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
			rules: {
				'@typescript-eslint/no-shadow': ['error'],
				'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
				'no-shadow': 'off',
				'no-undef': 'off',
				'indent': ['error', 'tab', { 'SwitchCase': 1 }],
				'no-trailing-spaces': 'error',
				'quotes': [2, 'double', { 'avoidEscape': true }],
				'comma-dangle': ['error', {
					'arrays': 'never',
					'objects': 'never',
					'imports': 'never',
					'exports': 'never',
					'functions': 'never'
				}],
				'semi': ['error', 'always'],
				'no-mixed-spaces-and-tabs': 'error',
				'key-spacing': ['error', { 'afterColon': true }],
				'comma-spacing': ['error', { 'before': false, 'after': true }],
				'react-hooks/exhaustive-deps': 'off'
			}
		}
	]
};
