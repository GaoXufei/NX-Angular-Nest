module.exports = {
  name: 'gao',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/gao',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
