#  Shinju

_Conditional Computation with Trees_

[![Build Status](https://travis-ci.org/rajatsharma305/shinju.svg?branch=master)](https://travis-ci.org/rajatsharma305/shinju)
[![Coverage Status](https://coveralls.io/repos/github/rajatsharma305/shinju/badge.svg)](https://coveralls.io/github/rajatsharma305/shinju)
#### Examples

```js
import Shinju from '@higherorder/shinju';

const MutableTree = Shinju();
MutableTree.add(35, 'rollNo');
console.log(MutableTree.getTree().get('rollNo')); //=> 35;
```

```js
import Shinju from '@higherorder/shinju';

const ImmutableTree = Shinju();

const NewTree = ImmutableTree.addChain(35, 'rollNo').addChain(500023356, 'sapId');
console.log(NewTree.getTree()); //=> { sapId: 500023356, rollNo: 35 }
console.log(ImmutableTree.getTree()); //=> {}
```

#### Install

[![npm version](https://badge.fury.io/js/%40higherorder%2Fshinju.svg)](https://www.npmjs.com/package/@higherorder/shinju)

#### Uses

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
