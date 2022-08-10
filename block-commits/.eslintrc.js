module.exports = {
    'env': {
        'browser': false,
        'node': true,
        'commonjs': true,
        'es2021': true,
    },
    'extends': [
        'google',
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
    },
    'rules': {
        'max-len': ['error', {'code': 120}],
        'require-jsdoc': 0,
        'indent': ['error', 4],
    },
};
