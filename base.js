/**
 * Combine all configs without ReactJS config
 */

module.exports = {
	'extends': ['eslint:recommended'].concat([
		'./rules/common',
		'./rules/es6',
		'./rules/node'
	].map(require.resolve)),
	'parser':        'babel-eslint',
	'parserOptions': {
		'ecmaVersion':  6,
		'sourceType':   'module',
		'ecmaFeatures': {
			'impliedStrict':                true,
			'experimentalObjectRestSpread': true
		}
	},
	'rules': {}
};
