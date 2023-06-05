// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential",
        'prettier',
        'plugin:prettier/recommended',
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
        // 禁止使用 var
    'no-var': 'error',
         // 优先使用 interface 而不是 type
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/no-explicit-any': 'off', // 可以使用 any 类型
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // 解决使用 require() Require statement not part of import statement. 的问题
        '@typescript-eslint/no-var-requires': 0,
        // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-types.md
        '@typescript-eslint/ban-types': [
        'error',
        {
            types: {
            // add a custom message to help explain why not to use it
            Foo: "Don't use Foo because it is unsafe",

            // add a custom message, AND tell the plugin how to fix it
            String: {
                message: 'Use string instead',
                fixWith: 'string',
            },

            '{}': {
                message: 'Use object instead',
                fixWith: 'object',
            },
            },
        },
        ],
        // 禁止出现未使用的变量
        '@typescript-eslint/no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
        ],
        'vue/html-indent': 'off',
        // 关闭此规则 使用 prettier 的格式化规则，
        'vue/max-attributes-per-line': ['off'],
        // vue3.2.25之后为props使用解耦赋值语法，删除警告
        'vue/no-setup-props-destructure': 'off',
        // 优先使用驼峰，element 组件除外
        'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        {
            ignores: ['/^el-/', '/^router-/'],
            registeredComponentsOnly: false,
        },
        ],
        // 强制使用驼峰
        camelcase: ['error', { properties: 'always' }],
        // 优先使用 const
        'prefer-const': [
        'error',
        {
            destructuring: 'any',
            ignoreReadBeforeAssign: false,
        },
        ],
    }
}
