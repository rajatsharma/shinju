/* eslint-disable */
import test from 'ava';

const LTree = require('../build/main').default;

const TestTree = LTree();

test('see for add function add a branch', t => {
  TestTree.add(35, 'rollNo');
  t.is(TestTree.getTree()['rollNo'], 35);
});

test('see for addChain function add a branch', t => {
  const NewTestTree = TestTree.addChain(35, 'rollNo').addChain(
    500023356,
    'sapId',
  );
  t.deepEqual(
    [NewTestTree.getTree()['rollNo'], NewTestTree.getTree()['sapId']],
    [35, 500023356],
  );
});

test('see for get function to get element', t => {
  t.is(TestTree.get('rollNo'), 35);
});
