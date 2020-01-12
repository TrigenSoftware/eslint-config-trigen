/**
 * ReactJS config
 */

const ariaAttributes = [
	'aria-autocomplete',
	'aria-checked',
	'aria-current',
	'aria-disabled',
	'aria-expanded',
	'aria-haspopup',
	'aria-hidden',
	'aria-invalid',
	'aria-label',
	'aria-level',
	'aria-multiline',
	'aria-multiselectable',
	'aria-orientation',
	'aria-pressed',
	'aria-readonly',
	'aria-required',
	'aria-selected',
	'aria-sort',
	'aria-valuemax',
	'aria-valuemin',
	'aria-valuenow',
	'aria-valuetext',
	'aria-live',
	'aria-relevant',
	'aria-atomic',
	'aria-busy',
	'aria-dropeffect',
	'aria-dragged',
	'aria-activedescendant',
	'aria-controls',
	'aria-describedby',
	'aria-flowto',
	'aria-labelledby',
	'aria-owns',
	'aria-posinset',
	'aria-setsize'
];

module.exports = {
	'plugins': [
		'react'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		}
	},
	'settings': {
		'react': {
			'version': 'detect'
		}
	},
	'rules': {
		// React
		'react/boolean-prop-naming':                  'off',
		'react/default-props-match-prop-types':       'error',
		'react/destructuring-assignment':             'error',
		'react/display-name':                         'off',
		'react/forbid-component-props':               'off',
		'react/forbid-elements':                      'off',
		'react/forbid-prop-types':                    'off',
		'react/forbid-foreign-prop-types':            'off',
		'react/no-access-state-in-setstate':          'error',
		'react/no-array-index-key':                   'off',
		'react/no-children-prop':                     'error',
		'react/no-danger':                            'off',
		'react/no-danger-with-children':              'error',
		'react/no-deprecated':                        'error',
		'react/no-did-mount-set-state':               'error',
		'react/no-did-update-set-state':              'error',
		'react/no-direct-mutation-state':             'error',
		'react/no-find-dom-node':                     'error',
		'react/no-is-mounted':                        'error',
		'react/no-multi-comp':                        'off',
		'react/no-redundant-should-component-update': 'error',
		'react/no-render-return-value':               'error',
		'react/no-set-state':                         'off',
		'react/no-typos':                             'error',
		'react/no-string-refs':                       'error',
		'react/no-unescaped-entities':                'error',
		'react/no-unknown-property':                  'error',
		'react/no-unused-prop-types':                 'error',
		'react/no-unused-state':                      'error',
		'react/no-will-update-set-state':             'error',
		'react/prefer-es6-class':                     'error',
		'react/prefer-stateless-function':            'error',
		'react/prop-types':                           ['error', {
			ignore: ariaAttributes
		}],
		'react/react-in-jsx-scope':                   'error',
		'react/require-default-props':                'error',
		'react/require-optimization':                 'off',
		'react/require-render-return':                'error',
		'react/self-closing-comp':                    'error',
		'react/sort-comp':                           ['error', {
			order: [
				'static-methods',
				'type-annotations',
				'lifecycle-before-render',
				'render',
				'lifecycle-after-render',
				'everything-else'
			],
			groups: {
				'lifecycle-before-render': [
					'displayName',
					'propTypes',
					'defaultProps',
					'contextTypes',
					'childContextTypes',
					'state',
					'/.+/',
					'constructor'
				],
				'lifecycle-after-render': [
					'getChildContext',
					'componentWillMount',
					'componentDidMount',
					'componentWillReceiveProps',
					'shouldComponentUpdate',
					'componentWillUpdate',
					'componentDidUpdate',
					'componentWillUnmount'
				]
			}
		}],
		'react/sort-prop-types':                      'off',
		'react/style-prop-object':                    'error',
		'react/void-dom-elements-no-children':        'error',

		// JSX
		'react/jsx-boolean-value':                    'error',
		'react/jsx-closing-bracket-location':         'error',
		'react/jsx-closing-tag-location':             'error',
		'react/jsx-curly-spacing':                    'error',
		'react/jsx-equals-spacing':                   'error',
		'react/jsx-filename-extension':               'off',
		'react/jsx-first-prop-new-line':             ['error', 'multiline'],
		'react/jsx-handler-names':                    'off',
		'react/jsx-indent':                          ['error', 'tab'],
		'react/jsx-indent-props':                    ['error', 'tab'],
		'react/jsx-key':                              'error',
		'react/jsx-max-props-per-line':              ['error', { 'maximum': 3 }],
		'react/jsx-no-bind':                         ['error', { 'allowArrowFunctions': true }],
		'react/jsx-no-comment-textnodes':             'error',
		'react/jsx-no-duplicate-props':               'error',
		'react/jsx-no-literals':                      'off',
		'react/jsx-no-target-blank':                 ['error', { 'enforceDynamicLinks': 'always' }],
		'react/jsx-no-undef':                         'error',
		'react/jsx-curly-brace-presence':            ['error', 'never'],
		'react/jsx-pascal-case':                      'error',
		'react/jsx-sort-props':                       'off',
		'react/jsx-tag-spacing':                     ['error', {
			'closingSlash':      'never',
			'beforeSelfClosing': 'never',
			'afterOpening':      'never'
		}],
		'react/jsx-uses-react':                       'error',
		'react/jsx-uses-vars':                        'error',
		'react/jsx-wrap-multilines':                  'error',
		'react/jsx-props-no-multi-spaces':            'error',
		'react/no-unsafe':                            'error'
	}
};
