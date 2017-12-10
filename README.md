#  Shinju

_Conditional Computation with Trees_

#### Examples

```js
import Shinju from '@higherorder/shinju';

const MutableTree = Shinju();
MutableTree.add(35, 'rollNo');
console.log(MutableTree.getTree()['rollNo']); //=> 35;
```

```js
import Shinju from '@higherorder/shinju';

const ImmutableTree = Shinju();

const NewTree = ImmutableTree.addChain(35, 'rollNo').addChain(500023356, 'sapId');
console.log(NewTree.getTree()); //=> { sapId: 500023356, rollNo: 35 }
console.log(ImmutableTree.getTree()); //=> {}
```

#### Install

[![NPM](https://nodei.co/npm/@higherorder/shinju.png)](https://nodei.co/npm/@higherorder/shinju/)

#### Uses

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
