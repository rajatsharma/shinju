function Shinju (defaultTree = {}) {
  let tree = defaultTree

  function add (item, itemLens) {
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
