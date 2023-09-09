module.exports = {
  extends: [
    './node_modules/@justoss/code-style/eslint-config',
    './node_modules/@justoss/code-style/eslint-config-typescript',
    './node_modules/@justoss/code-style/eslint-config-react',
    'next/core-web-vitals',
  ],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'new-cap': 'off',
    'react-perf/jsx-no-new-object-as-prop': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        tsconfigRootDir: '.',
        project: ['./tsconfig.json'],
      },
    },
    {
      files: ['app/**/*'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
};
