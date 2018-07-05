function Shinju (defaultTree = {}) {
  let tree = defaultTree
  let listeners = []

  function subscribe(fn){
    listeners.push(fn)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  function add (item, itemLens) {
    listeners.map(x => x())
    tree = { ...tree, [itemLens]: item }
  }

  function getTree () {
    return tree
  }

  function addChain (item, itemLens) {
    return Shinju({ ...tree, [itemLens]: item })
  }

  function get (i) {
    return tree[i]
  }

  return { add, getTree, addChain, get }
}

export default Shinju
