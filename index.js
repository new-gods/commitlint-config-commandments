module.exports = {
    rules: {
        'header-max-length': [2, 'always', 72],
        'header-min-length': [2, 'always', 1],
        'type-case': [2, 'always', 'pascal-case'],
        'type-enum': [2, 'always', ['Feat', 'Fix', 'Docs', 'Style', 'Refactor', 'Test']],
        'type-empty': [1, 'never'],
        'scope-case': [2, 'always', 'pascal-case'],
        'subject-case': [2, 'always', 'sentence-case'],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'body-leading-blank': [2, 'always'],
        'body-max-line-length': [2, 'always', 72],
        'footer-leading-blank': [1, 'always'],
        'footer-max-line-length': [2, 'always', 72],
    },
};