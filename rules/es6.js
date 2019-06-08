/**
 * ECMAScript 6 config
 */

module.exports = {
	'plugins': [
		'import'
	],
	'env': {
		'es6': true
	},
	'parserOptions': {
		'ecmaVersion':  6,
		'sourceType':   'module',
		'ecmaFeatures': {
			'objectLiteralDuplicateProperties': false
		}
	},
	'rules': {
		// Import
		'import/no-unresolved':                'off',
		'import/named':                        'off',
		'import/default':                      'off',
		'import/no-restricted-paths':          'off',
		'import/no-absolute-path':             'error',
		'import/no-dynamic-require':           'error',
		'import/no-internal-modules':          'off',
		'import/no-webpack-loader-syntax':     'error',
		'import/export':                       'error',
		'import/no-named-as-default':          'off',
		'import/no-named-as-default-member':   'off',
		'import/no-deprecated':                'off',
		'import/no-extraneous-dependencies':   'off',
		'import/no-mutable-exports':           'error',
		'import/unambiguous':                  'error',
		'import/no-amd':                       'error',
		'import/first':                        'error',
		'import/exports-last':                 'off',
		'import/no-duplicates':                'error',
		'import/extensions':                   'off',
		'import/order':                       ['error', { 'newlines-between': 'never' }],
		'import/newline-after-import':         'error',
		'import/prefer-default-export':        'off',
		'import/max-dependencies':             'off',
		'import/no-unassigned-import':         'off',
		'import/no-named-default':             'error',
		'import/no-anonymous-default-export': ['error', {
			'allowArray':             true,
			'allowArrowFunction':     false,
			'allowAnonymousClass':    false,
			'allowAnonymousFunction': false,
			'allowLiteral':           false,
			'allowObject':            true
		}],
		'import/group-exports':                'off',

		// Other
		'arrow-body-style':                   ['error', 'as-needed'],
		'arrow-parens':                       ['error', 'as-needed', { 'requireForBlockBody': true }],
		'arrow-spacing':                       'error',
		'generator-star-spacing':             ['error', { 'before': true, 'after': false }],
		'no-confusing-arrow':                 ['error', { 'allowParens': true }],
		// 'no-duplicate-imports':                'error',
		'no-useless-computed-key':             'error',
		'no-useless-constructor':              'error',
		'no-useless-rename':                   'error',
		'no-var':                              'error',
		'object-shorthand':                   ['error', 'always', { 'avoidQuotes': true }],
		'prefer-arrow-callback':              ['error', { 'allowNamedFunctions': true }],
		'prefer-const':                       ['error', {
			'destructuring':          'all',
			'ignoreReadBeforeAssign': false
		}],
		'prefer-reflect':                      'error',
		'prefer-rest-params':                  'error',
		'prefer-spread':                       'error',
		'prefer-template':                     'error',
		'rest-spread-spacing':                ['error', 'never'],
		'template-curly-spacing':              'error',
		'yield-star-spacing':                 ['error', 'before'],
		'space-before-function-paren':        ['error', {
			'anonymous':  'always',
			'named':      'never',
			'asyncArrow': 'always'
		}]
	}
};
