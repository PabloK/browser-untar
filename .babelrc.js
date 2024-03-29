const presets = [
  "@babel/preset-env"
];
const plugins = [
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-logical-assignment-operators',
  ['@babel/plugin-proposal-optional-chaining', { 'loose': false }],
  ['@babel/plugin-proposal-pipeline-operator', { 'proposal': 'minimal' }],
  ['@babel/plugin-proposal-nullish-coalescing-operator', { 'loose': false }],
  '@babel/plugin-proposal-do-expressions',
  ['transform-require-context']
];

module.exports = { presets, plugins };