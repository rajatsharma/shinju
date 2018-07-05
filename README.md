# Shinju

_Helps in maintaining and manipulating your application State_

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

const NewTree = ImmutableTree.addChain(35, 'rollNo').addChain(
  500023356,
  'sapId',
);
console.log(NewTree.getTree()); //=> { sapId: 500023356, rollNo: 35 }
console.log(ImmutableTree.getTree()); //=> {}
```

#### Available Functions

- `add`

```js
import Shinju from '@higherorder/shinju';

const StateTree = Shinju();
StateTree.add(35, 'rollno');
```

- `get`

```js
StateTree.get('rollno'); //=> 35
```

- `getTree`

```js
StateTree.getTree(); //=> { rollno: 35 }
```

- `subscribe`

```js
StateTree.subscribe(_ => console.log(StateTree.getTree()));

StateTree.add('Rajat Sharma', 'name');
//=> { rollNo: 35, name:'Rajat Sharma' }
```

- `addChain`

```js
const NewStateTree = StateTree.addChain(500023356, 'sapId')
  .addChain('CSEOG', 'branch')
  .getTree(''); //=> { rollno: 35, sapId: '50023356', branch: 'CSEOG' }
```

#### Install

[![npm version](https://badge.fury.io/js/%40higherorder%2Fshinju.svg)](https://www.npmjs.com/package/@higherorder/shinju)
