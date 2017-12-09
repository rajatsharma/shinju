/* eslint-disable */
const LTree = require('../src/index');

const TestTree = LTree();

test('see for add function add a branch', () => {
  TestTree.add(35, 'rollNo');
  expect(TestTree.getTree()['rollNo']).toBe(35);
});

test('see for addChain function add a branch', () => {
  const NewTestTree = TestTree.addChain(35, 'rollNo').addChain(500023356, 'sapId');
  expect([NewTestTree.getTree()['rollNo'], NewTestTree.getTree()['sapId']]).toEqual([35, 500023356]);
});
