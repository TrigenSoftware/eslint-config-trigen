/**
 * Combine all configs
 */

module.exports = {
	'extends': [
		'./base',
		'./rules/commonjs'
	].map(require.resolve)
};
