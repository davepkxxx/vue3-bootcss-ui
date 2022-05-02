import { Component, Fragment, getCurrentInstance, VNode, VNodeTypes } from 'vue';

function getChildNodes(slotName = 'default') {
  const slots = getCurrentInstance()?.slots;
  return slots && slots[slotName] ? slots[slotName]!() : [];
}

function filterNodes(nodes: VNode[], predicate: (node: VNode) => boolean) {
  return nodes.reduce((result, node) => {
    if (predicate(node)) {
      result.push(node);
    } else if (node.type === Fragment && node.children) {
      result.push(...filterNodes(node.children as VNode[], predicate));
    }
    return result;
  }, [] as VNode[]);
}

function getNodeType(node: VNode) {
  if (Object.hasOwn(node.type as object, 'name')) {
    return (node.type as Component).name;
  } else {
    return node.type;
  }
}

export function filterChildNodes(predicate: (node: VNode) => boolean, slotName = 'default') {
  return filterNodes(getChildNodes(slotName), predicate);
}


export function filterChildNodesByType(predicate: (type?: VNodeTypes) => boolean, slotName = 'default') {
  return filterChildNodes((node) => predicate(getNodeType(node)), slotName);
}
