import { Component, ComponentInternalInstance, Fragment, getCurrentInstance, VNode } from 'vue';

export function getChildComponents(type: string, childNodes?: VNode[]) {
  if (!childNodes) {
    const children = getCurrentInstance()?.subTree.children;
    childNodes = Array.isArray(children) ? children as VNode[] : [];
  }
  return childNodes.reduce((res, child) => {
    if ((child.type as Component).name === type && child.component) {
      res.push(child.component);
    } else if (child.type === Fragment && child.children) {
      res.push(...getChildComponents(type, child.children as VNode[]));
    }
    return res;
  }, [] as ComponentInternalInstance[]);
}
