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

  return { add, getTree, addChain }
}

export default Shinju
